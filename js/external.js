"use strict";

console.log("Hello from external JavaScript!");

alert("Welcome to My Website");

let userColor = prompt("What is your favorite color?");

alert("Wow you like " + userColor + "? I like " + userColor + " too!");

//3.1

let rentalPrice =parseFloat(prompt("How much does it cost to rent a movie?"));
let littleMermaid = parseFloat(prompt("How many days were you going to rent The Little Mermaid for?"));
let BrotherBear = parseFloat(prompt("How many days were you going to rent Brother Bear for?"));
let Hercules = parseFloat(prompt("How many days were you going to rent Hercules for?"));
alert("You final total is $" + (littleMermaid + BrotherBear + Hercules) * rentalPrice);

// 3.2
let googleRate = parseFloat(prompt("How much does google pay per hour?"));
let googleHours = parseFloat(prompt("How many hours did you work for google this week?"));
let amazonRate = parseFloat(prompt("How much does amazon pay per hour?"));
let amazonHours = parseFloat(prompt("How many hours did you work for amazon this week?"));
let facebookRate = parseFloat(prompt("How much does facebook pay per hour?"));
let facebookHours = parseFloat(prompt("How many hours did you work for facebook this week?"));

alert("Your gross take home pay for this week is $" + ((googleRate * googleHours) + (amazonRate * amazonHours) + (facebookRate * facebookHours)));

// 3.3

//let hasRoomInSchedule = confirm("Hey, do you have the availability to take a class at 8 AM?");
// console.log(hasRoomInSchedule)
//let hasRoomInSchedule = !confirm("Is underwater basket weaving full?");
//console.log(classHasRoom);

//alert("Student can register for underwater basket weaving: " + confirm("Hey, do you have the availability to take  a class at 8 AM?") & !confirm("Is underwater basket weaving full?")));

// 3.4
//let isPremiumMember = confirm("Do you have your Kroger card?");
//let numberOfItemsInCart = parseFloat(prompt("How many items are in your cart?"));
//let offerStillValid = confirm("Is your offer still valid?");

//alert("Customer can have discount: " + (offerStillValid && (isPremiumMember || numberOfItemsinCart > 2));


