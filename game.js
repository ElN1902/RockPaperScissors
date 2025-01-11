
// GET computer's choice
function getComputerChoice() {
    let randomNumber = Math.random() * 100;
    if (randomNumber >= 0 && randomNumber < 34) {
     return 'rock';
    } 
    else if (randomNumber >=34 && randomNumber < 77) {
     return 'paper';
    }
    else {
     return 'scissors';
    }
 }
 
 
 // GET human choice
 function getHumanChoice() {
     var move = prompt('What is your move: ');
     move = move.toLowerCase();
     while (move != 'rock' && move != 'paper' && move != 'scissors') {
         move = prompt('What is your move: ');
           }
     return move;
 }
 
 
 // PLAY one round
 function playRound(humanChoice, computerChoice) {
     // COMPARE the computer and human choices
     let winner;
     if (humanChoice === 'rock') {
         if (computerChoice === 'paper') {
             console.log('You lose! Paper beats Rock.');
             winner = 'computer';
             return winner;
         }
         else if (computerChoice === 'scissors') {
             console.log('You won! Rock beats Scissors');
             winner = 'human'
             return winner;
         }
         else {
             console.log('Draw!')
         }
     }
     else if (humanChoice === 'paper') {
         if (computerChoice === 'rock') {
             console.log('You won! Paper beats Rock.');
             winner = 'human';
             return winner;
         }
         else if (computerChoice === "scissors") {
             console.log('You lose! Scissors beat Paper.');
             winner = 'computer';
             return winner;
         }
         else {
             console.log('Draw!');
         }
     }
     else {
         if (computerChoice === 'rock') {
             console.log('You lose! Rock beats scissors.');
             winner = 'computer';
             return winner;
         }
         else if (computerChoice === 'paper') {
             console.log('You won! Scissors beat paper.');
             winner = 'human';
             return winner;
         }
         else {
             console.log('Draw!');
         }
     }
     }
 
 
 // REPEAT 5 times
 function playGame() {
     var humanScore = 0;
     var computerScore = 0;
 
     for (let i = 0; i < 5; i++) {
         var humanChoice = getHumanChoice();
         console.log(humanChoice);
         var computerChoice = getComputerChoice();
         console.log(computerChoice);
         let score = playRound(humanChoice, computerChoice);
         if (score === 'computer') {
             computerScore += 1;
         }
         else if (score === 'human') {
             humanScore += 1;
         }
     }
 
     if (computerScore > humanScore) {
         console.log('You lose the game!');
     }
     else if(computerScore < humanScore) {
         console.log('Congratulations! You won the game');
     }
     else {
         console.log('Draw!');
     }
 }
 
 playGame();
 

