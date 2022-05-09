var getUserChoice = function (userInput) {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
      return userInput;
  } else {
    console.log('Not an acceptable answer. You must enter "rock", "paper", or "scissors".');
  }
};

var getComputerChoice = function () {
  var randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
};

var determineWinner = function (userChoice, computerChoice) {
  if (userChoice === "bomb") {
    return "The user won!";
  } 
  if (userChoice === computerChoice) {
    return "Game was a tie.";
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    return "Computer Won!";
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    return "Computer Won!";
  } else if (userChoice === "rock" && computerChoice === "paper") {
    return "Computer won!";
  } else {
    return "You won!";
  }
};

var playGame = function (userInput) {
  var userChoice = getUserChoice('rock');
  var computerChoice = getComputerChoice();

  console.log("User Choice", userChoice);
  console.log("Computer Choice", computerChoice);

  var winnerText = determineWinner(userChoice, computerChoice);

  console.log(winnerText);
};

var userInput = prompt();

playGame(userInput);
