const students = [
    {name: "Ali", grade: 75},
    {name: "Sara", grade: 90},
    {name: "Ahmed", grade: 85}
];
const result = students.find(student => student.grade > 80);
console.log(result);
const numbers = [10, 20, 30, 40];
const hasBigNumber = numbers.some(num => num > 35);
console.log(hasBigNumber);
document.getElementById("result1").innerText =
JSON.stringify(result);
document.getElementById("result2").innerText =
hasBigNumber;