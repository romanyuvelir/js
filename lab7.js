function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}

let salaries = {
  "Іван": 100,
  "Петро": 300,
  "Марія": 250
};

console.log(sumSalaries(salaries)); // Виведе 650

function count(obj) {
  return Object.keys(obj).length;
}

let user = {
  name: "Іван",
  age: 30
};

console.log(count(user)); // Виведе 2
