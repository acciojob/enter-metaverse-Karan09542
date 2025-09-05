//your JS code here. If required.
const enterButton = document.getElementById("enterBtn");
enterButton.onclick = function(){
	const p = document.getElementById("status");
	if(p){
		p.remove();
	}
	const h1 = document.createElement("h1")
	h1.textContent = "Entered Metaverse";
	document.body.prepend(h1)
	
}