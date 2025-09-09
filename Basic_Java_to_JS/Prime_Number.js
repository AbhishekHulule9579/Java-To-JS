function isPrime(num) {
  if (num <= 1) return false; 
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false; 
  }
  return true; 
}
vhv
console.log(isPrime(23)); 
console.log(isPrime(10)); 
