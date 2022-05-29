require "csv"
require "json"
require "rgeo"

routes = [
  "U1",
  "U2",
  "U3",
  "U4",
  "U5",
  "U6",
  "U7",
  "U8",
  "U9",
  "S1",
  "S2",
  "S25",
  "S26",
  "S3",
  "S41",
  "S42",
  "S45",
  "S46",
  "S47",
  "S5",
  "S7",
  "S75",
  "S8",
  "S85",
  "S9",
]

stations = {}
stationPoints = {}
factory = RGeo::Geos.factory(:native_interface => :ffi)

stations_csv = File.read('data/stations.csv')
csv = CSV.parse(stations_csv, headers: true)
csv.each do |row|
  stations[row['ID']] = {
    id: row['ID'],
    name: row['Station'].gsub(' and ', ' & ').gsub(/\([^)]*\)/, '').strip,
    latitude: row['Latitude'].to_f,
    longitude: row['Longitude'].to_f,
    stops: {},
  }
  stationPoints[row['ID']] = factory.point(row['Latitude'].to_f,row['Longitude'].to_f).fg_geom
end

routes.each do |r|
  shape_json = File.read("data/shapes/#{r}.json")
  shape = JSON.parse(shape_json)
  polyline = factory.line_string(shape.map { |coords|
    factory.point(coords[1], coords[0])
  })
  low_level_polyline = polyline.fg_geom

  route_csv = File.read("data/stops/#{r}.csv")
  csv = CSV.parse(route_csv)
  csv.each do |row|
    station_code = row[0]
    point = stationPoints[station_code]
    dist = low_level_polyline.project(point)
    low_level_closest_point = low_level_polyline.interpolate(dist)
    closest_point = factory.wrap_fg_geom(low_level_closest_point)
    closest_coord = shape.sort_by { |coords| (coords[1] - closest_point.x).abs + (coords[0] - closest_point.y).abs }.first
    stations[station_code][:stops][r] = {
      latitude: closest_coord[1],
      longitude: closest_coord[0]
    }
  end
end

puts "Writing to JSON file"

file = File.open("../src/data/stations.json", "w")
file.puts JSON.pretty_generate(stations)
file.close
