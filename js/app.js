var player = 1;
function buttonpush1() {
	player =  Math.floor(Math.random()*10);
	console.log(player);
	if (player < 5) {
		document.getElementById("box").innerHTML = ("You win<br> The AI chose <br><img src='PIC/char.png' class='pok2'>")
	}
	if (player > 5) {
		document.getElementById("box").innerHTML = ("You lose <br> The AI chose <br><img src='PIC/bulb.png' class='pok2'>")
	}
}
function buttonpush2() {
	player =  Math.floor(Math.random()*10);
	console.log(player);
	if (player < 5) {
		document.getElementById("box").innerHTML = ("You win<br> The AI chose <br><img src='PIC/squr.png' class='pok2'>")
	}
	if (player > 5) {
		document.getElementById("box").innerHTML = ("You lose <br> The AI chose <br><img src='PIC/char.png' class='pok2'>")
	}
}
function buttonpush3() {
	player =  Math.floor(Math.random()*10);
	console.log(player);
	if (player < 5) {
		document.getElementById("box").innerHTML = ("You win<br> The AI chose <br><img src='PIC/squr.png' class='pok2'>")
	}
	if (player > 5) {
		document.getElementById("box").innerHTML = ("You lose <br> The AI chose <br><img src='PIC/char.png' class='pok2'>")
	}
}