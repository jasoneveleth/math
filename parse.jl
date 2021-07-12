articles = open("dict.js", "w")
write(articles, "const articles = [\n")
for filename in readdir("markdown")
    run(`pandoc -s --mathjax markdown/$filename -o articles/$filename.html`)

    write(articles, "{\nlink: \"articles/$filename.html\",\n")

    f = open("markdown/$filename", "r")
    for i in enumerate(eachline(f))
        if (i[1] < 2)
            continue
        end
        if (i[1] == 2)
            title = split(i[2], " ")[2]
            write(articles, "title: \"$title\",\ntext: \"")
            write(articles, lowercase(title))
        elseif (length(i[2]) > 1 && i[2][1:2] == "\$\$")
            continue
        else
            s = replace.(i[2], r"[.,;#$:{}()[\-\\\^\]]" => " ")
            write(articles, " ")
            write(articles, lowercase(s))
        end
    end
    close(f)

    write(articles, "\"\n},\n")
end
write(articles, "]")
close(articles)
