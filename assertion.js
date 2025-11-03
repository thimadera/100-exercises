"use strict"; // leave this line here :)

let isThereAnError = false;
let lastWasError = false;

// Keep this function definition in order to test expected vs. actual results
const assert = function (actual, expected, message = "") {
  // This compares primitive values and collections. If they differ, throw an error.
  if (JSON.stringify(actual) !== JSON.stringify(expected) && !isThereAnError) {
    isThereAnError = true;
    console.error("[assert] expected:    " + JSON.stringify(expected));
    console.error("[assert] instead got: " + JSON.stringify(actual));

    console.error("Assert failed in " + message);
  }
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    lastWasError = true;
  }
};

// Keep this function here in order to add correct questions to the counter
function addToDone(message) {
  var node = document.createElement("LI"); // Create a <li> node
  var textnode = document.createTextNode(
    lastWasError ? message.replace("is correct", "is incorrect") : message
  ); // Create a text node
  node.appendChild(textnode); // Append the text to <li>
  node.style.color = lastWasError ? "red" : "green";
  node.classList.add(lastWasError ? "unfinished" : "finished");
  document.querySelector(".correct ul").appendChild(node);
  document.querySelector("#count").innerHTML =
    document.querySelectorAll(".finished").length + " of 101";
  lastWasError = false;
}

assert(doingJSRightNow, true, "Exercise 0");

try {
  assert(onMarsRightNow, false, "Exercise 1");
} catch {
  assert(undefined, false, "Exercise 1");
}
addToDone("Exercise 1 is correct.");

try {
  assert(
    [...fruits].filter((a) => a !== "tomato").sort(),
    ["mango", "banana", "guava", "kiwi", "strawberry"].sort(),
    "Exercise 2"
  );
} catch {
  assert(
    undefined,
    ["mango", "banana", "guava", "kiwi", "strawberry"],
    "Exercise 2"
  );
}
addToDone("Exercise 2 is correct.");

try {
  assert(
    [...vegetables].filter((a) => a !== "tomato").sort(),
    ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini"].sort(),
    "Exercise 3"
  );
} catch {
  assert(
    undefined,
    ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini"],
    "Exercise 3"
  );
}
addToDone("Exercise 3 is correct.");

try {
  assert(numbers, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "Exercise 4");
} catch {
  assert(undefined, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "Exercise 4");
}
addToDone("Exercise 4 is correct.");

try {
  assert(
    [...fruits].sort(),
    ["mango", "banana", "guava", "kiwi", "strawberry", "tomato"].sort(),
    "Exercise 5"
  );
} catch {
  assert(
    undefined,
    ["mango", "banana", "guava", "kiwi", "strawberry", "tomato"],
    "Exercise 5"
  );
}
addToDone("Exercise 5 is correct");

try {
  assert(
    [...vegetables].sort(),
    [
      "eggplant",
      "broccoli",
      "carrot",
      "cauliflower",
      "zucchini",
      "tomato",
    ].sort(),
    "Exercise 6"
  );
} catch {
  assert(
    undefined,
    ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini", "tomato"],
    "Exercise 6"
  );
}
addToDone("Exercise 6 is correct");

try {
  assert(someNumbers, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], "Exercise 7");
} catch {
  assert(undefined, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], "Exercise 7");
}
addToDone("Exercise 7 is correct");

try {
  assert(
    vegetables,
    ["broccoli", "carrot", "cauliflower", "eggplant", "tomato", "zucchini"],
    "Exercise 8"
  );
} catch {
  assert(
    undefined,
    ["broccoli", "carrot", "cauliflower", "eggplant", "tomato", "zucchini"],
    "Exercise 8"
  );
}
addToDone("Exercise 8 is correct.");

try {
  assert(
    fruits,
    ["tomato", "strawberry", "mango", "kiwi", "guava", "banana"],
    "Exercise 9"
  );
} catch {
  assert(
    undefined,
    ["tomato", "strawberry", "mango", "kiwi", "guava", "banana"],
    "Exercise 9"
  );
}
addToDone("Exercise 9 is correct.");

try {
  assert(
    fruitsAndVeggies,
    [
      "tomato",
      "strawberry",
      "mango",
      "kiwi",
      "guava",
      "banana",
      "broccoli",
      "carrot",
      "cauliflower",
      "eggplant",
      "tomato",
      "zucchini",
    ],
    "Exercise 10"
  );
} catch {
  assert(
    undefined,
    [
      "tomato",
      "strawberry",
      "mango",
      "kiwi",
      "guava",
      "banana",
      "broccoli",
      "carrot",
      "cauliflower",
      "eggplant",
      "tomato",
      "zucchini",
    ],
    "Exercise 10"
  );
}
addToDone("Exercise 10 is correct");

// This function generates a random number that is both positive and even
function randomPositiveEvenNumber() {
  var randomNumber = Math.ceil(Math.random() * 100) + 10;
  if (randomNumber % 2 !== 0) {
    return randomPositiveEvenNumber();
  }

  return randomNumber;
}

// this function generates a random number that is both positive and odd
function randomPositiveOddNumber() {
  var randomNumber = Math.ceil(Math.random() * 100) + 10;
  if (randomNumber % 2 === 0) {
    return randomPositiveOddNumber();
  }

  return randomNumber;
}

// this function generates a random number that is both negative and even.
function randomNegativeEvenNumber() {
  var randomNumber = Math.ceil(Math.random() * -100) - 10;
  if (randomNumber % 2 === 0) {
    return randomNumber;
  }

  return randomNegativeEvenNumber();
}

