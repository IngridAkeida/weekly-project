const game = () => {

  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;


  const playGame = () => {
      const rockButton = document.querySelector('.rock');
      const paperButton = document.querySelector('.paper');
      const scissorButton = document.querySelector('.scissor');


      const playerOptions = [rockButton,paperButton,scissorButton];


      const computerOptions = ['rock','paper','scissors']

      playerOptions.forEach(option => {
          option.addEventListener('click',function(){

              const movesLeft = document.querySelector('.movesleft');
              moves++;
              movesLeft.innerText = `Moves Left: ${4-moves}`;
                

              const choiceNumber = Math.floor(Math.random()*3);
              const computerChoice = computerOptions[choiceNumber];

              winner(this.innerText,computerChoice)
                
              if(moves == 4){
                  gameOver(playerOptions,movesLeft);
              }
          })
      })
        
  }
  const winner = (player,computer) => {
      const result = document.querySelector('.result');
      const playerScoreBoard = document.querySelector('.player-count');
      const computerScoreBoard = document.querySelector('.computer-count');
      player = player.toLowerCase();
      computer = computer.toLowerCase();
      if(player === computer){
          result.textContent = "Tie";
      }
      else if(player == 'rock'){
          if(computer == 'paper'){
              result.textContent = "You chose Rock the computer chose Paper, Computer won 🤖! ";
              computerScore++;
              computerScoreBoard.textContent = computerScore;

          }else{
              result.textContent = "You chose Paper the computer chose Rock, You won 🎉! ";
              playerScore++;
              playerScoreBoard.textContent = playerScore;
          }
      }
      else if(player == 'scissors'){
          if(computer == 'rock'){
              result.textContent = "You chose Scissors the computer chose Rock, Computer won 🤖! ";
              computerScore++;
              computerScoreBoard.textContent = computerScore;
          }else{
              result.textContent = "You chose Rock the computer chose Scissors, You won 🎉! ";
              playerScore++;
              playerScoreBoard.textContent = playerScore;
          }
      }
      else if(player == 'paper'){
          if(computer == 'scissors'){
              result.textContent = "You chose Paper the computer chose Scissors, Computer won 🤖! ";
              computerScore++;
              computerScoreBoard.textContent = computerScore;
          }else{
              result.textContent = "You chose Scissors the computer chose Paper, You won 🎉! ";
              playerScore++;
              playerScoreBoard.textContent = playerScore;
          }
      }
  }


  const gameOver = (playerOptions,movesLeft) => {

      const chooseMove = document.querySelector('.move');
      const result = document.querySelector('.result');
      const resultFinal = document.querySelector('.resultFinal');
      const reloadButton = document.querySelector('.reload');

      playerOptions.forEach(option => {
          option.style.display = 'none';
          result.style.display = 'none';
      })

     
      chooseMove.innerText = 'Game Over!!'
      movesLeft.style.display = 'none';

      if(playerScore > computerScore){
          resultFinal.style.fontSize = '2rem';
          resultFinal.innerText = 'You Won The Game 🎉🎊!!!'
          resultFinal.style.color = '#013220';
      }
      else if(playerScore < computerScore){
          resultFinal.style.fontSize = '2rem';
          resultFinal.innerText = 'You lost the game 😟';
          resultFinal.style.color = '#EA526F';
      }
      else{
          resultFinal.style.fontSize = '2rem';
          resultFinal.innerText = 'Tie';
          resultFinal.style.color = '#070600';
      }
      reloadButton.innerText = 'Restart';
      reloadButton.style.display = 'flex'
      reloadButton.addEventListener('click',() => {
          window.location.reload();
      })
  }

  playGame();
    
}

game();