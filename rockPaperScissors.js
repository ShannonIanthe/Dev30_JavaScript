var getUserChoice = function(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' | userInput === 'paper' | userInput === 'scissors') {
        return userInput
    } else {
        console.log('Not an acceptable answer, try again.');
    }
}

var determineWinner = function(userChoice, computerChoice) {
    if ( userChoice === computerChoice) {
        return 'Game was a tie.'
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'Computer Won!'
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
        return 'Computer Won'
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'Computer won'
    } else {
        return 'You won!'
    }
}

var playGame = function() {
    userChoice === getUserChoice('rock');
    console.log(userChoice);
    computerChoice === getComputerChoice('scissors')
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();
