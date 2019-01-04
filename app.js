let userScore =0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){

    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){

    if(letter === "r")return "Rock";
    if(letter === "p")return "Paper";
    return "Scissors";
}

function win(userChoice,computerChoice){

    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
     userScore++;    
     userScore_span.innerHTML = userScore;
     computerScore_span.innerHTML = computerScore;
     
     result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} .You Win!`; 
     userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'),300);
}

function lost(userChoice,computerChoice){

    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);

    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    
    
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} .You Lost!`;
    userChoice_div.classList.add('red-glow');
    setTimeout( () =>   userChoice_div.classList.remove('red-glow'),300);

}


function draw(userChoice,computerChoice){

    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);

    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord} .It's a Draw!`;
    userChoice_div.classList.add('blue-glow');
    setTimeout( ()  =>  userChoice_div.classList.remove('blue-glow'),300);
}
    





function game(userChoice){
     
       const computerChoice = getComputerChoice();
       switch(userChoice + computerChoice){
            case "rs":
            case "pr":
            case "sp":
            win(userChoice,computerChoice);
            break;

            case "sr":
            case "rp":
            case "ps":
            lost(userChoice,computerChoice);
            break;

            case "rr":
            case "pp":
            case "ss":
            draw(userChoice,computerChoice);
            break; 
       }
}

 

function main(){

    rock_div.addEventListener('click', function(){

        game("r");
    })
    
    paper_div.addEventListener('click', function(){
    
        game("p");
    })
    
    scissors_div.addEventListener('click', function(){
    
        game("s");
    })

}

main();



