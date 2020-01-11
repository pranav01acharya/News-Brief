let key = "XO1cYKAtTKHJ222AQn41KygfqgmHMBjT";
var request = new XMLHttpRequest();

function buildURL(section) {

	return "https://api.nytimes.com/svc/topstories/v2/" + section + ".json?api-key=" + key;
}

function printData(data) {


}
request.open('GET', buildURL("science"), true);
request.onload = function() {

	var data = JSON.parse(this.response);

	if (request.status >= 200 && request.status <= 400) {
		//printData(data["results"]);
		console.log(data);
	} else {
		console.log('error');
	}
}

request.send()