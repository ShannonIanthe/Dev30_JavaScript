//unable to call the variable 'name' because it is deprecated. I am assuming this means it is a global scope
const militaryName = "Rugen";
const rank = "Private";
const age = 47;

if (age < 18) {
  console.log("You are too young for the military!");
} else if (militaryName === "Rugen" && rank === "Count") {
  console.log(
    "My name is Inigo Montoya, you killed my father, prepare to die.");
} else if (rank === "Captain") {
  console.log(`Aye Aye Aye Captain ${militaryName}`);
} else if (rank === "Private" && age > 40); {
  console.log(
    `What have you been doing with your life ${militaryName}`);
} else {
        console.log(
            `Hello ${rank} ${militaryName}, I cannot wait to celebrate your ${age + 1}th birthday next year!`);
    }

//not sure what the syntax error is here


