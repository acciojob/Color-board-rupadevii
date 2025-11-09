//your JS code here. If required.
const container = document.querySelector('.container');
const colors = ["red", "black", "blue", "green", "yellow", "orange", "pink", "purple", "orange","white"]

for(let i=0; i<800; i++){
	const div = document.createElement('div')
	div.className = 'square';
	container.append(div)
	div.addEventListener("mouseover", () =>{
		div.style.backgroundColor = colors[Math.floor(Math.random() * 10)]
	})
	div.addEventListener("mouseout", () => {
		div.style.backgroundColor = "gray";
		div.classList.add("reset")
	})
}