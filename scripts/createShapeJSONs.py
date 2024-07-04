#!/usr/bin/env python3
import json, csv, glob, os
stations = []

if not os.path.exists("./data"):
    print("./data does not exist. Make sure to navigate into the folder of the target city.")
    exit(1)

with open("./data/stations.csv", newline="") as csvfile:
    reader = csv.reader(csvfile)

    for line in reader:
        stations.append(line)

def getStationById(id):
    for station in stations:
        if station[0] == str(id):
            return station
    raise Exception(f"id missing: {id}")

for filename in glob.glob("./data/stops/*.csv"):
    stops = []
    with open(filename) as file:
        reader = csv.reader(file)
        jsonArray = []
        for row in reader:
            stops.append(row[0])

    for stop in stops:
        if stop == "":
            continue
        station = getStationById(stop)
        jsonArray.append([float(station[2]), float(station[3])])

    with open(f"./data/shapes/{os.path.basename(filename).replace('.csv', '.json')}", "w") as outFile:
        outFile.write(json.dumps(jsonArray, indent=4))
