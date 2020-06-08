// from data.js


//use this to iterate through the key, val pairs of a dict
//for (const [key, value] of data.entries()) {
 //   console.log(key, value);
 // }
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
function renderTable(find_date=null) {
	console.log(find_date);
	// clear the previous table
	$tbody.innerHTML = "";
	if ( (find_date !=null) && find_date[0]=="0")
	{
		find_date=find_date.substring(1,find_date.length);//drop the leading zero if they eeterd one
	}
	console.log(find_date);
	for (var i = 0; i < tableData.length; i++) {

		
		var currentSighting = tableData[i];
		var infos = Object.keys(currentSighting);
	
		var $row = $tbody.insertRow(i);

	
		// name the plural form or something similar
		for (var j = 0; j < infos.length; j++) {
			var info = infos[j];
			if (find_date !=null) //was a search date specified?
			{

			
				if (currentSighting["datetime"]==find_date)
				{
					var $cell = $row.insertCell(j);
					$cell.innerText = currentSighting[info];
				}
			}
			else{ //if no search date, then bild like normal
				var $cell = $row.insertCell(j);
				$cell.innerText = currentSighting[info];
			}

		}
	}
}

function handleSearchButtonClick() {

	var date_input = $dateInput.value.trim();

	if (date_input.match("[0-9]{1,2}/[0-9]{1,2}/[1,2][0-9]{3}")==null)  //validate the user input to match the pattern of a valid entry, ie 1/11/2011
	{
		console.log("did not match date"+date_input);
		renderTable();

	}
	else{renderTable(date_input);}
	
}

// render
renderTable();