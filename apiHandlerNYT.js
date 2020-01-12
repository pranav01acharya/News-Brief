console.log("running NYT api handler")

let apiKey = "XO1cYKAtTKHJ222AQn41KygfqgmHMBjT";
var request = new XMLHttpRequest();

function buildURL(section) {

	return "https://api.nytimes.com/svc/topstories/v2/" + section + ".json?api-key=" + apiKey;
}

function printData(data) {

	console.log(data);

}

request.open('GET', buildURL("home"), true);
request.onload = function() {

	var data = JSON.parse(this.response);

	if (request.status < 200 || request.status > 400) {
		console.log(request.status);
	} else {

		var table = document.querySelectorAll(".nyt");

		Array.range = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start);

		console.log(data);

		for (var i in Array.range(0,5)) {

			table[i].innerHTML = "<a href=\"" + data["results"][i]["url"] + "\"><h5 class=\"headline\">" + data["results"][i]["title"] + 
			"</a></h5>\n" + "<p class=\"desc\">" + data["results"][i]["abstract"].substring(0,100) + "...</p>";
		}
	}

	
	
}

request.send();
