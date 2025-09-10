function isPalindrome(str) {
 
  str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true; 
}

console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("Madam"));    // true
console.log(isPalindrome("hello"));    // false
console.log(isPalindrome("A man, a plan, a canal. Panama")); // true
