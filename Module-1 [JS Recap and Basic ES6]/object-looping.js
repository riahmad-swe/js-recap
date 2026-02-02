//! loop in an array
const numbers = [1, 2, 45, 54, 4, 98];
for (const num of numbers) {
	// console.log(num);
}

const employee = {
	name: "Rahimatullah",
	designation: "QA",
	salary: "20000",
	experience: 1,
};

for (const key in employee) {
	const value = employee[key];
	// console.log(key, value);
}

const keys = Object.keys(employee);
for (const key of keys) {
	const value = employee[key];
	console.log(value);
}
