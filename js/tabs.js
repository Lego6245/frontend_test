function getLinks(){
	var links = document.getElementsByTagName('ul');
	for(var i = 0; i < links.length;i++)
	{
		links[i].onclick = function(e) {
			e = e || event
			var tbtg = e.target.innerHTML.replace(/\s+/g, '').toLowerCase();;
			switchTabs(tbtg);
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
	switchTabs(window.location.hash.split('#')[1]);
}
