const grid = document.querySelector(".grid");
const gridRange = document.querySelector(".grid-btn");

drawSquares();

gridRange.addEventListener("change", function(e) {
    const qty = e.target.value;
    removeSquare();
    drawSquares(qty);
});
grid.addEventListener("mousemove", paint);

function paint() {
    console.log("asd")
}

function drawSquares(qty = 16) {
    const grid = document.querySelector(".grid");
    grid.style.gridTemplateColumns = `repeat(${qty}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${qty}, 1fr)`;
    for(let row = 0; row < qty; row++) {
      for(let col = 0; col < qty; col++) {
        createSquare();
      };  
    };
}

function createSquare() {
    const square = document.createElement("div");
    square.style.border = "1px solid #cecece";
    grid.appendChild(square);
}

function removeSquare(qty) {
    const grid = document.querySelector(".grid");
    if(grid.children.length > 0 ) {
        const squares = grid.children;
        for(let i = squares.length -1; i >= 0; --i) {
            squares[i].remove();
        }
    }

}
