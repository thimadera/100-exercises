"use strict"; // leave this line here :)

// Welcome to 101 Exercises in JS
// If you get "ReferenceError: someVariableName is not defined", that means you need to create a variable

// Exercise #0, Example Problem:
// Example problem setup: Create a variable named doingJSRightNow and assign it the boolean true.
// The line below creates the variable named doingJSRightNow and assigns the boolean value true
// To complete Exercise #0, uncomment the following line of JS
var doingJSRightNow = true;

// The lines below will test your answer. If you see an error, then it means that your answer is incorrect or incomplete.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined to understand this error message.

//  Exercise 1
// On the line below, create a variable named onMarsRightNow and assign it the boolean value of false
// For more on variables, see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables
const onMarsRightNow = false;

// Exercise 2
// For more on arrays, see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
// Create a variable named fruits and assign it an array of strings containing the following fruits.
// mango, banana, guava, kiwi, and strawberry.
const fruits = ["mango", "banana", "guava", "kiwi", "strawberry"];

// Exercise 3
// Create a variable named vegetables and assign it an array of strings containing the following vegetables.
// eggplant, broccoli, carrot, cauliflower, and zucchini
const vegetables = [
  "eggplant",
  "broccoli",
  "carrot",
  "cauliflower",
  "zucchini",
];

// Exercise 4
// Create a variable named numbers and assign it an array of numbers, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Exercise 5
// Add the string "tomato" to the end of the fruits array.
// *Hint* Recommend finding and using a built-in JS operation to add to an array rather than recreating the array.
fruits.push("tomato");

// Exercise 6
// add the string "tomato" onto the end of the vegetables array.
// Recommend using the built-in JS operation to add to an array.
vegetables.push("tomato");

// Exercise 7
// Given the array of numbers defined below, reverse the array of numbers that you created above.
const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
someNumbers.reverse();

// Exercise 8
// Sort the vegetables in alphabetical order. Recommend finding a way to sort the array with a built-in method
vegetables.sort();

// Exercise 9
// Write the code necessary to sort the fruits in reverse alphabetical order
fruits.sort().reverse();

// Exercise 10
// Write the code necessary to produce a single array that holds all fruits then all vegetables in the order as they were sorted above.
// Assign the result to a variable named fruitsAndVeggies.
// *hint* the search engine search here would be "how to combine two arrays in JavaScript", for example.
const fruitsAndVeggies = [...fruits, ...vegetables];

// Writing functions
// See https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions for help with writing functions
// Be sure to return values from your function definitions. The assert statements will call/run your function(s) for you.

// Example function defintion:
// Write a sayHello function that adds the string "Hello, " to the beginning and "!" to the end of any given input.
function sayHello(name) {
  return "Hello, " + name + "!";
}

// Heres another example function definition
// This plusTwo function takes in a variable and adds the number 2 to it.
function plusTwo(x) {
  return x + 2;
}

// Exercise 11
// Write a function definition for a function named addOne that takes in a number and returns that number plus one
const addOne = (x) => x + 1;

// The next exercises will be focusing on basic operators in JS
// Exercise 12
// Write a function definition named isPositive that takes in a number and returns true or false if that number is positive.
// Think about the definition of a number that is positive.
// Is 5 positive? Is 0.25 positive? Is 0.00001 positive? Is -0.001 positive?
// Is zero itself positive? What about infinity? What about negative infinity?
// Documentation for comparison operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#relational_operators
// HINT - here are example functions using comparison operators https://gist.github.com/ryanorsinger/e843c7d0966993bd8193f0afabe16ae0
// If you get stuck, be sure to check the example code and documentation listed above
const isPositive = (x) => x > 0;

// Exercise 13
// Write a function definition named isNegative that takes in a number and returns true or False if that number is negative.
const isNegative = (x) => x < 0;

