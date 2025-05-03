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
  
  // Приклад використання:
  console.log(isPrime(7));  // true
  console.log(isPrime(10)); // false
  

  // Приклад використання:
  console.log(random(1, 5)); // Наприклад: 3.274...
  