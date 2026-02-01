//! function declaration
// function add(num1 = 0, num2 = 0) {
// 	const result = num1 + num2;
// 	console.log(result);
// 	return result;
// }
// add(10, 20);

// function addition(num1, num2) {
// 	return num1 + num2;
// }
// console.log(add(10, 20));

//! function expression
// const addition = function (num1, num2) {
// 	return num1 + num2;
// };
// console.log(addition(10, 20));

//! arrow function
// const add2 = (num1, num2) => num1 + num2;

// const result = add2(10, 20);
// console.log(result);

// const multiply = (a, b) => a * b;
// const multOutput = multiply(3, 5);
// console.log(multOutput);

// const isFirstBig = (x, y) => x > y;
// const isBig = isFirstBig(30, 15);
// console.log(isBig);

//! multi line arrow function => multiline a return keyword use korte hobe
const add3 = (x, y) => {
	const makeDouble = x * 2;
	const doubleAgain = y * 4;
	const makeAddition = x + y;
	const makeDevide = y / x;
	const result = makeDouble + doubleAgain + makeAddition + makeDevide;
	return result;
};
const result = add3(50, 5);
console.log(result);
