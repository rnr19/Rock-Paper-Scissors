let userScore=0;
let compScore=0;
const userPoints=document.querySelector("#user-score");
const compPoints=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const genCompChoice = () =>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
let showWinner =(userWin,compChoice,userChoice)=>{
    if(userWin){
        userScore++;
        userPoints.innerText=userScore;
        console.log("you win!");
        msg.innerText=`You Win!,Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compPoints.innerText=compScore;
        console.log("you lose!");
        msg.innerText=`You Lose!,${compChoice} beat your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice) =>{
    console.log("userChoice=",userChoice);
    const compChoice=genCompChoice();
    console.log("compChoice-",compChoice);

    if(userChoice === compChoice){
            drawGame();
        }else{
            let userWin=true;
            if(userChoice === "rock"){
                userWin= compChoice === "paper" ? false : true;
            }else if(userChoice === "paper"){
                userWin= compChoice ==="scissors" ? false:true;
            }else{
                userWin= compChoice==="paper" ? false:true;
            }
            showWinner(userWin,compChoice,userChoice);
        }
    
}

const drawGame = () =>{
    console.log("It's a draw!");
    msg.innerText="It's a Draw!";
    msg.style.backgroundColor="#081b31";
}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    })
});
