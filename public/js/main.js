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


// DETECT STICKY STUCK
// const el = document.querySelector(".logo")
// const observer = new IntersectionObserver(
// 	([e]) => {
// 		e.target.classList.toggle("is-pinned", e.intersectionRatio < 1);
// 	},
// 	{ threshold: [1] }
// );

// observer.observe(el);


//MENU OPEN CLOSE
function menuBtn() {
	let header = document.querySelector("header");
	header.classList.toggle("open-nav");
}