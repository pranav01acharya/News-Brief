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
		//printData(data["results"]);
		console.log('error');
	} else {
		var news = document.getElementById("news");
		news.textContent = data["results"][0]["title"];
	}

	
	
}

request.send();