// this function generates a random number that is both negative and odd.
function randomNegativeOddNumber() {
  var randomNumber = Math.ceil(Math.random() * -100) - 10;
  if (randomNumber % 2 === 0) {
    return randomNegativeOddNumber();
  }

  return randomNumber;
}

// The next 4 lines create variables that hold these generated random numbers
var positiveEvenNumber = randomPositiveEvenNumber();
var positiveOddNumber = randomPositiveOddNumber();
var negativeEvenNumber = randomNegativeEvenNumber();
var negativeOddNumber = randomNegativeOddNumber();

try {
  assert(addOne(2), 3, "Exercise 11");
  assert(addOne(0), 1, "Exercise 11");
  assert(addOne(positiveEvenNumber), positiveEvenNumber + 1, "Exercise 11");
  assert(addOne(negativeOddNumber), negativeOddNumber + 1, "Exercise 11");
} catch {
  assert(undefined, 3, "Exercise 11");
}
addToDone("Exercise 11 is correct.");

try {
  assert(isPositive(0.25), true, "Exercise 12");
  assert(isPositive(0.00001), true, "Exercise 12");
  assert(isPositive(Infinity), true, "Exercise 12");
  assert(isPositive(0), false, "Exercise 12");
  assert(isPositive(-0.001), false, "Exercise 12");
  assert(isPositive(positiveOddNumber), true, "Exercise 12");
  assert(isPositive(positiveEvenNumber), true, "Exercise 12");
  assert(isPositive(negativeOddNumber), false, "Exercise 12");
  assert(isPositive(negativeEvenNumber), false, "Exercise 12");
  assert(isPositive(-Infinity), false, "Exercise 12");
} catch {
  assert(undefined, true, "Exercise 12");
}
addToDone("Exercise 12 is correct.");

try {
  assert(isNegative(positiveOddNumber), false, "Exercise 13");
  assert(isNegative(positiveEvenNumber), false, "Exercise 13");
  assert(isNegative(negativeOddNumber), true, "Exercise 13");
  assert(isNegative(negativeEvenNumber), true, "Exercise 13");
} catch {
  assert(undefined, false, "Exercise 13");
}
addToDone("Exercise 13 is correct.");

try {
  assert(isOdd(positiveOddNumber), true, "Exercise 14");
  assert(isOdd(positiveEvenNumber), false, "Exercise 14");
  assert(isOdd(negativeOddNumber), true, "Exercise 14");
  assert(isOdd(negativeEvenNumber), false, "Exercise 14");
} catch {
  assert(undefined, true, "Exercise 14");
}
addToDone("Exercise 14 is correct.");

try {
  assert(isEven(2), true, "Exercise 15");
  assert(isEven(positiveOddNumber), false, "Exercise 15");
  assert(isEven(positiveEvenNumber), true, "Exercise 15");
  assert(isEven(negativeOddNumber), false, "Exercise 15");
  assert(isEven(negativeEvenNumber), true, "Exercise 15");
} catch {
  assert(undefined, true, "Exercise 15");
}
addToDone("Exercise 15 is correct.");

try {
  assert(identity(fruits), fruits, "Exercise 16");
  assert(identity(vegetables), vegetables, "Exercise 16");
  assert(identity(positiveOddNumber), positiveOddNumber, "Exercise 16");
  assert(identity(positiveEvenNumber), positiveEvenNumber, "Exercise 16");
  assert(identity(negativeOddNumber), negativeOddNumber, "Exercise 16");
  assert(identity(negativeEvenNumber), negativeEvenNumber, "Exercise 16");
} catch {
  assert(undefined, true, "Exercise 16");
}
addToDone("Exercise 16 is correct.");

try {
  assert(isPositiveOdd(3), true, "Exercise 17");
  assert(isPositiveOdd(positiveOddNumber), true, "Exercise 17");
  assert(isPositiveOdd(positiveEvenNumber), false, "Exercise 17");
  assert(isPositiveOdd(negativeOddNumber), false, "Exercise 17");
  assert(isPositiveOdd(negativeEvenNumber), false, "Exercise 17");
} catch {
  assert(undefined, true, "Exercise 17");
}
addToDone("Exercise 17 is correct.");

try {
  assert(isPositiveEven(4), true, "Exercise 18");
  assert(isPositiveEven(positiveOddNumber), false, "Exercise 18");
  assert(isPositiveEven(positiveEvenNumber), true, "Exercise 18");
  assert(isPositiveEven(negativeOddNumber), false, "Exercise 18");
  assert(isPositiveEven(negativeEvenNumber), false, "Exercise 18");
} catch {
  assert(undefined, true, "Exercise 18");
}
addToDone("Exercise 18 is correct.");

try {
  assert(isNegativeOdd(-3), true, "Exercise 19");
  assert(isNegativeOdd(positiveOddNumber), false, "Exercise 19");
  assert(isNegativeOdd(positiveEvenNumber), false, "Exercise 19");
  assert(isNegativeOdd(negativeOddNumber), true, "Exercise 19");
  assert(isNegativeOdd(negativeEvenNumber), false, "Exercise 19");
} catch {
  assert(undefined, true, "Exercise 19");
}
addToDone("Exercise 19 is correct.");

try {
  assert(isNegativeEven(-4), true, "Exercise 20");
  assert(isNegativeEven(positiveOddNumber), false, "Exercise 20");
  assert(isNegativeEven(positiveEvenNumber), false, "Exercise 20");
  assert(isNegativeEven(negativeOddNumber), false, "Exercise 20");
  assert(isNegativeEven(negativeEvenNumber), true, "Exercise 20");
} catch {
  assert(undefined, true, "Exercise 20");
}
addToDone("Exercise 20 is correct.");

