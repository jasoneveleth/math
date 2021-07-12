function scan(e) {
    query = e.target.value
    for (let i = 0; i < articles.length; i++) {
        if (try_match(query, articles[i].text)) {
            nodes[i].style.display = 'block'
        } else {
            nodes[i].style.display = 'none'
        }
    }
}

function try_match(needle, haystack) {
    const hwords = haystack.split(" ")
    const nwords = needle.split(" ")
    for (let i = 0; i < nwords.length; i++) {
        if (!hwords.includes(nwords[i])) { 
            return false 
        }
    }
    return true
}

function create_results(element) {
    for (let i = 0; i < articles.length; i++) {
        let li = document.createElement('li')
        let a = document.createElement('a')
        a.href = articles[i].link
        a.textContent = articles[i].title
        li.appendChild(a)
        element.appendChild(li)
    }
    return element.childNodes
}

function $(str) { 
    return document.getElementById(str)
}

// ===============+ MAIN +=====================
nodes = create_results($("results"))
$("search").addEventListener('input', scan)

