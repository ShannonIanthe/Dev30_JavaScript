let array1 = ["a", "b", "c", "a", "a", "b", "d"];
let array2 = ["a", "b", "b", "a", "e", "c", "c", "g"];

// 1. build count objects for each array
// 2. double for in loop through our objects
// 3. Compare each property
// 4. if there is an overlap
// 5. take the lowest value and push it into our result arrayas many tiems as that value

// count1 = {
//     a: 3,
//     b: 2,
//     c: 1,
//     d: 1
// };

let count1 = {};

array1.forEach(function (item) {
  if (count1.hasOwnProperty(item)) {
    count1[item] += 1;
  } else {
    count1[item] = 1;
  }
});

let count2 = {};

array2.forEach(function (item) {
  if (count2.hasOwnProperty(item)) {
    count2[item] += 1;
  } else {
    count2[item] = 1;
  }
});

// console.log(count1)
// console.log(count2)

let result = [];

for (prop1 in count1) {
  for (prop2 in count2) {
    if (prop1 === prop2) {
      let frequency = Math.min(count1[prop1], count2[prop2]);

      for (let i = 0; i < frequency; i++) {
          result.push(prop1);
      }
    }
  }
}

console.log(result);
