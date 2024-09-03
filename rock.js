let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userScorePara=document.querySelector("#user_score");
let compScorePara=document.querySelector("#comp_score");

const showWinner = (userChoice, compChoice, userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = `You Wins! Your ${userChoice} beats ${compChoice}`
        console.log("user wins")
        msg.style.backgroundColor="green"; 
    }
    else {
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`
        console.log("comp wins")
        msg.style.backgroundColor="red"; 
    }
}

const draw = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor="rgb(255, 166, 0)"; 
}
const playGame = (userChoice) => {
    console.log("user choice=", userChoice)
    const compChoice = gencompChoice();
    console.log("comp choice=", compChoice)
    //condition

    if (userChoice == compChoice) {
        draw();
    }

    else {
        let userWin = true;
        if (userChoice == "paper") {
            //sciccors,rock
            userWin = compChoice == "scissors" ? false : true
        }
        else if (userChoice == "scissors") {
            //rock,paper
            userWin = compChoice == "rock" ? false : true
        }
        else {//rock
            //scissors,paper
            userWin = compChoice == "paper" ? false : true;
        }
        showWinner(userChoice, compChoice, userWin)
    }

}
const gencompChoice = () => {
    let options = ["rock", "paper", "scissors"]
    const idx = Math.floor(Math.random() * 3);
    return options[idx];

}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
        // console.log("this is clicked",userChoice)
    });
    // playGame(userChoice);
})




