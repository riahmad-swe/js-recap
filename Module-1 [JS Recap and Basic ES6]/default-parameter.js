// function sum(num1, num2) {
// 	const total = num1 + num2;
// 	console.log(total);
// }
// sum(10, 20);

function sum(num1 = 0, num2 = 0) {
	//! =0 this is default parameter to avoid undefined NaN etc.
	const total = num1 + num2;
	console.log(num1, num2, total);
}
sum(10, 20, 30, 40, 50);
sum(20, 30);

//! for multiplying default value should be 1. otherwise multiply result will be 0.
function multiply(num1 = 1, num2 = 1) {
	const result = num1 * num2;
	console.log(result);
}

multiply(10, 20);
multiply(10);

function fullName(first, last = "") {
	//! for string = ''
	const name = first + "" + last;
	console.log(name);
}
fullName("Ahmad");

//! Default parameters:

//* add, subtract --> 0

//* multiply --> 1

//* string --> ''

//* array --> []

//* object --> {}
