"use strict"

//1.
//do {
    //let oddNumber = prompt("Please enter an odd number between 1 and 50");
    //{
        //if (oddNumber % 2 === 0){
          //  alert('The number you entered was even. Please try again.');
        //} else if('The number you entered is odd');
       // break;

   // }
//} while(true)

2.
let oddNumber = prompt("Please enter an odd number between 1 and 50");
for (let i = 1; i <= 50; i++){
    if (oddNumber == i){
        console.log('Skipping number'  + oddNumber);
        continue;
    }
    console.log('Hey there odd number' + i);
}


