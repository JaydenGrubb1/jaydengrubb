// TYPE REVEAL CODE
// let container = document.querySelector(".type-reveal");
// let start = document.getElementById("lang-type-start");
// let inner = document.getElementById("lang-type-inner");
// let end = document.getElementById("lang-type-end");

// const codes = [
// 	'Console.WriteLine(/"Contact Me"/);',
// 	'console.log(/"Contact Me"/)',
// 	'System.out.println(/"Contact Me"/);',
// 	'printf(/"Contact Me\\n"/);',
// 	'std::cout << /"Contact Me"/ << std::endl;',
// 	'print(/"Contact Me"/)',
// 	'Debug.Log(/"Contact Me"/);',
// 	'echo /"Contact Me"/'
// ];

// let index = Math.floor(Math.random() * codes.length);
// let len = codes[index].replace("/", "").length - 1;

// start.innerText = codes[index].split('/')[0];
// inner.innerText = codes[index].split('/')[1];
// end.innerText = codes[index].split('/')[2];

// container.style.setProperty('--typing-char-num', len);
// container.style.setProperty('--typing-duration', len / 40 + 's');


// MENU OPEN CLOSE
let header = document.querySelector("header");
function menuBtn() {
	if (window.matchMedia("(min-width: 600px)").matches)
		return;

	header.classList.toggle("open-nav");
	document.body.classList.toggle("lock-scroll");
}

// HIDE SCROLL PROMPT
const prompt = document.querySelector(".scroll-prompt");
const content = document.querySelector(".content");
const scrollObs = new IntersectionObserver(
	([e]) => {
		prompt.classList.toggle("hidden", e.isIntersecting);
	},
	{
		threshold: 0,
		rootMargin: "-10px"
	}
);
scrollObs.observe(content);

// SHOW ALTERNATE LOGO
const logo = document.querySelector(".logo");
const altLogo = document.querySelector(".hero h1");
const logoObs = new IntersectionObserver(
	([e]) => {
		logo.classList.toggle("hidden", e.isIntersecting);
	}, {
	threshold: 0
}
);
logoObs.observe(altLogo);