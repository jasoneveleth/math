function scan(e) {
    results.innerHTML = ''
    for (let i in articles) {
        append(results, articles[i])
    }
}

function append(element, obj) {
    element.innerHTML += "<a href=" + obj.link + ">" + obj.title + "</a>" + "<br>"
}

// ===============+ MAIN +=====================
search = document.getElementById("search")
results = document.getElementById("results")

search.addEventListener('input', scan)

