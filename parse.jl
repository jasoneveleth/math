for file in readdir("markdown")
    run(`pandoc -s --mathjax markdown/$file -o articles/$file.html`)
end