try {
  assert(half(4), 2, "Exercise 21");
  assert(half(5), 2.5, "Exercise 21");
  assert(half(positiveOddNumber), positiveOddNumber / 2, "Exercise 21");
  assert(half(positiveEvenNumber), positiveEvenNumber / 2, "Exercise 21");
  assert(half(negativeOddNumber), negativeOddNumber / 2, "Exercise 21");
  assert(half(negativeEvenNumber), negativeEvenNumber / 2, "Exercise 21");
} catch {
  assert(undefined, 2, "Exercise 21");
}
addToDone("Exercise 21 is correct.");

try {
  assert(double(4), 8, "Exercise 22");
  assert(double(5), 10, "Exercise 22");
  assert(double(positiveOddNumber), positiveOddNumber * 2, "Exercise 22");
  assert(double(positiveEvenNumber), positiveEvenNumber * 2, "Exercise 22");
  assert(double(negativeOddNumber), negativeOddNumber * 2, "Exercise 22");
  assert(double(negativeEvenNumber), negativeEvenNumber * 2, "Exercise 22");
} catch {
  assert(undefined, 8, "Exercise 22");
}
addToDone("Exercise 22 is correct.");

try {
  assert(triple(4), 12, "Exercise 23");
  assert(triple(5), 15, "Exercise 23");
  assert(triple(positiveOddNumber), positiveOddNumber * 3, "Exercise 23");
  assert(triple(positiveEvenNumber), positiveEvenNumber * 3, "Exercise 23");
  assert(triple(negativeOddNumber), negativeOddNumber * 3, "Exercise 23");
  assert(triple(negativeEvenNumber), negativeEvenNumber * 3, "Exercise 23");
} catch {
  assert(undefined, 12, "Exercise 23");
}
addToDone("Exercise 23 is correct.");

try {
  assert(reverseSign(4), -4, "Exercise 24");
  assert(reverseSign(-5), 5, "Exercise 24");
  assert(reverseSign(positiveOddNumber), positiveOddNumber * -1, "Exercise 24");
  assert(
    reverseSign(positiveEvenNumber),
    positiveEvenNumber * -1,
    "Exercise 24"
  );
  assert(reverseSign(negativeOddNumber), negativeOddNumber * -1, "Exercise 24");
  assert(
    reverseSign(negativeEvenNumber),
    negativeEvenNumber * -1,
    "Exercise 24"
  );
} catch {
  assert(undefined, -4, "Exercise 24");
}
addToDone("Exercise 24 is correct.");

try {
  assert(absoluteValue(4), 4, "Exercise 25");
  assert(absoluteValue(-5), 5, "Exercise 25");
  assert(absoluteValue(positiveOddNumber), positiveOddNumber, "Exercise 25");
  assert(absoluteValue(positiveEvenNumber), positiveEvenNumber, "Exercise 25");
  assert(
    absoluteValue(negativeOddNumber),
    negativeOddNumber * -1,
    "Exercise 25"
  );
  assert(
    absoluteValue(negativeEvenNumber),
    negativeEvenNumber * -1,
    "Exercise 25"
  );
} catch {
  assert(undefined, 4, "Exercise 25");
}
addToDone("Exercise 25 is correct.");

try {
  assert(isMultipleOfThree(3), true, "Exercise 26");
  assert(isMultipleOfThree(15), true, "Exercise 26");
  assert(isMultipleOfThree(9), true, "Exercise 26");
  assert(isMultipleOfThree(4), false, "Exercise 26");
  assert(isMultipleOfThree(10), false, "Exercise 26");
} catch {
  assert(undefined, true, "Exercise 26");
}
addToDone("Exercise 26 is correct.");

try {
  assert(isMultipleOfFive(3), false, "Exercise 27");
  assert(isMultipleOfFive(15), true, "Exercise 27");
  assert(isMultipleOfFive(9), false, "Exercise 27");
  assert(isMultipleOfFive(4), false, "Exercise 27");
  assert(isMultipleOfFive(10), true, "Exercise 27");
} catch {
  assert(undefined, false, "Exercise 27");
}
addToDone("Exercise 27 is correct.");

try {
  assert(isMultipleOfBothThreeAndFive(15), true, "Exercise 28");
  assert(isMultipleOfBothThreeAndFive(45), true, "Exercise 28");
  assert(isMultipleOfBothThreeAndFive(3), false, "Exercise 28");
  assert(isMultipleOfBothThreeAndFive(9), false, "Exercise 28");
  assert(isMultipleOfBothThreeAndFive(4), false, "Exercise 28");
} catch {
  assert(undefined, true, "Exercise 28");
}
addToDone("Exercise 28 is correct.");

try {
  assert(square(3), 9, "Exercise 29");
  assert(square(2), 4, "Exercise 29");
  assert(square(9), 81, "Exercise 29");
  assert(
    square(positiveOddNumber),
    positiveOddNumber * positiveOddNumber,
    "Exercise 29"
  );
} catch {
  assert(undefined, 9, "Exercise 29");
}
addToDone("Exercise 29 is correct.");

try {
  assert(add(3, 2), 5, "Exercise 30");
  assert(add(10, -2), 8, "Exercise 30");
  assert(add(5, 7), 12, "Exercise 30");
} catch {
  assert(undefined, 5, "Exercise 30");
}
addToDone("Exercise 30 is correct.");

