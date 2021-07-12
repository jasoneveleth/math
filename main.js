function scan(e) {
    query = e.target.value

    console.log("pre term")
    worker.terminate()
    console.log("post term, pre new")
    worker = new Worker("worker.js");
    console.log("post new pre onmessage")

    worker.onmessage = (e) => {
        hidden_arr = e.data
        for (let i = 0; i < e.data.length; i++) {
            nodes[i].style.display = hidden_arr[i]
        }
    }
    console.log("post onmess, pre post")
    worker.postMessage([query, 0, articles.length, articles])
    console.log("post post")
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
