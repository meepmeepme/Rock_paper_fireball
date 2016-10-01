var player = 1;
function buttonpush1() {
	player =  Math.floor(Math.random()*10);
	console.log(player);
	if (player < 5) {
		document.getElementById("box").innerHTML = ("You win")
	}
	if (player > 5) {
		document.getElementById("box").innerHTML = ("You lose")
	}
}
