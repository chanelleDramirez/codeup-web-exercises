"use strict"
// $(function() {
//   $("h1").click(function(){
//       $(this).css("background", "orange");
//   });
//
//   $("p").dblclick(function() {
//       $(this).css("font-size", "18px");
//
//   });
//
//   $("li").hover(function(){
//       $(this).css("color", "red");
//   }, function () {
//       $(this).css("color", "black");
//   });
// });

$(function() {
    $("#button").keyup(function(event){
        console.log(event.keyCode);
        const arrayOfCheatCode = ["UpArrow", "UpArrow", "DownArrow", "DownArrow", "LeftArrow", "RightArrow", "LeftArrow", "RightArrow", "ButtonB", "ButtonA", "Button Enter"]
        $("#Button").keyup( handler(eventObject) )
    });
    $()

});