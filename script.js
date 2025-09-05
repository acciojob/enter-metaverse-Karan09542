//your JS code here. If required.
const enterButton = document.getElementById("enterBtn");
enterButton.onclick = function(){
	const p = document.getElementById("status");
	p.textContent = ""
	const h1 = document.createElement("h1")
	h1.innerHTML = "Entered Metaverse";
	p.append(h1)
	
}