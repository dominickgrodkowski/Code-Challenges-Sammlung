let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = true;
let runnerAge = 28;

earlyRegister ? raceNumber : (raceNumber += 1000);

if (runnerAge > 18 && earlyRegister) {
    console.log(`You are participating! Here is your Number for the race at 9:30 am: ${raceNumber}`);
} else if (runnerAge > 18 || !earlyRegister) {
    console.log(`You are participating! Here is your Number for the race at 11:00 am: ${raceNumber}`);
} else if (runnerAge < 18 && earlyRegister) {
    console.log(`Your race starts at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
    console.log('Please contact our support hotline for assistance.');
}
