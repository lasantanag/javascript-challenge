d3.selectAll("button").on("click", function() {
  // What will be logged out? What is `this` in this case?

  console.log(d3.select(this).text());
  // Answer: It will console log the `button` element.
  // can be useful when trying to find out what object triggered an event.
});



d3.selectAll("li").on("click", function() {
  // you can select the element just like any other selection
  var listItem = d3.select(this);
  listItem.style("color", "blue");

  var listItemText = listItem.text();
  console.log(listItemText);
});
