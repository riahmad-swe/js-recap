const poem = `Aam pata jora jora
marbe chabuk chorbe ghora
ore bubu shore dara
asche amar pagla ghora`;

console.log(poem);

function sum(num1 = 0, num2 = 0) {
	const output = num1 + num2;
	const result = `The sum of ${num1} and ${num2} is ${output}`;
	console.log(result);
}
sum(10, 20);

const price = 50;
const discountedPrice = `Discounted price of ${price} counted after 20% discount is ${price * 0.8}`;
console.log(discountedPrice);
