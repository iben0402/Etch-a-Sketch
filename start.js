const container = document.getElementById("container")

for (let index = 0; index < 16; index++) {
    var mainDiv = document.createElement("div");
    mainDiv.className = "row"
    for (let j = 0; j < 16; j++) {
        var div = document.createElement("div")
        div.className = "column"
        mainDiv.appendChild(div)
    }
    container.appendChild(mainDiv)
    
}