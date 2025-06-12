function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    if (choice == 0) {
        return "rock"
    }
    else if (choice == 1) {
        return "paper"
    }
    else if (choice == 2) {
        return "scissors"
    }
}
function getHumanChoice() {
    let user_choice = prompt("Enter a choice")
    let user_choice2 = user_choice.toLowerCase()
    return user_choice2
}
function playRound(human, computer) {
    if (human == "rock") {
        if (computer == "scissors") {
            console.log("You Win! Rock Beats Scissors")
            humanScore += 1
        }
        else if (computer == "paper") {
            console.log("You Lose! Paper beats rock")
            computerScore += 1
        }
        else {
            console.log("A tie!?")
        }
    } 
    else if (human == "scissors") {
        if (computer == "paper") {
            console.log("You Win! Scissors beat paper")
            humanScore += 1
        }
        else if (computer == "rock") {
            console.log("You Lose! Rock beats scissors")
            computerScore += 1
        }
        else {
            console.log("A tie!?")
        }
    }
    else if (human == "paper") {
        if (computer == "rock") {
            console.log("You Win! Paper beats rock")
            humanScore += 1
        }
        else if (computer == "scissors") {
            console.log("You Lose! Scissors beats paper")
            computerScore += 1
        }
        else {
            console.log("A tie!?")
        }
    }
}
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
    }
    if (humanScore > computerScore) {
        return "Human wins!"
    }
    else if (computerScore > humanScore) {
        return "Computer wins!"
    }
    else {
        return "A tie!"
    }
}

let humanScore = 0
let computerScore = 0
console.log(playGame())

