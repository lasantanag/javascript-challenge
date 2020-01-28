// Array of student names
var students = ["Sruthi", "Tyler", "Stephanie", "Felipe"];

// 0. This function will be called for each element in the array
function printName(name) {
  console.log(name);
}

// 1. Loop through each student name and call the printName function
for (var i = 0; i < students.length; i++) {
  printName(students[i]);
}

// 2. `forEach` automatically iterates (loops) through each item and
// calls the supplied function for that item.
// This is equivalent to the for loop above.
students.forEach(printName); 

// 3. You can also define an anonymous function inline
students.forEach(function(name) {
  console.log(name);
});

// 4. The callback function can also return the index of each item
students.forEach(function(name, i){
  console.log(name, "is at index", i);
});
