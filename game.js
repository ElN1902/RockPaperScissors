
// GET computer's choice
function getComputerChoice() {
    let randomNumber = Math.random() * 100;
    if (randomNumber < 34) {
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
     let move = prompt('What is your move: Rock, Paper or Scissors? ').toLowerCase();

     // VALIDATE the user's input
     while (move !== 'rock' && move !== 'paper' && move !== 'scissors') {
         move = prompt('Invalid input. Please enter Rock, Paper or Scissors: ').toLowerCase();
           }
     return move;
 }
 
 
 // DEFINE the winner
 function playRound(humanChoice, computerChoice) {
     if (humanChoice === computerChoice) {
         console.log("It's a tie!");
         return -1;
     }
     else if ((humanChoice === 'paper' && computerChoice === 'rock') ||
                (humanChoice === 'rock' && computerChoice === 'scissors') ||
                (humanChoice === 'scissors' && computerChoice === 'paper')) 
                {
                    console.log(`You won! ${cap(humanChoice)} beats ${cap(computerChoice)}`);
                    return 1;
                }
     else {
         console.log(`You lost. ${cap(computerChoice)} beats ${cap(humanChoice)}`);
         return 0;
     }
 }
 
 // INITIATE the game
 function playGame() {
    // INITIALIZE human and computer scores at the beginning of the game
     var humanScore = 0;
     var computerScore = 0;
    // REPEAT round 5 times
     for (let i = 1; i <= 5; i++) {
         let humanChoice = getHumanChoice();

         // STRUCTURE the output
         console.group(`Round ${i}`);
         console.log(`Your move: ${humanChoice}`);
         let computerChoice = getComputerChoice();
         console.log(`Computer move: ${computerChoice}`);
         let score = playRound(humanChoice, computerChoice);
        // INCREMENT the human or computer score depending on the winner of the round
         if (score === 0) {
             computerScore += 1;
         }
         else if (score === 1) {
             humanScore += 1;
         }
         console.groupEnd(`Round ${i}`);
     }

     console.group('The game is over.');

     // FIND the winner
     if (computerScore > humanScore) {
         console.log('You lose the game! Better luck next time!');
     }
     else if(computerScore < humanScore) {
         console.log('Congratulations! You won the game.');
     }
     else {
         console.log('It\'s a tie!');
     }
     console.groupEnd('The game is over.')
 }

 // CAPITALIZE the input
 function cap(string) {
    let capString = string.charAt(0).toUpperCase() + string.slice(1);
    return capString;
 }

 playGame();
 

