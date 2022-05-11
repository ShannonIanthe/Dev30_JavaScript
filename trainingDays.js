// The scope of `random` is too loose 

const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = events => {
 let days
  if (events === 'Marathon') {
    return days = 50;
  } else if (events === 'Triathlon') {
     return days = 100;
  } else if (events === 'Pentathlon') {
     return days = 200;
  }
};

// The scope of `name` is too tight 
const firstName = 'Nala'; 
const logEvent = (firstName,events) => {
  console.log(`${firstName}'s event is: ${events}`);
};

const logTime = (firstName, days) => {
  console.log(`${firstName}'s time to train is: ${days} days`);
};

const events = getRandEvent();
const days = getTrainingDays(events);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 

logEvent(firstName, events);
logTime(firstName, days);

//
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
 
logEvent(name2, event2);
logTime(name2, days2);