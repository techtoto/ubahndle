def read_routes()
    return Dir.children('data/stops')
        .select { |child| child.end_with?(".csv") }
        .map { |file| file.delete_suffix!(".csv") }
end
