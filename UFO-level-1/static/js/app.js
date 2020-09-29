// from data.js
var tableData = data;

// get a reference to the table body

var tableBody = d3.select("tbody");

//create a function that refreshes the table and deletes all existing data and create a new table with a new data


function refreshTable(Data) {
  tableBody.html("");
  
  Data.forEach(function(Row){

    //create "tr" tag for every row 
    var row = tableBody.append("tr");

    //to separate the key and value
    Object.entries(Row).forEach(function([key, value]) {

      //create td tag for every cell
      var cell = row.append("td");
      cell.text(value);

    });

  });

};

function chosenDate() {
  var inputDate = d3.select("#datetime").property("value");
  console.log(inputDate)

  var filteredData = tableData.filter(row => row.datetime ===inputDate);
  refreshTable(filteredData);
  
};

//Select the button

var button = d3.select("#filter-btn");

//create event handlers

button.on("click", chosenDate);

//call the table refresher function
refreshTable(tableData);