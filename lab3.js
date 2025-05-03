function random(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  function sumTo(n) {
    let sum = 0;
    if (n > 0) {
      for (let i = 1; i <= n; i++) sum += i;
    } else {
      for (let i = 1; i >= n; i--) sum += i;
    }
    return sum;
  }
  
  // Приклад використання:
  console.log(sumTo(5));   // 15 (1+2+3+4+5)
  console.log(sumTo(-3));  // -5 (1 + 0 + (-1) + (-2) + (-3))
  

  // Приклад використання:
  console.log(isPrime(7));  // true
  console.log(isPrime(10)); // false
  

  // Приклад використання:
  console.log(random(1, 5)); // Наприклад: 3.274...
  