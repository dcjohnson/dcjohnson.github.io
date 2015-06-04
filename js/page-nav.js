function ajaxGet(onRequestFunc, requestData, isAsync) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			onRequestFunc(xmlHttp.responseText);
		} else if(xmlHttp.status == 404) {
			onRequestFunc("Page not found.");
		}
	}
	xmlHttp.open("GET", requestData, isAsync);
	xmlHttp.send();
}

function loadPageInContent(pageUrl) {
	var requestFunc = function(responseText) {
		document.getElementById("content").innerHTML = responseText;
	};
	ajaxGet(requestFunc, pageUrl, true);
}

function init() {
	var projects = document.getElementById("projects");
	var resume = document.getElementById("resume");
	var contact = document.getElementById("contact");
	projects.onclick = function() {
		loadPageInContent("../pages/projects.html");
	};
	resume.onclick = function() {
		loadPageInContent("../pages/resume.html");
	};
	contact.onclick = function() {
		loadPageInContent("../pages/contact.html");
	};
}

init();
