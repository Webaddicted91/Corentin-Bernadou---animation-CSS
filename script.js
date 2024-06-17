// JUST USED TO FILL THE DIV, ALL CSS AFTER THE ELEMENTS ARE CREATED
console.clear()
const h = 200;
const w = 112;
const count = 28;

const stage = document.querySelector('.stage');

for(var i = 0; i < count; i++) {
	let seed = Math.random() * i;
	let src = `https://picsum.photos/seed/${seed}/${w}/${h}`;
	let img = document.createElement("IMG");
	img.setAttribute('src', src);
	img.setAttribute('style', `--i: ${i+1}`)
	stage.append(img);
}