// Exercise 14
// Write a function definition named isOdd that takes in a number and returns true or false if that number is odd.
const isOdd = (x) => Boolean(x % 2);

// Exercise 15
// Write a function definition named isEven that takes in a number and returns true or false if that number is even.
const isEven = (x) => !Boolean(x % 2);

// Exercise 16
// Write a function definition named identity that takes in any input and returns that input. Don't overthink this one!
const identity = (x) => x;

// Exercise 17
// Write a function definition named isPositiveOdd that takes in a number and returns true or false if the value is both greater than zero and odd
const isPositiveOdd = (x) => x > 0 && Boolean(x % 2);

// Exercise 18
// Write a function definition named isPositiveEven that takes in a number and returns true or false if the value is both greater than zero and even
const isPositiveEven = (x) => x > 0 && !Boolean(x % 2);

// Exercise 19
// Write a function definition named isNegativeOdd that takes in a number and returns true or false if the value is both less than zero and odd.
const isNegativeOdd = (x) => x < 0 && Boolean(x % 2);

// Exercise 20
// Write a function definition named isNegativeEven that takes in a number and returns true or false if the value is both less than zero and even.
const isNegativeEven = (x) => x < 0 && !Boolean(x % 2);

// Exercise 21
// Write a function definition named half that takes in a number and returns half the provided number.
const half = (x) => x / 2;

// Exercise 22
// Write a function definition named double that takes in a number and returns double the provided number.
const double = (x) => x * 2;

// Exercise 23
// Write a function definition named triple that takes in a number and returns triple the provided number.
const triple = (x) => x * 3;

// Exercise 24
// Write a function definition named reverseSign that takes in a number and returns the provided number but with the sign reversed.
const reverseSign = (x) => x * -1;

// Exercise 25
// Write a function definition named absoluteValue that takes in a number and returns the absolute value of the provided number
const absoluteValue = (x) => Math.abs(x);

// Exercise 26
// Write a function definition named isMultipleOfThree that takes in a number and returns true or false if the number is evenly divisible by 3.
const isMultipleOfThree = (x) => !Boolean(x % 3);

// Exercise 27
// Write a function definition named isMultipleOfFive that takes in a number and returns true or false if the number is evenly divisible by 5.
const isMultipleOfFive = (x) => !Boolean(x % 5);

// Exercise 28
// Write a function definition named isMultipleOfBothThreeAndFive that takes in a number and returns true or false if the number is evenly divisible by both 3 and 5.
const isMultipleOfBothThreeAndFive = (x) => !Boolean(x % 15);

// Exercise 29
// Write a function definition named square that takes in a number and returns the number times itself.
const square = (x) => x * x;

// Exercise 30
// Write a function definition named add that takes in two numbers and returns the sum.
const add = (x, y) => x + y;

// Exercise 31
// Write a function definition named cube that takes in a number and returns the number times itself, times itself.
const cube = (x) => x * x * x;

// Exercise 32
// Write a function definition named squareRoot that takes in a number and returns the square root of the provided number
const squareRoot = (x) => Math.sqrt(x);

// Exercise 33
// Write a function definition named subtract that takes in two numbers and returns the first minus the second argument.
const subtract = (x, y) => x - y;

// Exercise 34
// Write a function definition named multiply that takes in two numbers and returns the first times the second argument.
const multiply = (x, y) => x * y;

// Exercise 35
// Write a function definition named divide that takes in two numbers and returns the first argument divided by the second argument.
const divide = (x, y) => x / y;

// Exercise 36
// Write a function definition named quotient that takes in two numbers and returns the quotient of dividing the first argument by the second argument.
const quotient = (x, y) => Math.floor(x / y);

// Exercise 37
// Write a function definition named remainder that takes in two numbers and returns the remainder of first argument divided by the second argument.
const remainder = (x, y) => x % y;

// Exercise 38
// Write a function definition named sumOfSquares that takes in two numbers, squares each number, then returns the sum of both squares.
const sumOfSquares = (x, y) => x * x + y * y;

