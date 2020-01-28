var theStagesOfJS = ["confidence", "sadness", "confusion", "realization", "debugging", "satisfaction"];

// 1. Using the .map method (Try this same concept with forEach. Do you get the same results?)
var upperArray = theStagesOfJS.map(function(item) {
  return item.toUpperCase();
});

console.log(upperArray);







// 2. What happens when we try the same thing with forEach?

var upperArray_forEach = theStagesOfJS.forEach(function(item) {
  return item.toUpperCase();
});

// undefined
console.log(upperArray_forEach);






// 3. Map will also provide the index position of the array.
// This is similar to enumerate() in Python.
var mapArrayWithIndex = theStagesOfJS.map(function(item, index) {
  return `Stage ${index}: ${item}`;
});

console.log(mapArrayWithIndex);

// Note: The original array is unchanged
console.log(theStagesOfJS);





// 4. Mapping over an array of objects
var students = [
    { name: "Malcolm", score: 80 },
    { name: "Tina", score: 85 },
    { name: "Kaylee", score: 99 },
    { name: "Simon", score: 99 },
    { name: "Pat", score: 79 }
];

// Create an array using the values within the object
var names = students.map(function(student) {
  return student.name;
});

var scores = students.map(function(student) {
  return student.score;
});



// Challenge Activity!
var princesses = [
  { name: "Rapunzel", age: 18 },
  { name: "Mulan", age: 16 },
  { name: "Anna", age: 18 },
  { name: "Moana", age: 16 }
];

// Log the name of each princess, follow by a colon, followed by their age
// forEach: executes a provided function once for each array element
princesses.forEach(function(princess) {
  console.log(`${princess.name}: ${princess.age}`);
});

// Create an array of just the names from the princesses array
// map: creates a new array with the results of calling a provided function on every element in the calling array
var names = princesses.map(function(princess) {
  return princess.name;
});
console.log("names: ", names);
