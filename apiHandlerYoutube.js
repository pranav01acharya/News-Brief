let key = "AIzaSyDjhdqrm8IPmkI7uydvAepgrQraWL5gx5k";
var request = new XMLHttpRequest();

function buildURL(section) {

	return "https://www.googleapis.com/youtube/v3/search/?" + "key=" + key + "&part=snippet&type=video&maxResults=5&q=cats" 
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
		console.log(data);
	}

	
	
}

request.send();