// Exercise 39
// Write a function definition named timesTwoPlusThree that takes in a number, multiplies it by two, adds 3 and returns the result.
const timesTwoPlusThree = (x) => x * 2 + 3;

// Exercise 40
// Write a function definition named areaOfRectangle that takes in two numbers and returns the product.
const areaOfRectangle = (x, y) => x * y;

// Exercise 41
// Write a function definition named areaOfCircle that takes in a number representing a circle's radius and returns the area of the circle
const areaOfCircle = (x) => Math.PI * x * x;

// Exercise 42
// Write a function definition named circumference that takes in a number representing a circle's radius and returns the circumference.
const circumference = (x) => 2 * Math.PI * x;

// In earlier exercises, the solution was to use a logical AND.
// In some of the future exercises, the solution will be to use a logical OR.
// The following two example functions are examples that provide a hint on how to as

// Example function where the function returns true if the input is one OR two.
function isOneOrTwo(x) {
  return x == 1 || x == 2;
}

// Example function where the input is one of 3 possibilities
function isOneOrTwoOrThree(x) {
  return x == 1 || x == 2 || x == 3;
}

// Exercise 43
// Review this code carefully https://gist.github.com/ryanorsinger/5627b954d119dabb3d8c44d56b38c354 if you want more guidance on Exercises 43, 44, and 45.
// Write a function definition named isVowel that takes in value and returns true if the value is a, e, i, o, u in upper or lower case.
const isVowel = (x) => ["a", "e", "i", "o", "u"].includes(x.toLowerCase());

// Exercise 44
// Write a function definition named hasVowels that takes in value and returns true if the string contains any vowels.
const hasVowels = (x) => x.split("").some((y) => isVowel(y));

// Exercise 45
// Write a function definition named countVowels that takes in value and returns the count of the nubmer of vowels in a sequence.
const countVowels = (x) => x.split("").filter((a) => isVowel(a)).length;

// Exercise 46
// Write a function definition named removeVowels that takes in string and returns the string without any vowels
const removeVowels = (x) =>
  x
    .split("")
    .filter((a) => !isVowel(a))
    .join("");

// Exercise 47
// Write a function definition named startsWithVowel that takes in string and true if the string starts with a vowel
const startsWithVowel = (x) => isVowel(x[0]);

// Exercise 48
// Write a function definition named endsWithVowel that takes in string and true if the string ends with a vowel
const endsWithVowel = (x) => isVowel(x[x.length - 1]);

// Exercise 49
// Write a function definition named startsAndEndsWithVowel that takes in string and returns true if the string starts and ends with a vowel
const startsAndEndsWithVowel = (x) => isVowel(x[0]) && isVowel(x[x.length - 1]);

// Exercise 50
// Write a function definition named first that takes in sequence and returns the first value of that sequence.
const first = (x) => x[0];

// Exercise 51
// Write a function definition named second that takes in sequence and returns the second value of that sequence.
const second = (x) => x[1];

// Exercise 52
// Write a function definition named third that takes in sequence and returns the third value of that sequence.
const third = (x) => x[2];

// Exercise 53
// Write a function definition named forth that takes in sequence and returns the forth value of that sequence.
const forth = (x) => x[3];

// Exercise 54
// Write a function definition named last that takes in sequence and returns the last value of that sequence.
const last = (x) => x[x.length - 1];

// Exercise 55
// Write a function definition named secondToLast that takes in sequence and returns the second to last value of that sequence.
const secondToLast = (x) => x[x.length - 2];

// Exercise 56
// Write a function definition named thirdToLast that takes in sequence and returns the third to last value of that sequence.
const thirdToLast = (x) => x[x.length - 3];

// Exercise 57
// Write a function definition named firstAndSecond that takes in sequence and returns the first and second value of that sequence as an array
const firstAndSecond = (x) => [x[0], x[1]];

