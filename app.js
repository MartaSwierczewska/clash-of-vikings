let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");
const w1_div = document.getElementById("w1");
const w2_div = document.getElementById("w2");
const w3_div = document.getElementById("w3");

document.addEventListener("DOMContentLoaded", function () {

    function getComputerChoice(){
        const choices =['w1','w2','w3'];
        const randomNumber = Math.floor(Math.random()*3);
        return choices[randomNumber];
    }

    function convertToWord(letter){
        if (letter === 'w1') return "Ragnar";
        if (letter === 'w2') return "Hvitserk";
        return "Björn";
    }

    function win(userChoice, computerChoice){
        const userChoice_div = document.getElementById(userChoice);
        userScore++;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} - You win! :)`;
        document.getElementById(userChoice).classList.add('green-glow');
        setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
    }

    function lose(userChoice, computerChoice){
        const userChoice_div = document.getElementById(userChoice);
        computerScore++;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)} - You lost! :(`
        document.getElementById(userChoice).classList.add('red-glow');
        setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
    }

    function draw(userChoice, computerChoice){
        const smallUserWord = "user".fontsize(3).sub();
        const smallComputerWord = "computer".fontsize(3).sub();
        const userChoice_div = document.getElementById(userChoice);
        result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)} - It's a draw!`
        document.getElementById(userChoice).classList.add('gray-glow');
        setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
    }

    function game(userChoice){
        const computerChoice=getComputerChoice();
        switch(userChoice+computerChoice){
            case "w1w3":
            case "w3w1":
            case "w3w2":
                win(userChoice, computerChoice);
                break;
            case "w1w2":
            case "w2w3":
            case "w3w1":
                lose(userChoice, computerChoice);
                break;
            case "w1w1":
            case "w2w2":
            case "w3w3":
                draw(userChoice, computerChoice);
                break;
        }
    }

    w1_div.addEventListener('click', () => game("w1"))

    w2_div.addEventListener('click', () => game("w2"))

    w3_div.addEventListener('click', () => game("w3"))
})



