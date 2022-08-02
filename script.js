function gen(type) {
    let key = ""
    for (let i = 0; i < 10; i++) {
        key = key + Math.floor(Math.random() * 10)
    }
    document.getElementById("text").textContent = key
}
