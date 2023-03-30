function changeColor() {
    this.classList.add('coloured');
}

function setGrid(size) {
    
    const container = document.getElementById("container")

    for (let index = 0; index < size; index++) {
        var mainDiv = document.createElement("div");
        mainDiv.className = "row"
        for (let j = 0; j < size; j++) {
            var div = document.createElement("div")
            div.className = "column"
            div.addEventListener('mouseenter', changeColor)
            mainDiv.appendChild(div)
        }
        container.appendChild(mainDiv)
    }
}

function changeGrid() {
    let newSize = prompt("Enter new size of the grid (max is 960)");
    if(newSize>960) {
        changeGrid()
    }
    else {
        const container = document.getElementById("container")
        container.innerHTML = "";
        setGrid(newSize)
    }
}

const changeSizeButton = document.getElementById("change_size");
changeSizeButton.addEventListener("click", changeGrid)

setGrid(16)


