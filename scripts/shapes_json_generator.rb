require "csv"
require "json"

routes = [
  "1",
  "3",
  "4",
  "5",
  "7",
  "9",
  "12",
  "13",
  "15",
  "16",
  "17",
  "18"
]

stationPoints = {}

stations_csv = File.read('data/stations.csv')
csv = CSV.parse(stations_csv, headers: true)
csv.each do |row|
  stationPoints[row['ID']] = {
    latitude: row['Latitude'].to_f,
    longitude: row['Longitude'].to_f,
  }
end

data = {}

routes.each do |r|
  route_shape_data = []
  route_shape_json = File.read("data/shapes/#{r}.json")
  data[r] = JSON.parse(route_shape_json)
end

routes.each do |r|
  #   shape_json = File.read("data/shapes/#{r}.json")
  #   shape = JSON.parse(shape_json)
  #   polyline = factory.line_string(shape.map { |coords|
  #     factory.point(coords[0], coords[1])
  #   })
  #   low_level_polyline = polyline.fg_geom

  data[r] = []

  route_csv = File.read("data/stops/#{r}.csv")
  csv = CSV.parse(route_csv)
  csv.each do |row|
    station_code = row[0]
    point = stationPoints[station_code]
    #     dist = low_level_polyline.project(point)
    #     low_level_closest_point = low_level_polyline.interpolate(dist)
    #     closest_point = factory.wrap_fg_geom(low_level_closest_point)
    #     closest_coord = shape.sort_by { |coords| (coords[1] - closest_point.x).abs + (coords[0] - closest_point.y).abs }.first
    puts point
    data[r].push([point[:latitude], point[:longitude]])
  end
end

puts "Writing to JSON file"

file = File.open("../src/data/shapes.json", "w")
file.puts JSON.pretty_generate(data)
file.close
