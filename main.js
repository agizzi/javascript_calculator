const screen = document.querySelector('.screen');
let math = '';
const numbersAndOperators = document.querySelectorAll('.forMath');
const clear = document.querySelector('.clear');
const evaluate = document.querySelector('.equalSign');

for (let symbol of numbersAndOperators) {
	symbol.addEventListener('click', function () {
		screen.innerText += symbol.innerText;
		math += symbol.innerText;
	});
}

document.addEventListener('keypress', function () {
	screen.innerText += event.key;
	math += screen.innerText;
});

clear.addEventListener('click', function () {
	screen.textContent = '';
	math = '';
});

evaluate.addEventListener('click', function () {
	try {
		let answer = eval(math);
		screen.textContent = answer;
		math = answer;
	} catch (err) {
		if (err instanceof SyntaxError) {
			screen.textContent = 'Oops!';
			math = '';
		}
	}
});

document.addEventListener('keydown', function () {
	if (event.keyCode == 8) {
		math = math.substr(0, math.length - 1);
		screen.innerText = math;
	}
});


