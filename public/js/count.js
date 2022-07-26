let text = document.getElementById("countdown");
let number = 5;

setInterval(() => {
	number--;
	if (number < 0) {
		window.location.href = "https://github.com/JaydenGrubb1";
	} else {
		text.innerHTML = number;
	}
}, 1000);