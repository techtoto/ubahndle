require "csv"
require "json"

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

data = {}

routes.each do |r|
  route_shape_data = []
  route_shape_json = File.read("data/shapes/#{r}.json")
  data[r] = JSON.parse(route_shape_json)
end

puts "Writing to JSON file"

file = File.open("../src/data/shapes.json", "w")
file.puts JSON.pretty_generate(data)
file.close
