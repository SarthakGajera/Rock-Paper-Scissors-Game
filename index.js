let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx=Math.floor(Math.random() * 3);
  return options[randomIdx];
  //generate a random choice between rock paper and scissors
};

const drawGame=()=>{
    console.log("The Game was Drawed");
    msg.innerHTML="Game was Draw. Play Again";
    msg.style.backgroundColor="blue"
}

const showWinner=(userWin)=>{
  if(userWin){
    userScore++;
    userScorePara.innerHTML=userScore
    console.log("You win")
    msg.innerHTML="you won!!"
    msg.style.backgroundColor="green"
  }
  else{
    compScore++;
    compScorePara.innerHTML=compScore;
    console.log("you lose")
    msg.innerHTML="you lost"
    msg.style.backgroundColor="red"
  }
}

const playGame = (userChoice) => {
  console.log("user choice:", userChoice);
  //generate computer choice
  const compChoice=genComputerChoice();
  console.log("computer choice:",compChoice)

  if(userChoice===compChoice){
    //Draw game
    drawGame();
  }
  else{
    let userWin=true;
    if(userChoice==='rock'){
        //scissors,paper
        userWin=compChoice==="paper"?false:true
    }
    else if(userChoice==='paper'){
      userWin=compChoice==='scissors'?false:true
    }
    else{
      userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin)
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
