let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.getElementById("msg");
let user = document.getElementById("user-score1");
let computer = document.getElementById("computer-score1");


const genCompChoice = () =>{
    const options = ["ROCK","PAPER","SCISSOR"];
    const index = Math.floor( Math.random()* 3);
    return options[index];
}

const drawGame = ()=>{
    // console.log("game was draw.");
    msg.innerText = "game was draw.Play Again.";
    msg.style.backgroundColor = "rgb(79 174 251)"
}

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
       
        msg.innerText=`YOU WIN! Your ${userChoice} beats ${compChoice}`;
        userScore++;
        user.innerText = userScore;
        msg.style.backgroundColor = "green";
        // console.log("YOU WIN!");
    }else{
        // console.log("YOU LOSE,COMPUTER WIN!");
        msg.innerText = `YOU LOSE! ${compChoice} beats Your ${userChoice}`;
        compScore++;
        computer.innerText = compScore;
        msg.style.backgroundColor = "Red";
    }
}


const playGame = (userChoice )=>{
    // console.log("user choice = ",userChoice);
    const compChoice = genCompChoice();
    // console.log("computer choice = ",compChoice);
    

    if(compChoice === userChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "ROCK"){
            userWin = compChoice === "PAPER"? false : true;
        }
        if(userChoice === "PAPER"){
            userWin = compChoice === "SCISSOR" ? false:true;
        }
        if(userChoice === "SCISSOR"){
            userWin = compChoice === "ROCK" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});