const gameChoices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let modal = document.getElementById("myModal");
let name = document.getElementById('name');
let submit = document.getElementById("submit");
let result = document.querySelector('#results');

//function that takes the user input.
function addName() {
    if (name.value === '') {
        alert("Please write your name.")
        return false;
    } else {
        
        modal.style.display = 'none';
    }
}
submit.addEventListener('click', addName);

function computerPlay() {
    let randomChoice = Math.floor(Math.random() * gameChoices.length);
    return gameChoices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        return "youWin";

    } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        return "youLose";

    } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        return "youWin";

    } else if ((playerSelection == "rock") && (computerSelection == "paper")) {
        return "youLose";

    } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        return "youWin";

    } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        return "youLose";

    } else
        return "It's a Draw";
}

function gameOver() {
    if (playerScore > computerScore) {
        let p2 = document.createElement('p');
        let p1 = document.createElement('p');
        p2.id = "sel-2";
        p1.id = "sel-3";
        p2.textContent = "GAME OVER";
        p1.textContent = `Congratulations ${name.value}, you won!!!`;
        result.appendChild(p2);
        result.appendChild(p1);
    } else if (computerScore > playerScore) {
        let p2 = document.createElement('p');
        let p1 = document.createElement('p');
        p2.id = "sel-2";
        p1.id = "sel-3";
        p2.textContent = "GAME OVER";
        p1.textContent = "The Computer Wins!!!";
        result.appendChild(p2);
        result.appendChild(p1);
    }
}

function game() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener("click", function (event) {
            //make the images shake
            button.classList.add("anim");
            setTimeout(function() {//stop the images from shaking after 0.5s
                button.classList.remove("anim");            
            }, 500);
           
            const computerSelection = computerPlay()
            let element = event.target;
            let playerSelection = element.id;
            let selection1 = document.getElementById("log1");
            let selection2 = document.getElementById("log2");
            
            selection2.textContent = `${name.value}'s Selection: ${playerSelection}`;
            selection1.textContent = `Computer Selection: ${computerSelection}`;

            let gameCount = playRound(playerSelection, computerSelection);
            if (gameCount == "youWin") {
                playerScore++;
            } else if (gameCount == "youLose") {
                computerScore++;
            }

            //update game score
            let score1 = document.getElementById("score1");
            let score2 = document.getElementById("score2");
            score1.textContent = `${name.value}'s score: ${playerScore}`;
            score2.textContent = `Computer score: ${computerScore}`;
            
            if (playerScore == 5 || computerScore == 5) {
                document.getElementById("rock1").disabled = true;
                document.getElementById("paper1").disabled = true;
                document.getElementById("scissors1").disabled = true;
                return gameOver();
            }

        });
    });
}

game();