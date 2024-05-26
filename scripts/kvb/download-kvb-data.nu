#!/usr/bin/env nu

let data = (http get https://data.webservice-kvb.koeln/service/opendata/haltestellen/csv)

# Convert to utf8
$data | iconv -f ISO-8859-1 -t UTF-8//TRANSLIT -o $"($env.FILE_PWD)/../kvb-haltestellen.csv"
