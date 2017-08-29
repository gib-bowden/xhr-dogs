var dogsRequest = new XMLHttpRequest();
	dogsRequest.addEventListener("load", parseDogs)
	dogsRequest.addEventListener("error", logFailedRequest)
	dogsRequest.open("GET", "dogs.json")
	dogsRequest.send();


function parseDogs(){
	dogsArr = JSON.parse(this.responseText).dogs;
	getBreeds(dogsArr)
}

function getBreeds(dogs) {
	var breedsRequest = new XMLHttpRequest();
		breedsRequest.addEventListener("load", parseBreeds)
		breedsRequest.addEventListener("error", logFailedRequest)
		breedsRequest.open("GET", "breeds.json")
		breedsRequest.send();

		function parseBreeds(){
			breedsArr = JSON.parse(this.responseText).breeds;
			createCombinedArr(dogsArr, breedsArr); 
		}
	}

function logFailedRequest(){
	console.log("request failed");
}

function createCombinedArr(dogs, breeds) {
	dogs.forEach((dog) => {
		var breedId = dog.breed_id;
		breeds.forEach ((breed) => {
			if (breedId === breed.id) {
	            dog["breedName"] = breed.name,
	            dog["basePrice"] = breed.base_price,
	            dog["breedDescription"] = breed.description,
	            dog["totalPrice"] = dog.basePrice + dog["add_on_price"]
	        }
		})
	})
	console.log(dogs);
}