var input ='turpentine and turtles';
var vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = [];

for (let i = 0; i < input.length; i++) {
    const input2 = input[i];

    if (input2 === 'e') {
        resultArray.push(input[i])
    }
    if (input2 === 'u') {
        resultArray.push(input[i])
    }

   for (let j = 0; j < vowels.length; j++) {
       const vowels2 = vowels[j];

       if (input2 === vowels2) {
           resultArray.push(input2)
       }

       
   }
}

var resultString = resultArray.join('').toUpperCase();
console.log(resultString);