// Exercise 58
// Write a function definition named firstAndLast that takes in sequence and returns the first and last value of that sequence as an array
const firstAndLast = (x) => [x[0], x[x.length - 1]];

// Exercise 59
// Write a function definition named firstToLast that takes in sequence and returns the sequence with the first value moved to the end of the sequence.
const firstToLast = (x) => [...x.slice(1), x[0]];

// Exercise 60
// Write a function definition named sumAll that takes in sequence of numbers and returns all the numbers added together.
const sumAll = (x) => x.reduce((a, b) => a + b, 0);

//  Exercise 61
//  Write a function definition named mean that takes in sequence of numbers and returns the average value
const mean = (x) => sumAll(x) / x.length;

// Exercise 62
// Write a function definition named median that takes in sequence of numbers and returns the average value
const median = (x) => {
  x.sort((a, b) => a - b);

  return x.length % 2 === 0
    ? (x[x.length / 2 - 1] + x[x.length / 2]) / 2
    : x[Math.floor(x.length / 2)];
};

// Exercise 63
// Write a function definition named maxMinusMin that takes in an array of numbers and returns the difference of the maximum minus the minimum.
const maxMinusMin = (x) => Math.max(...x) - Math.min(...x);

// Exercise 64
// Write a function definition named productOfAll that takes in sequence of numbers and returns the product of multiplying all the numbers together
const productOfAll = (x) => x.reduce((a, b) => a * b, 1);

// Exercise 65
// Write a function definition named getHighestNumber that takes in sequence of numbers and returns the largest number.
const getHighestNumber = (x) => Math.max(...x);

// Exercise 66
// Write a function definition named getSmallestNumber that takes in sequence of numbers and returns the smallest number.
const getSmallestNumber = (x) => Math.min(...x);

// Exercise 67
// Write a function definition named onlyOddNumbers that takes in sequence of numbers and returns the odd numbers in an array.
const onlyOddNumbers = (x) => x.filter((a) => Boolean(a % 2));

// Exercise 68
// Write a function definition named onlyEvenNumbers that takes in sequence of numbers and returns the even numbers in an array.
const onlyEvenNumbers = (x) => x.filter((a) => !Boolean(a % 2));

// Exercise 69
// Write a function definition named onlyPositiveNumbers that takes in sequence of numbers and returns the positive numbers in an array.
const onlyPositiveNumbers = (x) => x.filter((a) => a > 0);

// Exercise 70
// Write a function definition named onlyNegativeNumbers that takes in sequence of numbers and returns the negative numbers in an array.
const onlyNegativeNumbers = (x) => x.filter((a) => a < 0);

// Exercise 71
// Write a function definition named hasEvens that takes in sequence of numbers and returns true if there are any even numbers in the sequence
const hasEvens = (x) => x.some((a) => !Boolean(a % 2));

// Exercise 72
// Write a function definition named countEvens that takes in sequence of numbers and returns the number of even numbers
const countEvens = (x) => x.filter((a) => !Boolean(a % 2)).length;

// Exercise 73
// Write a function definition named hasOdds that takes in sequence of numbers and returns true if there are any odd numbers in the sequence
const hasOdds = (x) => x.some((a) => Boolean(a % 2));

// Exercise 74
// Write a function definition named countOdds that takes in sequence of numbers and returns a count of the any odd numbers in the sequence
const countOdds = (x) => x.filter((a) => Boolean(a % 2)).length;

// Exercise 75
// Write a function definition named countNegatives that takes in sequence of numbers and returns a count of the number of negative numbers
const countNegatives = (x) => x.filter((a) => a < 0).length;

// Exercise 76
// Write a function definition named countPositives that takes in sequence of numbers and returns a count of the number of positive numbers
const countPositives = (x) => x.filter((a) => a > 0).length;

