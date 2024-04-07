let str = "Starting Javascript...";
console.log(str);

// Variables
var myName = "Vaclav";
var age = 36;
var juliaAge = 32;
var ageDiff = age - juliaAge;

console.log(myName, age);
console.log(ageDiff);

//Conditionals
if (age > 21) {
  greeting = "You are older than 21";
} else {
  greeting = "You are not older than 21";
}

console.log(greeting);

if (age < juliaAge) {
  greeting = "Julia is older than you";
} else {
  greeting = "Julia is younger than you";
}

if ((age = juliaAge)) {
  greeting = "You have the same age as Julia";
}

console.log(greeting);

// 6.
//Arrays
const myClass = [
  "Raul",
  "Baseer",
  "Andrei",
  "Alona",
  "Valerija",
  "Kim",
  "Oscar",
  "Patrick",
];

// Print first item
let myClass1 = myClass[0];
console.log(myClass1);

// Print last item
let myClass2 = myClass[7];
console.log(myClass2);

// Print all items using "for" (loop)
for (const name of myClass) {
  console.log(name);
}
// DONE

// 7.
// Print all the items using "while" loop
const classAge = [40, 45, 42, 25, 32, 27, 28, 38];
let index = 0; // Initialize index to start from the first element of the array

while (index < classAge.length) {
  const age = classAge[index];
  if (age % 2 === 0) {
    console.log(age); // Print the age - even numbers
  }
  index++; // Move to the next element
}

for (let i = 0; i < classAge.length; i++) {
  console.log(classAge[i]);
}
// DONE

// 8.
// Use a loop to find the sum of all the elements of the ages array.
for (let i = 0; i < classAge.length; i++) {
  index += classAge[i];
}

console.log("The sum of the array is:", index);

// 9.
// Use a loop to add the even numbers of an array

let evenAgeSum = 0;

for (let i = 0; i < classAge.length; i++) {
  if (classAge[i] % 2 === 0)
    // Check for even numbers
    evenAgeSum += classAge[i]; // Add it to the overal sum.
}

// 10.
//

console.log("The sum of the even ages is:", evenAgeSum);

// --- FUNCTIONS ---

// 11.
// make function that returns nothing, has no parameters.
//This function should print the result of the multiplication of two numbers.

function mathResult() {
  const number1 = 5;
  const number2 = 2;

  const result = number1 * number2;
  console.log(result);
}
mathResult();
// DONE

// 12.
//Write a JavaScript function with no parameters.
// This function should return the result of the multiplication of two numbers
//( the numbers that you want), and in your main program, you should print the result.

function mathResultReturned() {
  const number1 = 3;
  const number2 = 2;

  const result = number1 * number2;
  return result;
}
console.log(mathResultReturned());
// DONE

// 13.
// Write a JavaScript function with two parameters.
// These parameters are the numbers that have to be multiplied.
// The function should return the result of the multiplication
// of both numbers(the numbers that you want), and in your main program,
// you should print the result.Test the function with 3 examples.

function functionResult(numberX, numberY) {
  const result = numberX * numberY;
  return result;
}
console.log(functionResult(3, 4));
// DONE

// 14.
// Write a function that determines the type of a triangle
// given the length of its three sides: Equilateral, Isosceles, or Scalene.

function triangleType(sideA, sideB, sideC) {
  if (sideA === sideB && sideB === sideC) {
    return "Equilateral";
  } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
    return "Isosceles";
  } else {
    return "Scalene";
  }
}

console.log(triangleType(3, 3, 3));
console.log(triangleType(5, 5, 3));
console.log(triangleType(4, 5, 6));
// DONE

// 15.
// Write a function to find and print the lowest number in an array to the console.

function printLowestNumber(array) {
  const lowestNumber = Math.min(...array);
  console.log(lowestNumber);
}
const numbers = [2, 5, 6, 8];
printLowestNumber(numbers);
// DONE

// 16.
// Write a function to find and print the highest number in an array to the console.

function printHighestNumber(array) {
  const highestNumber = Math.max(...array);
  console.log(highestNumber);
}
const arrayNumbers = [2, 5, 6, 8];
printHighestNumber(arrayNumbers);
// DONE

// 17.
// Two parameters in a function - array and index position

function arrayIndex(array, index) {
  console.log(array[index]);
}
const myArray = [2, 4, 6, 8];
arrayIndex(myArray, 1);
arrayIndex(myArray, 3);

// DONE

