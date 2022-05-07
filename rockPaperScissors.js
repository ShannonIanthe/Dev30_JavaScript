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
    } else if ( userChoice === 'rock' && computerChoice === 'paper') {
        return 'Computer Won'
    } else if (userChoice === 'paper' && computerChoice === 'scissors' | 'rock') {
        return 'Computer Won'
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
        return 'Computer Won'
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return 'You won'
    } else if ()
}

//var answer = getUserChoice('scissors');
//console.log(answer);