let raceNumber = Math.floor(Math.random() * 1000);
let registrationEarly = true;
let age = 28;

if (age > 18 && registrationEarly === true) {
    console.log(raceNumber += 1000);
}

if (age > 18 && registrationEarly === true) {
    console.log(`Early adults run at 9:30am, with registration number: ${raceNumber}`)
} else if ( age > 18 && registrationEarly !== true) {
    console.log(`Late adults run at 11:00am, with registration number: ${raceNumber}`)
} else if (age < 18) {
    console.log(`Youth registrants run at 12:30pm (regardless of registration), with race number: ${raceNumber}`)
} else {
    console.log(`All others will race at 12.30pm, with registration number: ${raceNumber}`);
}


