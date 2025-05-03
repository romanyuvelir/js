let styles = ["Jazz", "Blues"];          
styles.push("Rock-n-Roll");              

let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Classics";

console.log(styles.shift());             

styles.unshift("Rap", "Reggae");         

console.log(styles); 
//////
function sumInput() {
    let numbers = [];
    
    while (true) {
      let value = prompt("Введіть число:", "");
  
      if (value === "" || value === null || isNaN(value)) break;
  
      numbers.push(+value); 
    }
  
    let sum = 0;
    for (let num of numbers) {
      sum += num;
    }
  
    return sum;
  }

  console.log(sumInput()); 
  /////
  function getMaxSubSum(arr) {
    let maxSum = 0;
    let currentSum = 0;
  
    for (let num of arr) {
      currentSum = Math.max(0, currentSum + num);
      maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
  }

  console.log(getMaxSubSum([1, -2, 3, 4, -9, 6])); // → 7
  console.log(getMaxSubSum([-3, -4, -1]));         // → 0
  