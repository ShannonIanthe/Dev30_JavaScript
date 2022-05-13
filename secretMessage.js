let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//remove last string at end of array
secretMessage.pop();

//add strings to end of array
secretMessage.push('to', 'Program');

//change easily to right
secretMessage.splice(7, 1, 'right');

//remove first string in array
secretMessage.shift();

//add a string to beginning of array
secretMessage.unshift('Programming');

//remove strings
secretMessage.splice(6, 5, 'know,');


console.log(secretMessage.join(' '));