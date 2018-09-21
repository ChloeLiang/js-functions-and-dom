// Exercise 1: Flattening Arrays
// Write a function to flatten an array by 1 level, i.e. given an array, your function should return an array whose elements are those of the given array and its subarrays, but ignore any subarrays of subarrays. See below for the example, and complete the flatten() function.
var testArray = [1, [2, 3], [4, [5], 6]];

var flatten = function (arr) {
  var reducer = function (arrFlatten, currentValue) {
    return arrFlatten.concat(currentValue);
  };

  return arr.reduce(reducer, []);
}

var result = flatten(testArray);
console.log(result); // Should print out [1, 2, 3, 4, [5], 6];

// Bonus: Flatten the array really hard. No matter how many sub-arrays it has, your function should return an array with no sub-arrays. E.g. flattenDeep(testArray) should return [1, 2, 3, 4, 5, 6].
// Hint: You will have to find a way to test whether an array has any sub-arrays or not. If it does, your flatten function above should be useful.


// Exercise 2: Debugging
// You'd expect the function below to greet Alan. Why doesn't it? Explain and debug.
var person1 = { name: "Alan" };
var person2 = { name: "Amy" };
var greet = function (person) {
  if (person === { name: "Alan" }) {
    console.log("Hello, Alan!");
  } else {
    console.log("Hi, Amy!");
  };
};
greet(person1);

// Explanation:
/**
 * { name: "Alan" } is a new object, and occupies a new memory location.
 * "===" compares objects by reference.
 * The condition is true only if person is pointing to the same memory location.
 */
// Write your correct code below.
var greetAgain = function (person) {
  if (person.name === "Alan") {
    console.log("Hello, Alan");
  } else {
    console.log("Hi, Amy!");
  }
};
greetAgain(person1);

// DOM Manipulation Exercises: Write your code below for the next section.

/**
 * Exercise 3:
 * There are 3 divs on index.html, the first being the one on the left, and the third on the right.
 * After every 10 seconds, change the color of the first div to a random color.
 */
var firstDiv = document.getElementById('one');

setInterval(function () {
  var getRandomNumber0to255 = function () {
    return random = Math.floor(Math.random() * 256);
  };
  var red = getRandomNumber0to255();
  var green = getRandomNumber0to255();
  var blue = getRandomNumber0to255();

  firstDiv.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}, 10000);

/**
 * Exercise 4:
 * Make the 2nd div disappear after 5 seconds.
 * Bonus: Make it reappear after 3 further seconds.
 * Bonus: Make it so that when it disappears, it does not cause the other div elements to move.
 * Hint: There are at least 2 ways to make something effectively invisible - changing
 * its display setting, and changing its visibility setting. They both have different side effects.
 */
var secondDiv = document.getElementById('two');
secondDiv.style.visibility = 'visible';

var makeSecondDivDisappear = function () {
  secondDiv.style.visibility = 'hidden';
  setTimeout(makeSecondDivAppear, 3000);
};

var makeSecondDivAppear = function () {
  secondDiv.style.visibility = 'visible';
};

setTimeout(makeSecondDivDisappear, 5000);

/**
 * Exercise 5:
 * The third div should contain a number that increments by 1 every 0.5 seconds.
 * Bonus: Make it so that the number does not increment as long as the 2nd div is not displayed/visible.
 */
var number = 0;
var thirdDiv = document.getElementById('three');

var increaseNumberByOne = function () {
  if (secondDiv.style.visibility === 'visible') {
    number++;
    thirdDiv.innerHTML = number;
  }
};

setInterval(increaseNumberByOne, 500);

/**
 * Exercise 6:
 * There is an unordered list with some elements.
 * Make the even-numbered list elements turn red 4 seconds after the document loads.
 * The list elements with a class of simple should turn blue 6 seconds after the document loads.
 */
var listItems = document.querySelectorAll('li');

var changeColor = function (item, color) {
  item.style.color = color;
};

setTimeout(function () {
  var i;

  for (i = 1; i < listItems.length; i += 2) {
    changeColor(listItems[i], 'red');
  }
}, 4000);

setTimeout(function () {
  var i;

  for (i = 0; i < listItems.length; i++) {
    if (listItems[i].classList.contains('simple')) {
      changeColor(listItems[i], 'blue');
    }
  }
}, 6000);
