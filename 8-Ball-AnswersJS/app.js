let userName = 'Dominick'
userName ? console.log(`Hello, ${userName}!`)
: console.log(`Hello!`)
let userQuestion = `Am I gonna master Javascript ?`
console.log(`${userName} asked: ${userQuestion}`);
let randomNumber = Math.floor(Math.random()*8)
let eightBall =''
switch (randomNumber) {
case 0:
    eightBall = 'If you want it so should it be';
    break;
        
    case 1:
      eightball = "It is certain";
      break;
  
    case 2:
      eightball = "It is decidedly so";
      break;
  
    case 3:
      eightball = "Reply hazy try again";
      break;

    case 4:
        eightball = "Cannot predict now";
        break;

    case 5:
      eightball = "Do not count on it";
      break;

    case 6:
        eightball = "Outlook not so good";
        break;

    case 7:
      eightball = "Signs point to yes";
      break;

    case 8:
      eightball = "The Ancient Romans used to drop a piece of toast into their wine for good health - hence why we 'raise a toast'.";
      break;

      default:
    console.log("There appears to be a problem ${userName}! Please try again or please contact Dominick Grodkowski.");
}
console.log(`Magic Eightball: ${eightBall}`);
