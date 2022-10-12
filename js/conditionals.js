"use strict";

/* ########################################################################## */

/**
 * TODO: 1
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(colorName) {
    colorName = colorName.toLowerCase();
    if (colorName === 'blue') {
        return "blue is the color of the sky";
    } else if (colorName === "red") {
        return "Strawberries are red";
    } else if (colorName === "purple") {
        return "purple is the color of royalty";
    } else {
        return 'Color is not acceptable at this time';
    }
}

console.log(analyzeColor("blue"));
console.log(analyzeColor("red"));
console.log(analyzeColor("purple"));
console.log(analyzeColor("cyan"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO: 2
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));


/**
 * TODO: 3
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColorswitch(colorName) {
    colorName = colorName.toLowerCase();
    switch (colorName) {
        case 'blue':
            return "blue is the color of the sky";

        case 'red':
            return "Strawberries are red";

        default:
            return "Only acceptable colors are:('blue' and 'red')"

    }

}


/**
 * TODO: 4
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

let colorName = prompt("The American flag has three colors. White is one. Can you name another?");
alert(analyzeColor(colorName));
function analyzeColor(colorName) {
    colorName = colorName.toLowerCase();
    if (colorName === 'blue') {
        return "blue is the color of the sky";
    } else if (colorName === "red") {
        return "Strawberries are red";
    } else if (colorName === "purple") {
        return "purple is the color of royalty";
    } else {
        return 'Color is not acceptable at this time';
    }
}

console.log(analyzeColor("blue"));
console.log(analyzeColor("red"));
console.log(analyzeColor(randomColor));


/* ########################################################################## */

/**
 * TODO: 5
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, totalAmount) {
    if (luckyNumber === 1 ) {
        return totalAmount * .9

    } else if (luckyNumber === 2 ) {
        return totalAmount * .75

    } else if (luckyNumber === 3) {
        return totalAmount * .65

    } else if (luckyNumber === 4) {
        return totalAmount * .50

    } else if (luckyNumber === 5) {
        return totalAmount * 0

    } else {
        return totalAmount
    }
}

console.log(calculateTotal(0, 100))
console.log(calculateTotal(1, 100))
console.log(calculateTotal(2, 100))
console.log(calculateTotal(3, 100))
console.log(calculateTotal(4, 100))
console.log(calculateTotal(5, 100))


/**
 * TODO: 6
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
    //Generate a random number between 0 and 6
    var luckyNumber = Math.floor(Math.random() * 6);
let customer = prompt("What is the total bill amount?")

function calculateTotal(luckyNumber, customer);
alert("lucky number is" + "price before discount" + "price with discount"
    + calculateTotal(luckyNumber, customer));


     /**
      * TODO: 7
      * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
      * number, then use 3 separate alerts to tell the user:
      *
      * - whether the number is even or odd
      * - what the number plus 100 is
      * - if the number is negative or positive
      *
      * Do *NOT* display any of the above information
     * if the user enters a value that is not of the number data type.
      * Instead, use an alert to inform them of the incorrect input data type.
     *
     *
      * Can you refactor your code to use functions?
      * HINT: The way we prompt for a value could be improved
      */

     //let confirm = confirm('Would you like to enter a number?');

    // let Ok = prompt('please enter the number at this time.');

     //alert("The number entered is an even number" || "The number entered is an odd number");

    // alert("Number entered += 100 ");

    //alert("The result is negative || positive number");

    // alert("If value entered is anything other than a number, inform user only numbers will be accepted at this time.");

     function confirm('Would you like to enter a number?');

let Ok = prompt('please enter the number at this time.');

alert("The number entered is an even number" || "The number entered is an odd number");

alert("Number entered += 100 ");

alert("The result is negative || positive number");

alert("If value entered is anything other than a number, inform user only numbers will be accepted at this time.");
