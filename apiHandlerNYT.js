let key = "XO1cYKAtTKHJ222AQn41KygfqgmHMBjT";
var request = new XMLHttpRequest();

function buildURL(section) {

	return "https://api.nytimes.com/svc/topstories/v2/" + section + ".json?api-key=" + key;
}

function printData(data) {

	console.log(data);

}

request.open('GET', buildURL("arts"), true);
request.onload = function() {

	var data = JSON.parse(this.response);

	if (request.status < 200 || request.status > 400) {
		console.log('error');
	} else {

		var table = document.querySelectorAll(".nyt");

		Array.range = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start);

		console.log(data);

		for (var i in Array.range(0,5)) {

			table[i].textContent = data["results"][i]["title"];
		}
	}

	
	
}

request.send();
