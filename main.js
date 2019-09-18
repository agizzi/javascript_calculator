// window.onload = function() {
const screen = document.querySelector('.screen');
let math = '';
// const operators = document.querySelectorAll('.operator');
console.log(document);
const numbersEtc = document.querySelectorAll('.forMath');
const clear = document.querySelector('.clear');
const evaluate = document.querySelector('.equalSign');
console.log(numbersEtc);

for (let symbol of numbersEtc) {
	symbol.addEventListener('click', function() {
		screen.innerText += symbol.innerText;
		math += symbol.innerText;
		// console.log(num.innerText);
		console.log('symbol');
	});
}

// for (let op of operators) {
// 	op.addEventListener('click', function() {
// 		screen.innerText = op.innerText;

// 		// console.log('click');
// 	});
// }

clear.addEventListener('click', function() {
	screen.textContent = '';
	math = '';
});

evaluate.addEventListener('click', function() {
	// eval(screen.textContent);
	let answer = eval(math);
	screen.textContent = answer;
});
// };
