let raceNumber = Math.floor(Math.random() *1000);
let registrationEarly = true;
let age = 34;

if (age > 18 && registrationEarly === true) {
    console.log(raceNumber + 1000);
}

if (age > 18 && registrationEarly === true) {
    console.log(`You will race at 9:30am ${raceNumber}`)
} else if ( age > 18 && registrationEarly !== early) {
    console.log(`You will race at 11:00am. ${raceNumber}`)
} else if (age < 18) {
    console.log(`You will run at 12:30pm. ${raceNumber}`)
}

