function scan(e) {
    query = e.target.value

    worker.terminate()
    worker = new Worker("worker.js");

    worker.onmessage = (e) => {
        hidden_arr = e.data
        for (let i = 0; i < e.data.length; i++) {
            nodes[i].style.display = hidden_arr[i]
        }
    }
    worker.postMessage([query, 0, articles.length, articles])
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
let worker = new Worker("worker.js");
