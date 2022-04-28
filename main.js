console.log('Hello World!');//Below I am assigning the constant variable called kelvin to 293
const kelvin = 293;

//In order to compute kelvin to celsius I am assigning the variable celsius the value of 293 -273
const celsius = kelvin - 273;

//I am assigning a variable called fahrenheit then converting celsius to fahrenheit with the given formula
let fahrenheit = celsius * (9.0/5) + 32;

//I am rounding the fahrenheit variable with the .floor method from the Math object 
//It rounds the number down
fahrenheit = Math.floor(fahrenheit);

console.log(`The tempature is ${fahrenheit} degrees Fahrenheit.`)

//converting Celsius to Newton then rounding it down with the .floor method from the math object
const newton = Math.floor(celsius * (33/100));

console.log(`The tempature is ${newton} degrees Newton.`)

