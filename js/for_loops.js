"use strict"
//2.
//function showMultiplicationTable(num){
    //for (var i = 1;  i <= 10; i++) {
       // console.log(num + ' x ' + i + ' = ' + (num * i))
    //}
//}
//showMultiplicationTable(7)
//showMultiplicationTable(13)


//3.
//function random() {
    //for (var i = 20; i <= 30; i++) {
        //if (i % 2 == 0) {
            //console.log(' Even numbers only ' + i );
        //}
            //else {
           // console.log(' Odd numbers only '  + i  );
       // }
   // }
//}
//random('Even numbers only') + ('Odd numbers only')


4.
//function pyramidNumbers(){
    //for (let x = 1; x < 10; x++) {
        //console.log(Array(x+1).join(x))
    //}
//}

//pyramidNumbers()

5.
function byFive(num) {
    for ( var i = 100; i >= 1; i--) {
        if (i % 5 == 0)
            console.log(num + i )
    }
}
byFive(0)
