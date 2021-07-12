onmessage = (e) => {
    console.log("start")
    const query = e.data[0]
    const start = e.data[1]
    const stop = e.data[2]
    const articles = e.data[3]

    arr = []
    for (let i = start; i < stop; i++) {
        if (try_match(query, articles[i].text)) {
            arr.push("block")
        } else {
            arr.push("none")
        }
    }

    a = 0
    for (let i = 0; i < 3000000000; i++) { a++ }
    console.log("done")

    postMessage(arr);
};

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

