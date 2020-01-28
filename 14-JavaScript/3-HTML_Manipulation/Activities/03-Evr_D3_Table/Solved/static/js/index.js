// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);


// Step 1: Loop Through `data` and log each weather report object
data.forEach(weather => {
  console.log(weather);

  // Step 2:  Use d3 to append one table row `tr` for each weather report object
  var row = tbody.append("tr");

  // Step 3:  Use `Object.entries` to log each weather report value
  Object.entries(weather).forEach(([key, value]) => {
    console.log(key, value);

    // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
    var cell = row.append("td");

    // Step 5: Use d3 to update each cell's text with
    // weather report values (weekday, date, high, low)
    cell.text(value);
  });
});
