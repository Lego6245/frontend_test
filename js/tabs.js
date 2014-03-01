function getLinks(){
	var links = document.getElementsByTagName('ul');
	for(var i = 0; i < links.length;i++)
	{
		links[i].onclick = function(e) {
			e = e || event
			//get the tag name and convert it to tab# format
			var tbtg = e.target.innerHTML.replace(/\s+/g, '').toLowerCase();;
			switchTabs(tbtg);
			//prevents the nasty jump.
			return false;
		}
	}
}

function switchTabs(tabToGo) {
	//get just the tab name :D
	var tabs = document.getElementById('container').getElementsByTagName('div');
	var lists = document.getElementsByTagName('li');
	for(var i = 0; i < tabs.length;i++)
	{
		//the animation magic
		tabs[i].setAttribute("class", "hidden");
		lists[i].setAttribute("class", "");
		if (tabs[i].id == tabToGo)
		{
			tabs[i].setAttribute("class", "show");
			lists[i].setAttribute("class", "select");
		}
	}
	history.replaceState(null, '', '#' + tabToGo);
}
window.onload=function() {
	getLinks();
	if(window.location.hash.split('#')[1])
		switchTabs(window.location.hash.split('#')[1]);
}