try {
  assert(cube(3), 27, "Exercise 31");
  assert(cube(2), 8, "Exercise 31");
  assert(cube(5), 125, "Exercise 31");
  assert(
    cube(positiveOddNumber),
    positiveOddNumber * positiveOddNumber * positiveOddNumber,
    "Exercise 31"
  );
} catch {
  assert(undefined, 27, "Exercise 31");
}
addToDone("Exercise 31 is correct.");

try {
  assert(squareRoot(4), 2.0, "Exercise 32");
  assert(squareRoot(64), 8.0, "Exercise 32");
  assert(squareRoot(81), 9.0, "Exercise 32");
} catch {
  assert(undefined, 2.0, "Exercise 32");
}
addToDone("Exercise 32 is correct.");

try {
  assert(subtract(8, 6), 2, "Exercise 33");
  assert(subtract(27, 4), 23, "Exercise 33");
  assert(subtract(12, 2), 10, "Exercise 33");
} catch {
  assert(undefined, 2, "Exercise 33");
}
addToDone("Exercise 33 is correct.");

try {
  assert(multiply(2, 1), 2, "Exercise 34");
  assert(multiply(3, 5), 15, "Exercise 34");
  assert(multiply(5, 2), 10, "Exercise 34");
} catch {
  assert(undefined, 2, "Exercise 34");
}
addToDone("Exercise 34 is correct.");

try {
  assert(divide(27, 9), 3, "Exercise 35");
  assert(divide(15, 3), 5, "Exercise 35");
  assert(divide(5, 2), 2.5, "Exercise 35");
  assert(divide(10, 2), 5, "Exercise 35");
} catch {
  assert(undefined, 3, "Exercise 35");
}
addToDone("Exercise 35 is correct.");

try {
  assert(quotient(27, 9), 3, "Exercise 36");
  assert(quotient(5, 2), 2, "Exercise 36");
  assert(quotient(10, 3), 3, "Exercise 36");
} catch {
  assert(undefined, 3, "Exercise 36");
}
addToDone("Exercise 36 is correct.");

try {
  assert(remainder(3, 3), 0, "Exercise 37");
  assert(remainder(5, 2), 1, "Exercise 37");
  assert(remainder(7, 5), 2, "Exercise 37");
} catch {
  assert(undefined, 0, "Exercise 37");
}
addToDone("Exercise 37 is correct.");

try {
  assert(sumOfSquares(3, 2), 13, "Exercise 38");
  assert(sumOfSquares(5, 2), 29, "Exercise 38");
  assert(sumOfSquares(2, 4), 20, "Exercise 38");
} catch {
  assert(undefined, 13, "Exercise 38");
}
addToDone("Exercise 38 is correct.");

try {
  assert(timesTwoPlusThree(0), 3, "Exercise 39");
  assert(timesTwoPlusThree(1), 5, "Exercise 39");
  assert(timesTwoPlusThree(2), 7, "Exercise 39");
  assert(timesTwoPlusThree(3), 9, "Exercise 39");
  assert(timesTwoPlusThree(5), 13, "Exercise 39");
} catch {
  assert(undefined, 3, "Exercise 39");
}
addToDone("Exercise 39 is correct.");

try {
  assert(areaOfRectangle(1, 3), 3, "Exercise 40");
  assert(areaOfRectangle(5, 2), 10, "Exercise 40");
  assert(areaOfRectangle(2, 7), 14, "Exercise 40");
  assert(areaOfRectangle(5.3, 10.3), 54.59, "Exercise 40");
} catch {
  assert(undefined, 3, "Exercise 40");
}
addToDone("Exercise 40 is correct.");

try {
  assert(areaOfCircle(3), 28.274333882308138, "Exercise 41");
  assert(areaOfCircle(5), 78.53981633974483, "Exercise 41");
  assert(areaOfCircle(7), 153.93804002589985, "Exercise 41");
} catch {
  assert(undefined, 28.274333882308138, "Exercise 41");
}
addToDone("Exercise 41 is correct.");

try {
  assert(circumference(3), 18.84955592153876, "Exercise 42");
  assert(circumference(5), 31.41592653589793, "Exercise 42");
  assert(circumference(7), 43.982297150257104, "Exercise 42");
} catch {
  assert(undefined, 18.84955592153876, "Exercise 42");
}
addToDone("Exercise 42 is correct.");

try {
  assert(isVowel("a"), true, "Exercise 43");
  assert(isVowel("U"), true, "Exercise 43");
  assert(isVowel("banana"), false, "Exercise 43");
  assert(isVowel("Q"), false, "Exercise 43");
  assert(isVowel("y"), false, "Exercise 43");
} catch {
  assert(undefined, true, "Exercise 43");
}
addToDone("Exercise 43 is correct.");

try {
  assert(hasVowels("bAnAnA"), true, "Exercise 44");
  assert(hasVowels("ubuntu"), true, "Exercise 44");
  assert(hasVowels("QQQQ"), false, "Exercise 44");
  assert(hasVowels("wyrd"), false, "Exercise 44");
} catch {
  assert(undefined, true, "Exercise 44");
}
addToDone("Exercise 44 is correct.");

try {
  assert(countVowels("banana"), 3, "Exercise 45");
  assert(countVowels("ubuntu"), 3, "Exercise 45");
  assert(countVowels("mango"), 2, "Exercise 45");
  assert(countVowels("QQQQ"), 0, "Exercise 45");
  assert(countVowels("wyrd"), 0, "Exercise 45");
} catch {
  assert(undefined, 3, "Exercise 45");
}
addToDone("Exercise 45 is correct.");

