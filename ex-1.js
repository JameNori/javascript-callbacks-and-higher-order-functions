// Exercise #1: For Each Function
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

function addSalary5000(previousSalary) { // function นี้เป็น callback เพราะมี 1 parameter เป็นจุดสังเกตุ
  // Start coding here
  for (let i = 0;i < previousSalary.length;i++) {
    previousSalary[i] = previousSalary[i] + 5000;
  }
  // return previousSalary
  return previousSalary
}


function forEach(array, operation) { // function นี้เป็น higher order function เพราะมี 2 parameter เป็นจุดสังเกตุ
  // Start coding here
  return operation(array)
}

// Using `forEach` function here

let newEmployeeSalaries = forEach(employeeSalaries, addSalary5000);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?

====================================
*/
