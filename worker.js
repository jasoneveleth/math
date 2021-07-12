onmessage = (e) => {
    const query = e.data[0];
    const start = e.data[1];
    const stop = e.data[2];

    arr = []
    for (let i = start; i < stop; i++) {
        if (try_match(query, articles[i])) {
            arr.push("block")
        } else {
            arr.push("none")
        }
    }
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

