let userScore = 0;
let compScore = 0;
//Accessing a choices
const choices = document.querySelectorAll(".choice");
// Accessing a message
const msg = document.querySelector("#msg");
// Accessing a user score
const userScorePara = document.querySelector("#user-score");
// Accessing a computer score
const compScorePara = document.querySelector("#comp-score");

//Giving choices to computer
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]; 
};

//Print message for draw game
const drawGame = () => {
    msg.innerText = "Game was draw! Play Again";
    msg.style.backgroundColor = "#081b31";
};

//Pring message for win/loose game
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Loose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

// Accessing a computer choice
const playGame = (userChoice) => {
    // Generate a computer choice
    const compChoice = genCompChoice();
    //Condition for winning, loosing & draw the game
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else
        {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// Accessing a user choice
choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});