// 1. Want to compare a given number to the number to it's right
// 2. We want to mulitply those 2 numbers together
// 3. Find some way to store the results (or product)
// 4. Return the largest product

var numbers = [5, 1, 2, 3, 1, 4];
var products = [];

for (var i = 0; i < numbers.length; i++) {
    var currentNum = numbers[i];
    var nextNum = numbers[i + 1];

    var product = currentNum * nextNum;

    if (product) {
        products.push(product);
    }
}


var largestProduct = Math.max(...products);

console.log(largestProduct);