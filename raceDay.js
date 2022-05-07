let raceNumber = Math.floor(Math.random() * 1000);
let registrationEarly = true;
let age = 28;

if (age > 18 && registrationEarly === true) {
    console.log(raceNumber + 1000);
}

if (age > 18 && registrationEarly === true) {
    console.log(`Early adults run at 9:30am. ${raceNumber}`)
} else if ( age > 18 && registrationEarly !== true) {
    console.log(`Late adults run at 11:00am. ${raceNumber}`)
} else if (age < 18) {
    console.log(`Youth registrants run at 12:30 pm (regardless of registration). ${raceNumber}`)
} else {
    console.log(`All others will race at 12.30 pm ${raceNumber}`);
}


