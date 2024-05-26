#!/usr/bin/env nu

use parse.nu parseData

let stations = parseData
$stations
    | select Haltestelle Name YKoordinate XKoordinate
    | rename ID Station Latitude Longitude
    | to csv 
    | save -f $"($env.FILE_PWD)/../data/stations-kvb.csv"
