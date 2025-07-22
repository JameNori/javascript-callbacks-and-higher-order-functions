// Exercise #1: For Each Function
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

function addSalary5000(previousSalary) {
  // Start coding here
  return previousSalary = previousSalary + 5000;
}

function forEach(array, operation) {
  // Start coding here
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(operation(array[i]));  
  }
  return newArray;
}

// Using `forEach` function here

let newEmployeeSalaries;
newEmployeeSalaries = forEach(employeeSalaries, addSalary5000);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
- addSalary5000 เป็น Callback Function สังเกตได้จากการเรียกใช้เป็น argument ในฟังชัน forEach

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
- forEach เป็น Higher Order Function เนื่องจากมีฟังชั่นอื่นบรรจุอยู่ข้างใน

====================================
*/
