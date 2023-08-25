// Iteration 8: Making scoreboard functional
const playagain=document.getElementById("play-again-button")

function open(){
    localStorage.setItem("score",0)
    window.location.href="game.html"
}
playagain.onclick=open
var score=document.getElementById("score-board")
score.innerText=localStorage.getItem("score");
