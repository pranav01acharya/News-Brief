let key = ##########;
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
		console.log(request.status);
	} else {
		var tnTable = document.querySelectorAll(".thumbnail");
		var ytTable = document.querySelectorAll(".youtube");

		Array.range = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start);

		console.log(data);

		for (var i in Array.range(0,5)) {

			tnTable[i].innerHTML = "<a href=\"https://www.youtube.com/watch?v=" + data["items"][i]["id"]["videoId"] + "\"><img src=\"" + data["items"][i]["snippet"]["thumbnails"]["default"]["url"] + "\"></a>"
			ytTable[i].innerHTML = "<a href= \"https://www.youtube.com/watch?v=" + data["items"][i]["id"]["videoId"] + "\"><h5 class=\"title\">" + data["items"][i]["snippet"]["title"] + 
			"</h5></a>\n" + "<p class=\"desc\">" + data["items"][i]["snippet"]["description"].substring(0,90)+"..." + 
			"</p>" + "<p class=\"link\">";

		}
	}

	
	
}

request.send();
