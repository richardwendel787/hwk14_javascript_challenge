// from data.js


//use this to iterate through the key, val pairs of a dict
for (const [key, value] of data.entries()) {
    console.log(key, value);
  }
var tableData = data;

// YOUR CODE HERE!
var $tbody = document.querySelector("tbody");

// see index.html
// with id = "datetime", id = "filter-btn"
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#filter-btn");


// event listener to search button when button is clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

var tableData = data;

// render data to tbody
function renderTable() {
	// clear the previous table
	$tbody.innerHTML = "";


	for (var i = 0; i < tableData.length; i++) {

		
		var currentSighting = tableData[i];
		var infos = Object.keys(currentSighting);
	
		var $row = $tbody.insertRow(i);

	
		// name the plural form or something similar
		for (var j = 0; j < infos.length; j++) {
			var info = infos[j];
		
			var $cell = $row.insertCell(j);
		
			$cell.innerText = currentSighting[info];
		}
	}
}

function handleSearchButtonClick() {

	var filteredDate = $dateInput.value.trim();

	

	
	if (filteredDate.length != 0) {
		tableData = data.filter(function(currentSighting){
			var sightingDate = sighting.date;
			return sightingDate === filteredDate;
		});
	}

	else {
		tableData = data;
	}
    renderTable();
}

// render
renderTable();