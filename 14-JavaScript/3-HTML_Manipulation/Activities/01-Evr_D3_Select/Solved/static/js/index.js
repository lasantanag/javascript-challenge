// 1.
// Select the text of an HTML element
var text1 = d3.select(".text1").text();
console.log("text1 says: ", text1);


// 2.
// Select the text of an HTML element by ID
var text2 = d3.select("#text2").text();
console.log("text2 says: ", text2);


// 3.
// Modify the text of an HTML element
d3.select(".text1").text("Hey, I changed this!");

// 4. 
// Capture the nested HTML of a selection
var myLink = d3.select(".my-link").html();
console.log("my-link: ", myLink);

// 5.
// Select an element's child element
// An object is returned if you don't define the function to run
var myLinkAnchor = d3.select(".my-link>a");
console.log(myLinkAnchor);

var myLinkh5 = d3.select(".my-link>h5").text();
console.log(myLinkh5);

var myLinkh5Class = d3.select(".my-link>.inner-heading").text();
console.log(myLinkh5Class);

// 6.
// // Capture the child element's href attribute
var myLinkAnchorAttribute = myLinkAnchor.attr("href");
console.log("myLinkAnchorAttribute: " + myLinkAnchorAttribute);


// 7.
// Change an element's attribute
myLinkAnchor.attr("href", "https://python.org");


// 8.
// Use chaining to join methods
d3.select(".my-link>a").attr("href", "https://nytimes.org").text("Now this is a link to the NYT!!");


// 9.
// change a class
d3.select(".my-link>.inner-heading").attr("class", "inner-heading newClass");


// 10.
// Select all list items, then change their font color
d3.selectAll("li").style("color", "blue");


// 11.
// Create a new element
var li1 = d3.select("ul").append("li");
li1.text("A new item has been added!");

// 12.
// Use chaining to create a new element and set its text
d3.select("ul")
    .append("li")
    .text("Another new item!");