try {
  assert(removeVowels("banana"), "bnn", "Exercise 46");
  assert(removeVowels("ubuntu"), "bnt", "Exercise 46");
  assert(removeVowels("mango"), "mng", "Exercise 46");
  assert(removeVowels("QQQQ"), "QQQQ", "Exercise 46");
} catch {
  assert(undefined, "bnn", "Exercise 46");
}
addToDone("Exercise 46 is correct.");

try {
  assert(startsWithVowel("ubuntu"), true, "Exercise 47");
  assert(startsWithVowel("banana"), false, "Exercise 47");
  assert(startsWithVowel("mango"), false, "Exercise 47");
} catch {
  assert(undefined, true, "Exercise 47");
}
addToDone("Exercise 47 is correct.");

try {
  assert(endsWithVowel("ubuntu"), true, "Exercise 48");
  assert(endsWithVowel("banana"), true, "Exercise 48");
  assert(endsWithVowel("mango"), true, "Exercise 48");
  assert(endsWithVowel("spinach"), false, "Exercise 48");
} catch {
  assert(undefined, true, "Exercise 48");
}
addToDone("Exercise 48 is correct.");

try {
  assert(startsAndEndsWithVowel("ubuntu"), true, "Exercise 49");
  assert(startsAndEndsWithVowel("banana"), false, "Exercise 49");
  assert(startsAndEndsWithVowel("mango"), false, "Exercise 49");
} catch {
  assert(undefined, true, "Exercise 49");
}
addToDone("Exercise 49 is correct.");

try {
  assert(first("ubuntu"), "u", "Exercise 50");
  assert(first([1, 2, 3]), 1, "Exercise 50");
  assert(first(["JS", "is", "awesome"]), "JS", "Exercise 50");
} catch {
  assert(undefined, "u", "Exercise 50");
}
addToDone("Exercise 50 is correct.");

try {
  assert(second("ubuntu"), "b", "Exercise 51");
  assert(second([1, 2, 3]), 2, "Exercise 51");
  assert(second(["JS", "is", "awesome"]), "is", "Exercise 51");
} catch {
  assert(undefined, "b", "Exercise 51");
}
addToDone("Exercise 51 is correct.");

try {
  assert(third("ubuntu"), "u", "Exercise 52");
  assert(third([1, 2, 3]), 3, "Exercise 52");
  assert(third(["JS", "is", "awesome"]), "awesome", "Exercise 52");
} catch {
  assert(undefined, "u", "Exercise 52");
}
addToDone("Exercise 52 is correct.");

try {
  assert(forth("ubuntu"), "n", "Exercise 53");
  assert(forth([1, 2, 3, 4]), 4, "Exercise 53");
  assert(forth(["JS", "is", "awesome", "right?"]), "right?", "Exercise 53");
} catch {
  assert(undefined, "n", "Exercise 53");
}
addToDone("Exercise 53 is correct.");

try {
  assert(last("ubuntu"), "u", "Exercise 54");
  assert(last([1, 2, 3, 4]), 4, "Exercise 54");
  assert(last(["JS", "is", "awesome"]), "awesome", "Exercise 54");
  assert(last(["kiwi", "mango", "guava"]), "guava", "Exercise 54");
} catch {
  assert(undefined, "u", "Exercise 54");
}
addToDone("Exercise 54 is correct.");

try {
  assert(secondToLast("ubuntu"), "t", "Exercise 55");
  assert(secondToLast([1, 2, 3, 4]), 3, "Exercise 55");
  assert(secondToLast(["JS", "is", "awesome"]), "is", "Exercise 55");
  assert(secondToLast(["kiwi", "mango", "guava"]), "mango", "Exercise 55");
} catch {
  assert(undefined, "t", "Exercise 55");
}
addToDone("Exercise 55 is correct.");

try {
  assert(thirdToLast("ubuntu"), "n", "Exercise 56");
  assert(thirdToLast([1, 2, 3, 4]), 2, "Exercise 56");
  assert(thirdToLast(["JS", "is", "awesome"]), "JS", "Exercise 56");
  assert(
    thirdToLast(["strawberry", "kiwi", "mango", "guava"]),
    "kiwi",
    "Exercise 56"
  );
} catch {
  assert(undefined, "n", "Exercise 56");
}
addToDone("Exercise 56 is correct.");

try {
  assert(firstAndSecond([1, 2, 3, 4]), [1, 2], "Exercise 57");
  assert(firstAndSecond(["JS", "is", "awesome"]), ["JS", "is"], "Exercise 57");
  assert(
    firstAndSecond(["strawberry", "kiwi", "mango", "guava"]),
    ["strawberry", "kiwi"],
    "Exercise 57"
  );
} catch {
  assert(undefined, [1, 2], "Exercise 57");
}
addToDone("Exercise 57 is correct.");

try {
  assert(firstAndLast([1, 2, 3, 4]), [1, 4], "Exercise 58");
  assert(
    firstAndLast(["JS", "is", "awesome"]),
    ["JS", "awesome"],
    "Exercise 58"
  );
  assert(
    firstAndLast(["strawberry", "kiwi", "mango", "guava"]),
    ["strawberry", "guava"],
    "Exercise 58"
  );
} catch {
  assert(undefined, [1, 4], "Exercise 58");
}
addToDone("Exercise 58 is correct.");

try {
  assert(firstToLast([1, 2, 3, 4]), [2, 3, 4, 1], "Exercise 59");
  assert(
    firstToLast(["JS", "is", "awesome"]),
    ["is", "awesome", "JS"],
    "Exercise 59"
  );
  assert(
    firstToLast(["strawberry", "kiwi", "mango", "guava"]),
    ["kiwi", "mango", "guava", "strawberry"],
    "Exercise 59"
  );
} catch {
  assert(undefined, [2, 3, 4, 1], "Exercise 59");
}
addToDone("Exercise 59 is correct.");

