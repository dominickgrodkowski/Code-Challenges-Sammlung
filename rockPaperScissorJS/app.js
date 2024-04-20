const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Please choose either rock, paper, or scissors.");
  }
};
/*  for testing:
const result = getUserChoice('scissor');
console.log(result); */

const getComputerChoice = () => {
  const random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};
/* for testing:
const result = getComputerChoice()
console.log(result); */

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return console.log("This Game is a tie");
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won!";
    } else if (computerChoice === "rock") {
      return "The user won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won!";
    } else if (computerChoice === "paper") {
      return "The user won!";
    }
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else if (computerChoice === "scissors") {
      return "The user won!";
    }
  }
};

/*console.log(determineWinner('paper', 'scissors'))*/

const playGame = () => {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();
  console.log("User choice:", userChoice);
  console.log("Computer choice:", computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
