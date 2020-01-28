// filter()
// An array of objects, representing a cartoon family
var simpsons = [{
  name: "Homer",
  role: "parent",
  age: 45
}, {
  name: "Lisa",
  role: "child",
  age: 8
}, {
  name: "Marge",
  role: "parent",
  age: 43
}, {
  name: "Bart",
  role: "child",
  age: 10
}, {
  name: "Maggie",
  role: "child",
  age: 1
}];

// 1.
// Create a custom filtering function
function selectYounger(person) {
  return person.age < 30;
}

// 2.
// filter() uses the custom function as its argument
var youngSimpsons = simpsons.filter(selectYounger);


// 3. 
// We can also use arrow functions to simplify the filtering function
var parents = simpsons.filter(person => person.role === "parent");


// Output results
console.log(youngSimpsons);
console.log(parents);


// 4.
// filter() also works on arrays
var ages = [10, 12, 18, 21, 25, 55];

var adultAges = ages.filter(value => value >= 18);
console.log(adultAges);