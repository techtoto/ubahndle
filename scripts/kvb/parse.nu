export def parseData [] {
    let data = cat $"($env.FILE_PWD)/../kvb-haltestellen.csv"
        | from csv --separator ';' 
        | where Betriebsbereich == "STRAB" 
        | where Linien != ""
        | update Linien {|row| ($row.Linien | split row " " | each { into int})}

    let stations = $data | reduce --fold [] {|value, acc| 
        if ($acc | where Name == $value.Name | is-empty) {
            $acc ++ $value
        } else {
            $acc | update Linien {|row| 
                if ($row.Name == $value.Name) {
                    $row.Linien ++ $value.Linien | uniq | sort
                } else {
                    $row.Linien
                }
            }
        }
    }
    $stations
}