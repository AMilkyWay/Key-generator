let type = "num"
function gen() {
    let key = ""
    if (type == "num") {
      for (let i = 0; i < 20; i++) {
        key = key + Math.floor(Math.random() * 10)
      }
    }
    document.getElementById("text").textContent = key
}
