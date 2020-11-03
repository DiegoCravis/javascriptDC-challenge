// from data.js
var tableData = data;
console.log(tableData);

var tbody = d3.select("tbody");


// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

tableData.forEach(function(newReport) {
    console.log(newReport);
    var row = tbody.append("tr");

    Object.entries(newReport).forEach(([key, value]) => {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });

//   Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

var button = d3.select("#filter-btn");
button.on("click", function() {
    tbody.html("");

    var TiDa = d3.select("#datetime").property("value");
    console.log(TiDa);

    var reportFilter = tableData.filter(UFOnew => UFOnew.datetime === TiDa);
    console.log(reportFilter);


    reportFilter.forEach(function(checking) {
        console.log(checking);
        var row = tbody.append("tr");
        
        Object.entries(checking).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
    });
    
    

