#!/usr/bin/env nu

use parse.nu parseData

let stations = parseData

let lines = $stations | get Linien | flatten | uniq

for line in $lines {
    let lineStations = $stations | reduce --fold [] {|station, acc| 
        if ($line in $station.Linien) {
            $acc | append $station
        } else {
            $acc
        }
    }
    $lineStations 
        | select Haltestelle
        | to csv --noheaders
        | python3 $"($env.FILE_PWD)/sort-stations.py"
        | save -f $"($env.FILE_PWD)/../data/stops/($line).csv"
}
