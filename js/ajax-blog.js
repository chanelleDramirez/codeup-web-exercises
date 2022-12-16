"use strict";

// $(function() {
//     $.get('/blog.json').done(function(data) {
//
//         data.while(function(post){
//
//         }
//             console.log();
//             i++;
//
// });

$(function(){
    $.get("data/blog.json").append(content,function(data){

    })
    console.log(data.title);
    console.log(data.content);
    console.log(data.categories);
    console.log(data.date);
})