// Assign the data from `data.js` to a descriptive variable
var people = data;

// Select the button
var button = d3.select("#button");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#patient-form-input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(people);

  var filteredData = people.filter(person => person.bloodType.toLowerCase() === inputValue.toLowerCase());

  console.log(filteredData);

  // BONUS: Calculate summary statistics for the age field of the filtered data

  // First, create an array with just the age values
  var ages = filteredData.map(person => person.age);

  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
  var mean = math.mean(ages);
  var median = math.median(ages);
  var mode = math.mode(ages);
  var variance = math.var(ages);
  var standardDeviation = math.std(ages);

  // Then, select the table
  var summary = d3.select(".summary>tbody>tr")

  // remove any data from the table
  summary.html("");

  // append stats to the table
  summary.append("td").text(math.round(mean,3));
  summary.append("td").text(math.round(median,3));
  summary.append("td").text(math.round(mode,3));
  summary.append("td").text(math.round(variance,3));
  summary.append("td").text(math.round(standardDeviation,3));
});