try {
  assert(sumAll([1, 2, 3, 4]), 10, "Exercise 60");
  assert(sumAll([3, 3, 3]), 9, "Exercise 60");
  assert(sumAll([0, 5, 6]), 11, "Exercise 60");
} catch {
  assert(undefined, 10, "Exercise 60");
}
addToDone("Exercise 60 is correct.");

try {
  assert(mean([1, 2, 3, 4]), 2.5, "Exercise 61");
  assert(mean([3, 3, 3]), 3, "Exercise 61");
  assert(mean([1, 5, 6]), 4, "Exercise 61");
} catch {
  assert(undefined, 2.5, "Exercise 61");
}
addToDone("Exercise 61 is correct.");

try {
  assert(median([1, 2, 3, 4, 5]), 3.0, "Exercise 62");
  assert(median([1, 2, 3]), 2.0, "Exercise 62");
  assert(median([1, 5, 6]), 5.0, "Exercise 62");
  assert(median([1, 2, 5, 6]), 3.5, "Exercise 62");
} catch {
  assert(undefined, 3.0, "Exercise 62");
}
addToDone("Exercise 62 is correct.");

try {
  assert(maxMinusMin([1, 2, 2, 8, 3, 4]), 7, "Exercise 63");
  assert(maxMinusMin([1, 1, 2, 3, 9]), 8, "Exercise 63");
  assert(maxMinusMin([2, 2, 3, 3, 3, 7]), 5, "Exercise 63");
} catch {
  assert(undefined, 7, "Exercise 63");
}
addToDone("Exercise 63 is correct.");

try {
  assert(productOfAll([1, 2, 3]), 6, "Exercise 64");
  assert(productOfAll([3, 4, 5]), 60, "Exercise 64");
  assert(productOfAll([2, 2, 3, 0]), 0, "Exercise 64");
} catch {
  assert(undefined, 6, "Exercise 64");
}
addToDone("Exercise 64 is correct.");

try {
  assert(getHighestNumber([1, 2, 3]), 3, "Exercise 65");
  assert(getHighestNumber([1, 5, 2, 3, 4]), 5, "Exercise 65");
  assert(getHighestNumber([5, 1, 2, 4, 9]), 9, "Exercise 65");
} catch {
  assert(undefined, 3, "Exercise 65");
}
addToDone("Exercise 65 is correct.");

try {
  assert(getSmallestNumber([1, 2, 3]), 1, "Exercise 66");
  assert(getSmallestNumber([3, 5, 9, 8, 1]), 1, "Exercise 66");
  assert(getSmallestNumber([8, 9, 4, 5, 7]), 4, "Exercise 66");
} catch {
  assert(undefined, 1, "Exercise 66");
}
addToDone("Exercise 66 is correct.");

try {
  assert(onlyOddNumbers([1, 2, 3]), [1, 3], "Exercise 67");
  assert(
    onlyOddNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]),
    [-5, -3, -1, 1, 3, 5],
    "Exercise 67"
  );
  assert(onlyOddNumbers([-4, -3, 1]), [-3, 1], "Exercise 67");
} catch {
  assert(undefined, [1, 3], "Exercise 67");
}
addToDone("Exercise 67 is correct.");

try {
  assert(onlyEvenNumbers([1, 2, 3]), [2], "Exercise 68");
  assert(
    onlyEvenNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]),
    [-4, -2, 2, 4],
    "Exercise 68"
  );
  assert(onlyEvenNumbers([-4, -3, 1]), [-4], "Exercise 68");
} catch {
  assert(undefined, [2], "Exercise 68");
}
addToDone("Exercise 68 is correct.");

try {
  assert(onlyPositiveNumbers([1, 2, 3]), [1, 2, 3], "Exercise 69");
  assert(
    onlyPositiveNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]),
    [1, 2, 3, 4, 5],
    "Exercise 69"
  );
  assert(onlyPositiveNumbers([-4, -3, 1]), [1], "Exercise 69");
} catch {
  assert(undefined, [1, 2, 3], "Exercise 69");
}
addToDone("Exercise 69 is correct.");

try {
  assert(onlyNegativeNumbers([1, 2, 3]), [], "Exercise 70");
  assert(
    onlyNegativeNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]),
    [-5, -4, -3, -2, -1],
    "Exercise 70"
  );
  assert(onlyNegativeNumbers([-4, -3, 1]), [-4, -3], "Exercise 70");
} catch {
  assert(undefined, [], "Exercise 70");
}
addToDone("Exercise 70 is correct.");

try {
  assert(hasEvens([1, 2, 3]), true, "Exercise 71");
  assert(hasEvens([2, 5, 6]), true, "Exercise 71");
  assert(hasEvens([3, 3, 3]), false, "Exercise 71");
  assert(hasEvens([]), false, "Exercise 71");
} catch {
  assert(undefined, true, "Exercise 71");
}
addToDone("Exercise 71 is correct.");

try {
  assert(countEvens([1, 2, 3]), 1, "Exercise 72");
  assert(countEvens([2, 5, 6]), 2, "Exercise 72");
  assert(countEvens([3, 3, 3]), 0, "Exercise 72");
  assert(countEvens([5, 6, 7, 8]), 2, "Exercise 72");
} catch {
  assert(undefined, 1, "Exercise 72");
}
addToDone("Exercise 72 is correct.");

