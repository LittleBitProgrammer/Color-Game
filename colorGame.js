//Inizializzo un array di colori
var numSquares = 6;
var colors = generateRandomColors(numSquares);

//selettori
var squares        = document.querySelectorAll(".square");
var pickedCol      = pickedColor();
var colorDisplay   = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetButton    = document.getElementById("reset");
var easyButton     = document.getElementById("easyBtn");
var hardButton     = document.getElementById("hardBtn");
var h1             = document.querySelector("h1");

//listener
resetButton.addEventListener("click",function(){
    // generate all new color
    colors = generateRandomColors(numSquares);
    //pick a new random color
    pickedCol = pickedColor();
    //reset text display
    messageDisplay.textContent = "";
    //change color display and text
    colorDisplay.textContent = pickedCol;
    for (var index = 0; index < squares.length; index++) {
        squares[index].style.backgroundColor = colors[index];
    }
    // reset text button
    resetButton.textContent = "New colors";
    //reset background on top
    h1.style.backgroundColor = "steelblue";
});

easyButton.addEventListener("click",function(){
    numSquares = 3;
    this.classList.add("selected");
    hardButton.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedCol = pickedColor();
    colorDisplay.textContent = pickedCol;
    for(var index = 0; index < squares.length; index++){
        if (colors[index]) {
            squares[index].style.backgroundColor = colors[index];
        }else{
            squares[index].style.display = "none";
        }
    }
});

hardButton.addEventListener("click", function(){
    numSquares = 6;
    this.classList.add("selected");
    easyButton.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedCol = pickedColor();
    colorDisplay.textContent = pickedCol;
    for(var index = 0; index < squares.length; index++){
        squares[index].style.backgroundColor = colors[index];
        squares[index].style.display = "block";
    }
});

//modificatori
colorDisplay.textContent = pickedCol;

for (var index = 0; index < squares.length; index++) {
    //add initial color to squares
    squares[index].style.backgroundColor = colors[index];

    //add event to squares
    squares[index].addEventListener("click",function(){
        //grab color of clicked square
        var clickedColor =  this.style.backgroundColor;

        //compare color to picked square
        if(clickedColor === pickedCol){
            messageDisplay.textContent = "Correct !";
            changeColors(pickedCol);
            h1.style.backgroundColor = pickedCol;
            resetButton.textContent = "Play Again ?";
        }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
        }
    });
}

//funzioni
function changeColors(color){
    // loop through all squares
    for (var index = 0; index < squares.length; index++) {
        // change each color
        squares[index].style.backgroundColor = color;
    }
}

function pickedColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(num){
    // make an array
    var arr = new Array();
    // add num random colors to array
    for (var index = 0; index < num; index++) {
        //get random color
        arr[index] = randomColor();
    }
    // return that array
    return arr;
}

function randomColor(){
    return "rgb(" + randomNumberColor() + ", " + randomNumberColor() + ", " + randomNumberColor() + ")";
}

function randomNumberColor(){
    return Math.floor(Math.random() * 256);
}