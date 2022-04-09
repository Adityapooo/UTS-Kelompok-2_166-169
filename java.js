var squares = document.querySelectorAll(".squares");
var colors = [
    "blue",
    "pink",
    "white",
    "yellow",
    "green",
    "red",
   
];
var r;
var pickedColor;
var colorQuestion = document.getElementById("colorQuestion");
var answer = document.getElementById("answer");
var btnPlayAgain = document.querySelector(".playAgain");
function StartGame() {
    r = Math.round(Math.random() * 5 + 0);
    pickedColor = colors[r];
    colorQuestion.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor) {
                answer.textContent;
                alert("Yeay !!! Kamu Benar Congratulations !!! ")
                changeColorCorrect(pickedColor);
            } else {
                alert("Try Again !")
                answer.textContent = " Kamu Salah ";
                this.style.backgroundColor = "#232323";
            }
        });
    };
}

StartGame();
btnPlayAgain.addEventListener("click", function() {
    answer.textContent = "";
    StartGame();
});


function changeColorCorrect(color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}
