const gameChoices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

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
        const container = document.querySelector('#results');
        const playerWin = document.createElement('div');
        let h1 = document.createElement('h1');
        let p1 = document.createElement('p');
        playerWin.classList.add('player-win');
        playerWin.textContent = "Game Over";
        p1.textContent = "Congratulations you win!!!";
        h1.textContent = `Final score is ${playerScore} - ${computerScore}`;
        h1.style.color = '#073b4c';
        p1.style.color = '#073b4c';
        playerWin.style.color = '#073b4c';
        playerWin.style.fontSize = '20px'
        p1.style.fontSize = '20px'
        h1.style.fontSize = '20px'
        container.appendChild(playerWin);
        container.appendChild(p1);
        container.appendChild(h1);
    } else if (computerScore > playerScore) {
        const container = document.querySelector('#results');
        const playerWin = document.createElement('div');
        let h1 = document.createElement('h1');
        let p1 = document.createElement('p');
        playerWin.classList.add('player-win');
        playerWin.textContent = "Game Over";
        p1.textContent = "The Computer Wins!!!";
        h1.textContent = `Final score is ${computerScore} - ${playerScore}`;
        h1.style.color = '#073b4c';
        p1.style.color = '#073b4c';
        playerWin.style.color = '#073b4c';
        playerWin.style.fontSize = '20px'
        p1.style.fontSize = '20px'
        h1.style.fontSize = '20px'
        container.appendChild(playerWin);
        container.appendChild(p1);
        container.appendChild(h1);
    }
}

function game() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener("click", function (event) {
            const computerSelection = computerPlay()
            let element = event.target;
            let playerSelection = element.id;
            const selection = document.querySelector('#selection');
            const selection1 = document.createElement('div');
            const selection2 = document.createElement('div');
            selection1.classList.add('computer-select');
            selection2.textContent = `Player Selection: ${playerSelection}`;
            selection1.textContent = `Computer Selection: ${computerSelection}`;
            selection.appendChild(selection2);
            selection.appendChild(selection1);


            let gameCount = playRound(playerSelection, computerSelection);
            if (gameCount == "youWin") {
                playerScore++;
            } else if (gameCount == "youLose") {
                computerScore++;
            }

            const score = document.querySelector('#score');
            const score1 = document.createElement('div');
            const score2 = document.createElement('div');
            score1.textContent = `Player score: ${playerScore}`;
            score2.textContent = `Computer score: ${computerScore}`;
            score2.classList.add('computer-select');
            score.appendChild(score1);
            score.appendChild(score2);
            
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