function search(value)
{
	if(typeof value == "undefined" || value == "")
		return false;
	var text = document.getElementById("search_text").textContent;
	//search gloably and without sense to case
	var searchReg = new RegExp(value, "gi");
	var citeReg = new RegExp('(\\[.*?\\])');
	text = text.replace(citeReg, '');
	var count = 0;
	while ((match = searchReg.exec(text)) != null ) {
		count++;
	}
	document.getElementById("resNumber").innerHTML = count;
	document.getElementById("resValue").innerHTML = value;

}
window.onload=function() {

	document.getElementById("search_form").onsubmit = function(e) {
		search(document.getElementById("search_input").value);
		//prevents that nasty jumping effect
		return false;
	}

	document.getElementById("search_input").onkeyup = function(e) {
		console.log(document.getElementById("search_input").value);
		search(document.getElementById("search_input").value);
		//prevents that nasty jumping effect
		return true;
	}
}