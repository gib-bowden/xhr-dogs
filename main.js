//XHR
var productsRequest = new XMLHttpRequest();
	productsRequest.addEventListener("load", parseDogs)
	productsRequest.addEventListener("error", logFailedRequest)
	productsRequest.open("GET", "dogs.json")
	productsRequest.send();


var categoriesRequest = new XMLHttpRequest();
	categoriesRequest.addEventListener("load", parseBreeds)
	categoriesRequest.addEventListener("error", logFailedRequest)
	categoriesRequest.open("GET", "breeds.json")
	categoriesRequest.send();

//XHR load functions
function parseDogs(){
	dogsData = JSON.parse(this.responseText);
	dogsArr = dogsData.dogs; 
	console.log(dogsArr)
}

function parseBreeds(){
	breedsData = JSON.parse(this.responseText);
	breedsArr = breedsData.breeds;
	// createCombinedProductArr(); 
	// buildDropdownList(categories);
	// buildProductsList(combinedProductArr);
	console.log(breedsArr)
}


function logFailedRequest(){
	console.log("request failed");
}