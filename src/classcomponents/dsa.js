/*
// Problem 1: Create a step-by-step plan to find and get two numbers from a list so that when you add            them together, you get a specific target number.

// Input:  array = [4, 29, 3, 5, 8, 2, 9], n = 34;

// Hint:  Two Pointer Technique.

// Output:

function findPair(arr, n) {
  arr = arr.sort((a, b) => a - b);

  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    if (arr[i] + arr[j] === n) {
      console.log(arr[i], arr[j]);
      break;
    } else if (arr[i] + arr[j] < n) {
      i++;
    } else {
      j--;
    }
  }
}

// findPair(arr, n);   => 29, 5.



// Problem 2: Count prime numbers from 1 to 100 using efficient algorithm within a data structure.

// Input: n = 100;

// Hint: by taking square root method to divide each number.

// Output:

function checkPrime(num) {
  let root = Math.floor(num ** 0.5);

  for (let i = 2; i <= root; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function countPrime(n) {
  let primeCount = 0;

  for (let i = 2; i <= n; i++) {
    if (checkPrime(i)) {
      primeCount++;
    }
  }
  console.log(primeCount);
}

// countPrime(100);    => 25



// Problem 3: You have given 2 arrays. The first array sorted in ascentding order and second array sorting in descending order. You have to find number of elements common in both array.

// Input:  array1 = [1, 2, 2, 3, 4, 5]    array2 = [4, 4, 3, 2, 1, 1]

// Hint: Two Pointer Technique.

// Output:

function twoSortedArrays(arr1, arr2) {
  let i = 0;
  let j = N - 1;
  let count = 0;

  while (i < N && j >= 0) {
    if (arr1[i] === arr2[j]) {
      count++;
      i++;
      j--;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j--;
    }
  }
  console.log(count);
}

// twoSortedArrays(array1, array2);   => 4



// Problem 4: Find and print the elements that form the shape of letter 'N' in a 2D array.

// Input:
// array = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// Output:

function printN(arr) {
  let row = arr.length;
  let col = arr[0].length;
  let res = "";

  for (let i = row - 1; i >= 0; i--) {
    res = res + arr[i][0] + " ";
  }
  for (let i = 1, j = 1; i < row && j < col; i++, j++) {
    res = res + arr[i][j] + " ";
  }
  for (let i = row - 2; i >= 0; i--) {
    res = res + arr[i][col - 1] + " ";
  }

  console.log(res);
}

// printN(arr);   => 7 4 1 5 9 6 3



// Problem 5: Determine if a number is a palindrome, then print "yes" or "no".

// Input:   num = 1221;

// Hint: takes floor value of number.

// Output:
function numberPalindrome(number) {
  let num = number;
  let rev = 0;

  while (num > 0) {
    let res = Math.floor(num % 10);
    rev = rev * 10 + res;
    num = Math.floor(num / 10);
  }

  if (number === rev) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

numberPalindrome(num);

*/