try {
  assert(hasOdds([1, 2, 3]), true, "Exercise 73");
  assert(hasOdds([2, 5, 6]), true, "Exercise 73");
  assert(hasOdds([3, 3, 3]), true, "Exercise 73");
  assert(hasOdds([2, 4, 6]), false, "Exercise 73");
} catch {
  assert(undefined, true, "Exercise 73");
}
addToDone("Exercise 73 is correct.");

try {
  assert(countOdds([1, 2, 3]), 2, "Exercise 74");
  assert(countOdds([2, 5, 6]), 1, "Exercise 74");
  assert(countOdds([3, 3, 3]), 3, "Exercise 74");
  assert(countOdds([2, 4, 6]), 0, "Exercise 74");
} catch {
  assert(undefined, 2, "Exercise 74");
}
addToDone("Exercise 74 is correct.");

try {
  assert(countNegatives([1, -2, 3]), 1, "Exercise 75");
  assert(countNegatives([2, -5, -6]), 2, "Exercise 75");
  assert(countNegatives([3, 3, 3]), 0, "Exercise 75");
} catch {
  assert(undefined, 1, "Exercise 75");
}
addToDone("Exercise 75 is correct.");

try {
  assert(countPositives([1, -2, 3]), 2, "Exercise 76");
  assert(countPositives([2, -5, -6]), 1, "Exercise 76");
  assert(countPositives([3, 3, 3]), 3, "Exercise 76");
  assert(countPositives([-2, -1, -5]), 0, "Exercise 76");
} catch {
  assert(undefined, 2, "Exercise 76");
}
addToDone("Exercise 76 is correct.");

try {
  assert(onlyPositiveEvens([1, -2, 3]), [], "Exercise 77");
  assert(onlyPositiveEvens([2, -5, -6]), [2], "Exercise 77");
  assert(onlyPositiveEvens([3, 3, 4, 6]), [4, 6], "Exercise 77");
  assert(onlyPositiveEvens([2, 3, 4, -1, -5]), [2, 4], "Exercise 77");
} catch {
  assert(undefined, [], "Exercise 77");
}
addToDone("Exercise 77 is correct.");

try {
  assert(onlyPositiveOdds([1, -2, 3]), [1, 3], "Exercise 78");
  assert(onlyPositiveOdds([2, -5, -6]), [], "Exercise 78");
  assert(onlyPositiveOdds([3, 3, 4, 6]), [3, 3], "Exercise 78");
  assert(onlyPositiveOdds([2, 3, 4, -1, -5]), [3], "Exercise 78");
} catch {
  assert(undefined, [1, 3], "Exercise 78");
}
addToDone("Exercise 78 is correct.");

try {
  assert(onlyNegativeEvens([1, -2, 3]), [-2], "Exercise 79");
  assert(onlyNegativeEvens([2, -5, -6]), [-6], "Exercise 79");
  assert(onlyNegativeEvens([3, 3, 4, 6]), [], "Exercise 79");
  assert(onlyNegativeEvens([-2, 3, 4, -1, -4]), [-2, -4], "Exercise 79");
} catch {
  assert(undefined, [-2], "Exercise 79");
}
addToDone("Exercise 79 is correct.");

try {
  assert(onlyNegativeOdds([1, -2, 3]), [], "Exercise 80");
  assert(onlyNegativeOdds([2, -5, -6]), [-5], "Exercise 80");
  assert(onlyNegativeOdds([3, 3, 4, 6]), [], "Exercise 80");
  assert(onlyNegativeOdds([2, -3, 4, -1, -4]), [-3, -1], "Exercise 80");
} catch {
  assert(undefined, [], "Exercise 80");
}
addToDone("Exercise 80 is correct.");

try {
  assert(
    shortestString(["kiwi", "mango", "strawberry"]),
    "kiwi",
    "Exercise 81"
  );
  assert(shortestString(["hello", "everybody"]), "hello", "Exercise 81");
  assert(
    shortestString(["mary", "had", "a", "little", "lamb"]),
    "a",
    "Exercise 81"
  );
} catch {
  assert(undefined, "kiwi", "Exercise 81");
}
addToDone("Exercise 81 is correct.");

try {
  assert(
    longestString(["kiwi", "mango", "strawberry"]),
    "strawberry",
    "Exercise 82"
  );
  assert(longestString(["hello", "everybody"]), "everybody", "Exercise 82");
  assert(
    longestString(["mary", "had", "a", "little", "lamb"]),
    "little",
    "Exercise 82"
  );
} catch {
  assert(undefined, "strawberry", "Exercise 82");
}
addToDone("Exercise 82 is correct.");

try {
  assert(
    getUniqueValues(["ant", "ant", "mosquito", "mosquito", "ladybug"]),
    ["ant", "mosquito", "ladybug"],
    "Exercise 83"
  );
  assert(
    getUniqueValues(["b", "a", "n", "a", "n", "a", "s"]),
    ["b", "a", "n", "s"],
    "Exercise 83"
  );
  assert(
    getUniqueValues([
      "mary",
      "had",
      "a",
      "little",
      "lamb",
      "little",
      "lamb",
      "little",
      "lamb",
    ]),
    ["mary", "had", "a", "little", "lamb"],
    "Exercise 83"
  );
} catch {
  assert(undefined, ["ant", "mosquito", "ladybug"], "Exercise 83");
}
addToDone("Exercise 83 is correct.");

