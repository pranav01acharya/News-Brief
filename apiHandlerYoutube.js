let apiKey = "AIzaSyDjhdqrm8IPmkI7uydvAepgrQraWL5gx5k";
var request = new XMLHttpRequest();

function buildURL(section) {

	return "https://www.googleapis.com/youtube/v3/search/?" + "key=" + apiKey + "&part=snippet&type=video&maxResults=5&q=cats" 
}

function printData(data) {

	console.log(data);

}

request.open('GET', buildURL("arts"), true);
request.onload = function() {

	var data = JSON.parse(this.response);

	if (request.status < 200 || request.status > 400) {
		console.log(request.status);
	} else {
		var table = document.querySelectorAll(".youtube");

		Array.range = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start);

		console.log(data);

		for (var i in Array.range(0,5)) {

			table[i].textContent = data["items"][i]["snippet"]["title"];
		}
	}

	
	
}

request.send();
