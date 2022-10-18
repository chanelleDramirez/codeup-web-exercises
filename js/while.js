"use strict"

var allCones = Math.floor(Math.random() * 50) + 50;

do {

    var conesToBuy = Math.floor(Math.random() * 5) + 1;

    if((allCones - conesToBuy) < 0){

        console.log("Cannot sell you " + conesToBuy + allCones + "...");
    }else{
    console.log("# of cones before purchase:" + allCones);
    allCones = conesToBuy;
    console.log(conesToBuy + "cones sold...");
    }

}while(allCones > 0);