// Exercise 77
// Write a function definition named onlyPositiveEvens that takes in sequence of numbers and returns an array containing all the positive evens from the sequence
const onlyPositiveEvens = (x) => x.filter((a) => a > 0 && !Boolean(a % 2));

// Exercise 78
// Write a function definition named onlyPositiveOdds that takes in sequence of numbers and returns an array containing all the positive odd numbers from the sequence
const onlyPositiveOdds = (x) => x.filter((a) => a > 0 && Boolean(a % 2));

// Exercise 79
// Write a function definition named onlyNegativeEvens that takes in sequence of numbers and returns an array containing all the negative even numbers from the sequence
const onlyNegativeEvens = (x) => x.filter((a) => a < 0 && !Boolean(a % 2));

// Exercise 80
// Write a function definition named onlyNegativeOdds that takes in sequence of numbers and returns an array containing all the negative odd numbers from the sequence
const onlyNegativeOdds = (x) => x.filter((a) => a < 0 && Boolean(a % 2));

// Exercise 81
// Write a function definition named shortestString that takes in an array of strings and returns the shortest string in the array.
const shortestString = (x) => x.sort((a, b) => a.length - b.length)[0];

// Exercise 82
// Write a function definition named longestString that takes in sequence of strings and returns the longest string in the array.
const longestString = (x) => x.sort((a, b) => b.length - a.length)[0];

// Exercise 83
// Write a function definition named getUniqueValues that takes in an array and returns an with only the unique values from that array.
const getUniqueValues = (x) => [...new Set(x)];

// Exercise 84
// Write a function definition named elementsTimesTwo that takes in an array of numbers and returns an array with each value multiplied by 2.
const elementsTimesTwo = (x) => x.map((a) => a * 2);

// Exercise 85
// Write a function named flatten that takes in an array of arrays. Return the flattened array.
const flatten = (x) => x.flat();

// Exercise 86
// Write a function definition named addOneToArray that adds one to every number in an array
const addOneToArray = (x) => x.map((a) => a + 1);

// Working with JS Objects
const tukeyPaper = {
  title: "The Future of Data Analysis",
  author: "John W. Tukey",
  link: "https://projecteuclid.org/euclid.aoms/1177704711",
  year_published: 1962,
};

const thomasPaper = {
  title: "A mathematical model of glutathione metabolism",
  author: "Rachel Thomas",
  link: "https://www.ncbi.nlm.nih.gov/pubmed/18442411",
  year_published: 2008,
};

// Exercise 87
// Write a function named getPaperTitle that takes in a object and returns the title property
const getPaperTitle = (x) => x.title;

// Exercise 88
// Write a function named getYearPublished that takes in an objects and returns the value behind the "year_published" key.
const getYearPublished = (x) => x.year_published;

// this code defines a JS object with information about a book.
const book = {
  title: "Genetic Algorithms and Machine Learning for Programmers",
  price: 36.99,
  author: "Frances Buontempo",
};

// Exercise 89
// Write a function named getPrice that takes in a object and returns the price
const getPrice = (x) => x.price;

// Exercise 90
// Write a function named getBookAuthor that takes in a object (the above declared book variable) and returns the author's name
const getBookAuthor = (x) => x.author;

// The next exercises work with a arrays of objects.
// You'll see arrays of objects over and over again with data in a program.
// Here is our arrays of objects.
const books = [
  {
    title: "Genetic Algorithms and Machine Learning for Programmers",
    price: 36.99,
    author: "Frances Buontempo",
  },
  {
    title: "The Visual Display of Quantitative Information",
    price: 38.0,
    author: "Edward Tufte",
  },
  {
    title: "Practical Object-Oriented Design",
    author: "Sandi Metz",
    price: 30.47,
  },
  {
    title: "Weapons of Math Destruction",
    author: "Cathy O'Neil",
    price: 17.44,
  },
];

