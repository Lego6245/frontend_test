function search(value)
{
	var text = document.getElementById("search_text").textContent;
	var searchReg = new RegExp(value, "gi");
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
		return false;
	}
}