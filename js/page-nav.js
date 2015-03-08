function ajaxGet(onRequestFunc, requestData, isAsync) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			onRequestFunc(xmlHttp.responseText);
		} else if(xmlHttp.status == 404) {
			onRequesetFunc("Page not found.");
		}
	}
	xmlHttp.open("GET", requestData, isAsync);
	xmlHttp.send();
}

function loadProjects() {
	var requestFunc = function(responseText) {
		document.getElementById("content").innerHTML = responseText;
	}
	ajaxGet(requestFunc, "../pages/projects.html", true);
}

function loadResume() {
	var requestFunc = function(responseText) {
		document.getElementById("content").innerHTML = responseText;
	}
	ajaxGet(requestFunc, "../pages/resume.html", true);
}
