// Helper functions
const isPrime = n => {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
};

const isPalindrome = s => s === s.split('').reverse().join('');

// a. Print odd numbers in an array
const printOddNumbers = arr => arr.filter(x => x % 2 !== 0);

// b. Convert all strings to title case in a list
const titleCaseStrings = arr => arr.map(s => s.replace(/\b\w/g, char => char.toUpperCase()));

// c. Sum of all numbers in an array
const sumOfNumbers = arr => arr.reduce((acc, val) => acc + val, 0);

// d. Return all the prime numbers in an array
const primeNumbers = arr => arr.filter(isPrime);

// e. Return all palindromes in an array
const palindromes = arr => arr.filter(isPalindrome);

// f. Return median of two sorted arrays of the same size
const medianOfSortedArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return null;
    const combined = [...arr1, ...arr2].sort((a, b) => a - b);
    const mid = combined.length / 2;
    return (combined[mid - 1] + combined[mid]) / 2;
};

// g. Remove duplicates from an array
const removeDuplicates = arr => [...new Set(arr)];

// Test data
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayStrings = ["hello", "world", "javascript", "programming"];
const arrayPrimes = [2, 3, 5, 7, 11, 13, 17];
const arrayPalindromes = ["radar", "level", "hello", "world", "madam"];
const array1 = [1, 3, 5, 7, 9];
const array2 = [2, 4, 6, 8, 10];
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];

// Apply functions
console.log("Odd numbers:", printOddNumbers(arrayNumbers));
console.log("Title case strings:", titleCaseStrings(arrayStrings));
console.log("Sum of numbers:", sumOfNumbers(arrayNumbers));
console.log("Prime numbers:", primeNumbers(arrayPrimes));
console.log("Palindromes:", palindromes(arrayPalindromes));
console.log("Median of sorted arrays:", medianOfSortedArrays(array1, array2));
console.log("Array with duplicates removed:", removeDuplicates(arrayWithDuplicates));
