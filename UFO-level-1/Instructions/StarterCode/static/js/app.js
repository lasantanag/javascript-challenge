
// A) Write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// Make sure you have a column for date/time, city, state, country, shape, and comment


// Get a reference to the table body
var tbody = d3.select("tbody");

// console.log(data);

// Loop Through `data` and console.log each seight report object
data.forEach(sight => {
// console.log(sight);

// Use d3 to append one table row `tr` for each seight report object
    var row = tbody.append("tr");

// Use `Object.entries` to console.log each seight report value
    Object.entries(sight).forEach(([key, value]) => {
        // console.log(key, value);

// Use d3 to append cell's per seight report value (Date, City, State, Country, Shape, Duration, Comments)
        var cell = row.append("td");

        
// Use d3 to update each cell's text with report values
        cell.text(value);
    })
});


// B) Write JavaScript code that will listen for events and 
// search through the date/time column 
// to find rows that match user input

var button = d3.select("#filter-btn").on("click",function(){
  
  var i;
  
  var t_Value;
  
  var input = document.getElementById("datetime");
  
  var filtro = input.value;
  
  var tabla = document.getElementById("ufo-table");
  
  var tr = tabla.getElementsByTagName("tr");
  
  for (i=0; i < tr.length; i++){
    var td = tr[i].getElementsByTagName("td")[0];
    if (td){
      t_Value = td.textContent || td.innerText;
      if (t_Value.indexOf(filtro) > -1){
        tr[i].style.display = "";
      }     
      else {
        tr[i].style.display = "none";
      }
    }
  }
});


