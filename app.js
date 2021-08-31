const grid = document.querySelector(".grid");
const gridRange = document.querySelector(".grid-btn");
const rainbowBtn = document.querySelector("#rainbow-btn");
const colorBtn = document.querySelector("#color-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const clearBtn = document.querySelector("#clear-btn");


clearBtn.addEventListener("click", eraseAll);

rainbowBtn.addEventListener("click", function() {
    changeBtnColor();
    rainbowBtn.classList.toggle("active");
});

eraserBtn.addEventListener("click", function() {
    changeBtnColor();
    eraserBtn.classList.toggle("active");
});

colorBtn.addEventListener("click", function() {
    changeBtnColor();
    colorBtn.classList.toggle("active");
})


drawSquares();

gridRange.addEventListener("change", function(e) {
    const qty = e.target.value;
    removeSquares();
    drawSquares(qty);
    changeText(qty);
});

grid.addEventListener("mousemove", function(e) { 
    paint(e);
    if(rainbowBtn.classList.contains("active")) {
        paint(e, generateRandomColor());
    };
    if(eraserBtn.classList.contains("active")) {
        paint(e, "#ededed");
    };
    if(colorBtn.classList.contains("active")) {
        const color = document.querySelector(".color-display").value;
        paint(e, color);
    }
});

grid.addEventListener("touchmove", function(e) { 
    console.log(e)
    paint(e);
    if(rainbowBtn.classList.contains("active")) {
        paint(e, generateRandomColor());
    };
    if(eraserBtn.classList.contains("active")) {
        paint(e, "#ededed");
    };
    if(colorBtn.classList.contains("active")) {
        const color = document.querySelector(".color-display").value;
        paint(e, color);
    }
});


function paint(e, color="black") {
    e.stopPropagation();
    const square = e.target;
    const isMobile = navigator.userAgentData.mobile;
    if(!square.classList.contains("grid")) {
        square.style.backgroundColor = color;
        if(isMobile) {
            e.touches[0].target.style.backgroundColor = color;
        }
    };
    
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

function removeSquares() {
    const grid = document.querySelector(".grid");
    if(grid.children.length > 0 ) {
        const squares = grid.children;
        for(let i = squares.length -1; i >= 0; --i) {
            squares[i].remove();
        }
    }

}

function changeText(qty) {
    const rangeText = document.querySelector(".rangeText");
    rangeText.textContent = `${qty} x ${qty}`;
}

function changeBtnColor() {
    const buttons = document.querySelectorAll(".btn");
    for(let i = 0; i < buttons.length; i++ ) {
        if(buttons[i].classList.contains("active")) {
            buttons[i].classList.remove("active");
        };
    };
}



function eraseAll() {
    removeSquares();
    drawSquares();
    const range = document.querySelector(".grid-btn");
    changeText(range.value = 16);
    
}

function generateRandomColor() {
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}


