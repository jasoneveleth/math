function scan(e) {
    console.log("start")
    const myobj = globalobj = new Object()
    results.innerHTML = ''
    articles.forEach((article) => {
        if (search_matches(e.target.value, article.text, myobj)) {
            append(results, article)
        }
        if (myobj !== globalobj) { return }
    })
    console.log("finish")
}

function append(element, obj) {
    element.innerHTML += "<a href=\"" + obj.link + "\">" + obj.title + "</a>" + "<br>"
}

function search_matches(needle, haystack, myobj) {
    const hwords = haystack.split(" ")
    const nwords = needle.split(" ")
    for (let i = 0; i < nwords.length; i++) {
        if (!hwords.includes(nwords[i])) { 
            return false 
        }
        if (myobj !== globalobj) { return }
    }
    return true
}

// ===============+ MAIN +=====================
search = document.getElementById("search")
results = document.getElementById("results")
search.addEventListener('input', scan)
globalobj = new Object()
