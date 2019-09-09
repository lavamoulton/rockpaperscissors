function computerPlay() {
    let rand = Math.floor(Math.random() * 3);
    if (rand == 0) {
        return "Rock";
    } else if (rand == 1) {
        return "Paper";
    } else if (rand == 2) {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    player = playerSelection.toUpperCase();
    
    if (player == "ROCK") {
        switch(computerSelection) {
            case "Rock":
                return "You tied!";
                break;
            case "Paper":
                return "You lose!";
                break;
            case "Scissors":
                return "You win!";
                break;
        }
    } else if (player == "PAPER") {
        switch(computerSelection) {
            case "Rock":
                return "You tied!";
                break;
            case "Paper":
                return "You lose!";
                break;
            case "Scissors":
                return "You win!";
                break;
        }
    } else if (player == "SCISSORS") {
        switch(computerSelection) {
            case "Rock":
                return "You tied!";
                break;
            case "Paper":
                return "You lose!";
                break;
            case "Scissors":
                return "You win!";
                break;
        }
    }
}

// add event listeners for all buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

    button.addEventListener('click', (e) => {
        game(button.id);
    });
    button.style.width = "25%";
    button.style.height = "50px";
});

const rockbtn = document.querySelector('#rockbtn');
rockbtn.style.backgroundColor = "gray";
rockbtn.style.color = "white";

const paperbtn = document.querySelector('#paperbtn');
paperbtn.style.backgroundColor = "white";

const scissorsbtn = document.querySelector('#scissorsbtn');
scissorsbtn.style.backgroundColor = "black";
scissorsbtn.style.color = "white";

const resultsDiv = document.querySelector('#results');
const playerDisp = document.createElement('h6');
const compDisp = document.createElement('h6');
const endGame = document.createElement('h5');

function game(playerBtn) {
    var playerScore = 0;
    var compScore = 0;

    //reset view
    resultsDiv.removeChild(playerDisp);
    resultsDiv.removeChild(compDisp);

    //assign player selection based on the button pressed
    if (playerBtn = "rockbtn") {
        playerSelection = "rock";
    } else if (playerBtn = "paperbtn") {
        playerSelection = "paper";
    } else if (playerBtn = "scissorsbtn") {
        playerSelection = "scissors";
    }
    
    result = playRound(playerSelection, computerPlay());

    if (result == "You win!") {
        playerScore++;
    } else if (result == "You lose!") {
        compScore++;
    }

    playerDisp.textContent = "Player Score: " + playerScore;
    compDisp.textContent = "Comp Score:" + compScore;
    resultsDiv.appendChild(playerDisp);
    resultsDiv.appendChild(compDisp);

    if (playerScore > 4 || compScore > 4) {
     
        resultsDiv.removeChild(playerDisp);
        resultsDiv.removeChild(compDisp);

        if (playerScore > 4) {
            endGame.textContent = "You win!";
        } else if (compScore > 4) {
            endGame.textContent = "You lose!";
        }

        resultsDiv.appendChild(endGame);
    }
    
    /*
    for (var i=0; i<5; i++) {
        var playerSelection = prompt("What would you like to play?");
        result = playRound(playerSelection, computerPlay());
        console.log(result);
        if (result == "You win!") {
            score++;
            //console.log(score);
        }
    }

    if (score > 2) {
        console.log("Congratulations! You won the game!");
    } else {
        console.log("You didn't win...");
    } */
}

game();