document.addEventListener('DOMContentLoaded', setup);

function setup(){
	var button1 = document.getElementById("downloadButton");
	button1.addEventListener("click", changeDisplay);
}

function changeDisplay(){
	window.open("contact foxglove.pdf");
	document.getElementById("responseToDownload").style.display = "block";

}