// Exercise 91
// Write a function named getNumberOfBooks that takes in a array of objects and returns the number of objects in that array.
const getNumberOfBooks = (x) => x.length;

// Exercise 92
// Write a function named totalOfBookPrices that takes in a array of objects and returns the sum total of all the book prices added together
const totalOfBookPrices = (x) => x.reduce((a, b) => a + b.price, 0);

// Exercise 93
// Write a function named getAverageBookPrice that takes in a array of objects and returns the average book price.
const getAverageBookPrice = (x) => totalOfBookPrices(x) / x.length;

// Exercise 94
// Write a function called highestPriceBook that takes in the above defined array of objects "books" and returns the object containing the title, price, and author of the book with the highest priced book.
// Hint: Much like sometimes start functions with a variable set to zero, you may want to create a object with the price set to zero to compare to each object's price in the array
const highestPriceBook = (x) => x.sort((a, b) => b.price - a.price)[0];

// Exercise 95
// Write a function called lowestPriceBook that takes in the above defined array of objects "books" and returns the object containing the title, price, and author of the book with the lowest priced book.
// Hint: Much like sometimes start functions with a variable set to zero or float('inf'), you may want to create a object with the price set to float('inf') to compare to each object in the array
const lowestPriceBook = (x) => x.sort((a, b) => a.price - b.price)[0];

const shoppingCart = {
  tax: 0.08,
  items: [
    {
      title: "orange juice",
      price: 3.99,
      quantity: 1,
    },
    {
      title: "rice",
      price: 1.99,
      quantity: 3,
    },
    {
      title: "beans",
      price: 0.99,
      quantity: 3,
    },
    {
      title: "chili sauce",
      price: 2.99,
      quantity: 1,
    },
    {
      title: "chocolate",
      price: 0.75,
      quantity: 9,
    },
  ],
};

// Exercise 96
// Write a function named getTaxRate that takes in the above shopping cart as input and returns the tax rate.
// Hint: How do you access a key's value on a object? The tax rate is one key of the entire shoppingCart object.
const getTaxRate = (x) => x.tax;

// Exercise 97
// Write a function named numberOfItemTypes that takes in the shopping cart as input and returns the number of unique item types in the shopping cart.
// We're not yet using the quantity of each item, but rather focusing on determining how many different types of items are in the cart.
const numberOfItemTypes = (x) => new Set(x.items.map((a) => a.title)).size;

// Exercise 98
// Write a function named totalNumberOfItems that takes in the shopping cart as input and returns the total number all item quantities.
// This should return the sum of all of the quantities from each item type
const totalNumberOfItems = (x) => x.items.reduce((a, b) => a + b.quantity, 0);

// Exercise 99
// Write a function named getAverageItemPrice that takes in the shopping cart as an input and returns the average of all the item prices.
// Hint - This should determine the total price divided by the number of types of items. This does not account for each item type's quantity.\
const getAverageItemPrice = (x) => totalOfBookPrices(x.items) / x.items.length;

// Exercise 100
// Write a function named getAverageSpentPerItem that takes in the shopping cart and returns the average of summing each item's quanties times that item's price.
// Hint: You may need to set an initial total price and total total quantity to zero, then sum up and divide that total price by the total quantity
const getAverageSpentPerItem = (x) =>
  x.items.reduce((a, b) => a + b.price * b.quantity, 0) / totalNumberOfItems(x);


// Exercise 101
// Write a function named mostSpentOnItem that takes in the shopping cart as input and returns the object associated with the item that has the highest price*quantity.
// Be sure to do this as programmatically as possible.
// Hint: Similarly to how we sometimes begin a function with setting a variable to zero, we need a starting place:
// Hint: Consider creating a variable that is a object with the keys "price" and "quantity" both set to 0. You can then compare each item's price and quantity total to the one from "most"
const mostSpentOnItem = (x) =>
  x.items.sort((a, b) => b.price * b.quantity - a.price * a.quantity)[0];
