// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody"); 

tableData.forEach(function(data) {
    console.log(data);
    var row = tbody.append("tr")

    Object.entries(data).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td")
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click", function() {
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(date => date.datetime === inputValue);

    console.log(filteredData);
    
    


    filteredData.forEach(function(data) {
        console.log(data);
        var row = tbody.append("tr")

        Object.entries(data).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td")
            cell.text(value);
        });
    });
});
