//Problem 1: Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('')
}
console.log(reverseString("Hello")); //Output: "olleh"




// Problem 2: Count Vowels in a String
function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";

  str = str.toLowerCase();

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("programming")); // Output: 3


// Problem 3: Check for Palindrome
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const rev = cleaned.split('').reverse().join('');
  return cleaned === rev;
}
console.log(isPalindrome("madam")); // Output: true



// Problem 4: Find the Maximum Number
function maxInArray(arr) {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max)
         max = arr[i];
  }
  return max;
}
console.log(maxInArray([3, 7, 2, 9, 4])); // Output: 9



//Problem 5: Remove Duplicates from an Array
function unique(arr) {
  return Array.from(new Set(arr));
}

console.log(unique([1,2,2,3,4,4])); // Output: [1,2,3,4]



// Problem 6: Sum of All Numbers in an Array
function sumArray(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15



// Problem 7: Find Even Numbers in an Array
function findEvenNumbers(arr) {
  let evens = [];

  for (let num of arr) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6, 7])); // Output: [2, 4, 6]



// Problem 8: Capitalize First Letter of Each Word
function capitalizeWords(str) {
  let words = str.split(" ");
  let result = [];

  for (let word of words) {
    if (word.length > 0) {
      result.push(word[0].toUpperCase() + word.slice(1));
    }
  }
  return result.join(" ");
}
console.log(capitalizeWords("hello world")); // Output: "Hello World" 



// Problem 9: Find the Factorial of a Number
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5)); // Output: 120



// Problem 10: PingPong Challengee
function pingPong() {
  let result = [];

  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("PingPong");
    } else if (i % 3 === 0) {
      result.push("Ping");
    } else if (i % 5 === 0) {
      result.push("Pong");
    } else {
      result.push(i);
    }
  }
  console.log(result.join(", "));
}
pingPong();





