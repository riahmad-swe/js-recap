//! spread method
const numbers = [87, 4, 54, 874];
// console.log(numbers);
// console.log(...numbers);
// const max = Math.max(...numbers);
// console.log(max);
// const min = Math.min(...numbers);
// console.log(min);

// const max = Math.max(1121, 534, 5, 43, 545, 66);
// console.log(max);
// const min = Math.min(345, 645, 34, 3, 554, 343);
// console.log(min);

// const first = [1, 2, 3, 4, 5];
// const second = first;
// second.push(6, 7, 8, 9, 10);
// console.log(first);

const first = [1, 2, 3, 4, 5];
const second = [...first];
const third = [...first, 45, 34, ...second];
second.push(6, 7, 8, 9, 10);
// console.log(third);
// console.log(...third);

const ages = [45, 45, 1];
const prices = [98, 65, 45];
const all = [...ages, 466, 34, ...prices];
// console.log(all);

const person = { name: "mizan", age: 35 };
const employee = { designation: "developer", ...person };
// console.log(employee);

const total = (a, b, c) => a + b + c;
const result = total(55, 65, 85);
const digits = [76, 876, 66];
console.log(result);
console.log(digits);
