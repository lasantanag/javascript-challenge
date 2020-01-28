var userInfo = {
  name: "Eric",
  age: 32,
  location: "North America"
};

// 1.
// Remember that objects have built-in functionality to return arrays of keys, values, or entries
console.log(Object.keys(userInfo))
console.log(Object.values(userInfo))
console.log(Object.entries(userInfo))




// 2.
// Use `Object.values` and `forEach` to iterate through keys
Object.keys(userInfo).forEach(key => console.log(key));

// Use `Object.values` and `forEach` to iterate through values
Object.values(userInfo).forEach(value => console.log(value));

// Use `Object.entries` and `forEach` to iterate through keys and values
Object.entries(userInfo).forEach(entry => console.log(`Key: ${entry[0]} Value: ${entry[1]}`));
Object.entries(userInfo).forEach(([key, value]) => console.log(`Key: ${key} and Value ${value}`));




// 3.
// Array of objects
var users = [
  { name: "Eric", age: 32, location: "Asia" },
  { name: "Sally", age: 23, location: "Europe" },
  { name: "Cassandra", age: 27, location: "North America" }];

// Loop through array of objects then each object
users.forEach((user, index) => {
  console.log(`User at Index ${index}:`);

  // Get the entries for each object in the array
  Object.entries(user).forEach(([key, value]) => {
    // Log the key and value
    console.log(`Key: ${key} and Value ${value}`);
  });
});
