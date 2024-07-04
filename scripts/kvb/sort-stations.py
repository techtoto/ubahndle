#!/usr/bin/env python3
import csv
import sys
from os import path
from functools import cmp_to_key
from math import radians, sin, cos, atan2, sqrt

def station_distance(s1, s2):
    return distance(float(s1["Latitude"]), float(s1["Longitude"]), float(s2["Latitude"]), float(s2["Longitude"]))

def distance(lat1, lon1, lat2, lon2):
    r = 6373.0
    lat1 = radians(lat1)
    lon1 = radians(lon1)
    lat2 = radians(lat2)
    lon2 = radians(lon2)
    
    dlon = lon2 - lon1
    dlat = lat2 - lat1
    
    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))
    return r * c

stations = {}

with open(path.dirname(__file__) + "/../data/stations-kvb.csv") as stationsFile:
    reader = csv.DictReader(stationsFile)
    for row in reader:
        stations[row["ID"]] = row

targetStations = []
for s in sys.stdin.readlines():
    targetStations.append(stations[s.strip()])

def filter_neighbour(starter, currentStation, value):
    currentDist = station_distance(starter, currentStation)
    valueDist = station_distance(starter, value)
    return starter == currentStation or currentDist < valueDist

def find_neighbour(starter, currentStation, remainingStations):
    stationsSorted = sorted(
        filter(lambda value: filter_neighbour(starter, currentStation, value), remainingStations), 
        key=cmp_to_key(lambda a, b: station_distance(currentStation, a) - station_distance(currentStation, b))
    )
    if (len(stationsSorted) == 0):
        return None
    else:
        return stationsSorted[0]

def find_all_neighbours(allStations):
    if (len(allStations) == 0):
        return []
    lineStations = []
    starter = allStations[0]

    current = starter
    lineStations.append(starter)

    while len(allStations) > 0:
        allStations.remove(current)
        n = find_neighbour(starter, current, allStations)
        if (n == None):
            return lineStations

        if (current == starter or (
            station_distance(current, n) < station_distance(starter, n)
        )):
            lineStations.append(n)
            current = n
            continue
        else:
            return lineStations
    return lineStations

first_part = find_all_neighbours(targetStations)
second_part = find_all_neighbours(targetStations)

if (len(second_part) > 0):
    second_part.reverse()
    second_part.extend(first_part)
else:
    second_part = first_part

for s in second_part:
    print(s["ID"], end="")
    print(",", end="")
    print(s["Station"])
