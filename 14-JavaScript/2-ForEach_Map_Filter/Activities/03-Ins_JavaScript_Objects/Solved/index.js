// A JavaScript object is similar to a Python dictionary
var movie = {
  name: "Star Wars",
  year: 1977,
  profitable: true,
  sequels: [5, 6, 1, 2, 3, "The Last Jedi"]
};

// 1. JavaScript also allows value lookup via dot notation
console.log(movie.name);
console.log(movie.year);
console.log(movie.sequels[0]);

// JS also allows value lookup via bracket notation--note the similarity to Python
// console.log(movie["name"]);

// 2. Add a key-value pair to an existing object
movie.rating = 8.5;
console.log(movie);

// 3. Delete a key-value pair
delete movie.sequels;
console.log(movie);

// 4. Check whether a key exists in an object
if ("rating" in movie) {
  console.log("This movie has a rating!");
}

// Built-in object methods in JavaScript
// An array of objects
var people = {
  mom: "wilma flintstone",
  dad: "fred flintstone",
  daughter: "pebbles",
  son: "bambam"
};

// 5. Display the entire object, both keys and values
console.log(people);

// 6. Display only the keys of the object
console.log(Object.keys(people));

// 7. Display only the values of the object
console.log(Object.values(people));

// 8. Display a key-value pair held in an array
console.log(Object.entries(people));
