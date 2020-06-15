var playerOne = document.getElementById("playerOne");
var playerTwo = document.getElementById("playerTwo");
var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var decideWinningScore = document.querySelector("input");
var totalScore = document.getElementById("max");
var p1Score = 0
var p2Score = 0
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            playerOne.classList.add("winner");
            gameOver = true;
        };
        playerOne.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function(){
   if(!gameOver){
    p2Score++;
    if(p2Score === winningScore){
        playerTwo.classList.add("winner");
        gameOver = true
    };
    playerTwo.textContent = p2Score;
   }
 });

 resetButton.addEventListener("click", function(){
     gameOver = false;
     p1Score = 0;
     playerOne.classList.remove("winner");
     p2Score = 0;
     playerTwo.classList.remove("winner");
     playerOne.textContent = p1Score;
     playerTwo.textContent = p2Score;
     decideWinningScore.value = 1;

 });

decideWinningScore.addEventListener("change", function(){
    totalScore.textContent = decideWinningScore.value;
    winningScore = Number(decideWinningScore.value);
});