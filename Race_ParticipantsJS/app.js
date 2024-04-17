let raceNumber = Math.floor(Math.random() * 1000);
let earlyregister = true
let runnerAge = 28

earlyregister ? (raceNumber) : (raceNumber += 1000);

if (runnerAge > 18 && earlyregister = true ) {
    console.log('You are participating! Here is your Number for the race at 9:30am : ${raceNumber}');
} else if (runnerAge > 18 || earlyregister = false) {
    console.log('You are participating! Here is your Number for the race at 11:00am : ${raceNumber}');
} else if (runnersAge < 18 && !isRegisteredEarly === true) {
    console.log('Your race starts at 12:30 PM. Your race number is ' + raceNumber + '.');
} else {
    console.log('Please contact our support hotline.')
}
    