// 18.
// Write a simple JavaScript function to join all elements of the following array into single string:
// const myColor = ["Red", "Green", "White", "Black"];
// You should see the following in your console: "Red Green White Black"

function joinArrayElements(array) {
  return array.join(" ");
}

const myColor = ["Red", "Green", "White", "Black"];
console.log(joinArrayElements(myColor));
// DONE

// 19.
// Write a JavaScript function that reverses a number.
// For example, if const x = 32443;, then the output should be 34423.

function reverseNumber(num) {
  const reversedString = num.toString().split("").reverse().join("");
  return parseInt(reversedString, 10);
}

const revNum = 32443;
console.log(reverseNumber(revNum)); // This will print 34423
// DONE

// 20.
// Write a JavaScript function that returns a string in alphabetical order.
// For example, if const x = 'webmaster';, then the output should be 'abeemrstw'.Punctuation and numbers aren't passed in the string.

function sortStringAlphabetically(str) {
  return str.split("").sort().join("");
}

const sortedString = sortStringAlphabetically("webmaster");
console.log(sortedString); //'abeemrstw'
// DONE

// 21.
// Write a JavaScript function that finds the longest word in a phrase. For example,
// if const x = "Web Development Tutorial";, then the output should be "Development".

function findLongestWord(phrase) {
  let words = phrase.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

const x = "Web Development Tutorial";
console.log(findLongestWord(x)); // Outputs: "Development"

// 22.
// Write a function that receives as a parameter a string and replaces all "a" with "1". e.g.: "JavaScript" will become "J1v1Script".

function replaceAWith1(str) {
  return str.replace(/a/gi, "1");
}

const exampleString = "JavaScript";
console.log(replaceAWith1(exampleString)); // Outputs: "J1v1Script"

// - a is the character to match.
// - g is a flag for "global" search, meaning it will replace all occurrences of the character in the string, not just the first.
// - i is a flag for "case-insensitive" search, meaning it will match both "A" and "a".
// The second argument is the string '1', which is what each matched "a" will be replaced with.
// DONE

// 23.
// Write a JavaScript function that converts the first letter of every word in a string to uppercase. For example, if const x = "prince of persia"; then the output should be "Prince Of Persia".

function capitalizeFirstLetter(str) {
  // Split the string into an array of words
  const words = str.split(" ");

  // Transform each word
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the capitalized words back into a string
  return capitalizedWords.join(" ");
}

const phrase1 = "prince of persia";
console.log(capitalizeFirstLetter(phrase1)); // Outputs: "Prince Of Persia"
// DONE

// 24.
// Write a function that by sending a number as parameter, tells you all the even numbers before it. For example, if you send to the function the number 9, it should print 2,4,6,8.

function printEvenNumbersBefore(num) {
  let evenNumbers = [];
  for (let i = 2; i < num; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  console.log(evenNumbers.join(", "));
}

printEvenNumbersBefore(9); // This should print "2, 4, 6, 8"
// DONE

// 25.
// Write a function that takes two numbers as parameters, then tells you the odd numbers between them. For instance, if you send the numbers 1 and 13 as parameters, it should print 1,3,5,7,9,11,13.

function printOddNumbersBetween(start, end) {
  let oddNumbers = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(i);
    }
  }
  console.log(oddNumbers.join(", "));
}

printOddNumbersBetween(1, 13); // "1, 3, 5, 7, 9, 11, 13"
// DONE

// 26.
// Write a function that receives an array and only prints the values that repeat. For example, given the following array, the function will print 6, 23, 33, 100.

function printRepeatedValues(array) {
  const counts = {};
  const repeated = [];

  // Count each value in the array
  for (let value of array) {
    counts[value] = (counts[value] || 0) + 1;
  }

  // Find and print values that repeat
  for (let value in counts) {
    if (counts[value] > 1) {
      repeated.push(value);
    }
  }

  console.log(repeated.join(", "));
}

const Array = [6, 23, 33, 100, 6, 23, 33, 100, 45];
printRepeatedValues(Array); // Expected to print "6, 23, 33, 100"

// - An object counts is used to keep track of how many times each value appears in the array.
// - We loop through each element of the array, increasing its count in counts by 1 for each occurrence. If an element isn't in counts yet, it gets added with an initial count of 1.
// - Then, we loop through the counts object to check which values have a count greater than 1, meaning they repeat in the input array. These values are added to the repeated array.
// - Finally, the repeated values are joined into a string with join(', ') and printed.

// This function will only print the values from the array that repeat, as requested.
// DONE