try {
  assert(elementsTimesTwo([1, 2, 3]), [2, 4, 6], "Exercise 84");
  assert(elementsTimesTwo([0, 0, 0]), [0, 0, 0], "Exercise 84");
  assert(elementsTimesTwo([5, 10, 15]), [10, 20, 30], "Exercise 84");
} catch {
  assert(undefined, [2, 4, 6], "Exercise 84");
}
addToDone("Exercise 84 is correct.");

try {
  assert(
    flatten([
      [1, 2],
      [3, 4],
      [5, 6],
    ]),
    [1, 2, 3, 4, 5, 6],
    "Exercise 85"
  );
  assert(
    flatten([
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ]),
    [1, 2, 3, 1, 2, 3, 1, 2, 3],
    "Exercise 85"
  );
  assert(
    flatten([
      ["tomato", "mango", "kiwi"],
      ["eggplant", "broccoli"],
    ]),
    ["tomato", "mango", "kiwi", "eggplant", "broccoli"],
    "Exercise 85"
  );
} catch {
  assert(undefined, [1, 2, 3, 4, 5, 6], "Exercise 85");
}
addToDone("Exercise 85 is correct.");

try {
  assert(addOneToArray([1, 2, 3]), [2, 3, 4], "Exercise 86");
  assert(addOneToArray([4, 4, 4]), [5, 5, 5], "Exercise 86");
  assert(addOneToArray([9, 10, 11]), [10, 11, 12], "Exercise 86");
} catch {
  assert(undefined, [2, 3, 4], "Exercise 86");
}
addToDone("Exercise 86 is correct.");

// Nos asserts de objetos, é mais provável que o erro seja a variável do objeto (como tukeyPaper)
// que não foi definida.
try {
  assert(
    getPaperTitle(tukeyPaper),
    "The Future of Data Analysis",
    "Exercise 87"
  );
  assert(
    getPaperTitle(thomasPaper),
    "A mathematical model of glutathione metabolism",
    "Exercise 87"
  );
} catch {
  assert(undefined, "The Future of Data Analysis", "Exercise 87");
}
addToDone("Exercise 87 is correct.");

try {
  assert(getYearPublished(tukeyPaper), 1962, "Exercise 88");
  assert(getYearPublished(thomasPaper), 2008, "Exercise 88");
} catch {
  assert(undefined, 1962, "Exercise 88");
}
addToDone("Exercise 88 is correct.");

try {
  assert(getPrice(book), 36.99, "Exercise 89");
} catch {
  assert(undefined, 36.99, "Exercise 89");
}
addToDone("Exercise 89 is correct.");

try {
  assert(getBookAuthor(book), "Frances Buontempo", "Exercise 90");
} catch {
  assert(undefined, "Frances Buontempo", "Exercise 90");
}
addToDone("Exercise 90 is correct.");

try {
  assert(getNumberOfBooks(books), 4, "Exercise 91");
} catch {
  assert(undefined, 4, "Exercise 91");
}
addToDone("Exercise 91 is correct.");

try {
  assert(totalOfBookPrices(books), 122.9, "Exercise 92");
} catch {
  assert(undefined, 122.9, "Exercise 92");
}
addToDone("Exercise 92 is correct.");

try {
  assert(getAverageBookPrice(books), 30.725, "Exercise 93");
} catch {
  assert(undefined, 30.725, "Exercise 93");
}
addToDone("Exercise 93 is correct.");

try {
  assert(
    highestPriceBook(books),
    {
      title: "The Visual Display of Quantitative Information",
      price: 38.0,
      author: "Edward Tufte",
    },
    "Exercise 94"
  );
} catch {
  assert(
    undefined,
    {
      title: "The Visual Display of Quantitative Information",
      price: 38.0,
      author: "Edward Tufte",
    },
    "Exercise 94"
  );
}
addToDone("Exercise 94 is correct");

try {
  assert(
    lowestPriceBook(books),
    {
      title: "Weapons of Math Destruction",
      author: "Cathy O'Neil",
      price: 17.44,
    },
    "Exercise 95"
  );
} catch {
  assert(
    undefined,
    {
      title: "Weapons of Math Destruction",
      author: "Cathy O'Neil",
      price: 17.44,
    },
    "Exercise 95"
  );
}
addToDone("Exercise 95 is correct.");

try {
  assert(getTaxRate(shoppingCart), 0.08, "Exercise 96");
} catch {
  assert(undefined, 0.08, "Exercise 96");
}
addToDone("Exercise 96 is correct");

try {
  assert(numberOfItemTypes(shoppingCart), 5, "Exercise 97");
} catch {
  assert(undefined, 5, "Exercise 97");
}
addToDone("Exercise 97 is correct.");

try {
  assert(totalNumberOfItems(shoppingCart), 17, "Exercise 98");
} catch {
  assert(undefined, 17, "Exercise 98");
}
addToDone("Exercise 98 is correct.");

try {
  assert(getAverageItemPrice(shoppingCart), 2.1420000000000003, "Exercise 99");
} catch {
  assert(undefined, 2.1420000000000003, "Exercise 99");
}
addToDone("Exercise 99 is correct.");

try {
  assert(
    getAverageSpentPerItem(shoppingCart),
    1.333529411764706,
    "Exercise 100"
  );
} catch {
  assert(undefined, 1.333529411764706, "Exercise 100");
}
addToDone("Exercise 100 is correct.");

try {
  assert(
    mostSpentOnItem(shoppingCart),
    {
      title: "chocolate",
      price: 0.75,
      quantity: 9,
    },
    "Exercise 101"
  );
} catch {
  assert(
    undefined,
    {
      title: "chocolate",
      price: 0.75,
      quantity: 9,
    },
    "Exercise 101"
  );
}
addToDone("Exercise 101 is correct.");
