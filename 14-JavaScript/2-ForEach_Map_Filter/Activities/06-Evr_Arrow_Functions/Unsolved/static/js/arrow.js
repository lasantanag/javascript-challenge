var theStagesOfJS = ["confidence", "sadness", "confusion", "realization", "debugging", "satisfaction"];
var students = [
  { name: "Malcolm", score: 80 },
  { name: "Zoe", score: 85 },
  { name: "Kaylee", score: 99 },
  { name: "Simon", score: 99 },
  { name: "Wash", score: 79 }
];

// 1. An arrow function is just a concise way to write our anonymous callback functions




// 2. When the return line is just a single line, it gets even simpler





// 3. Functions with more than one parameter still need the parentheses





// 4. Map + Arrow makes it really easy to build an array of values from an array of objects








// Challenge Activity
var princesses = [
  { name: "Rapunzel", age: 18 },
  { name: "Mulan", age: 16 },
  { name: "Anna", age: 18 },
  { name: "Moana", age: 16 }
];

// Uncomment and Refactor both code blocks below to use arrow functions

// Challenge Pt 1
// Log the name of each princess, follow by a colon, followed by their age

// princesses.forEach(function (princess) {
//   console.log(`${princess.name}: ${princess.age}`)
// });


// Challenge Pt 2
// Create an array of just the names from the princesses array

// var names = princesses.map(function(princess) {
//   return princess.name;
// });
// console.log("names: ", names);
