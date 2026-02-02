const employee = {
	name: "Rahimatullah",
	designation: "QA",
	salary: 20000,
	experience: 1,
	age: 14,
};

// console.log(employee);

Object.freeze(employee);

//! delete a property of an object
delete employee.experience;
console.log(employee);

//! change the value
employee.salary = employee.salary + 5000;
console.log(employee);

//! add property + value
employee.location = "Dhaka";
console.log(employee);
