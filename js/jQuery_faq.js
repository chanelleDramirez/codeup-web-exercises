"use strict"

$(document).ready(function() {
    $('#toggle-link').click(function(event) {
        event.preventDefault();
        $('dd').toggleClass('invisible');
    });
});


$("dt").click(function() {
    $(this).toggleClass("highlighter");
});

$("#btn-2").click(function() {
    $("ul").each(function () {
        $(this).children().last().toggleClass("yellow-bg");
    });
});

$("h3").click(function () {
    $(this).next().children().css("font-weight", "bold");
});

$("li").click(function() {
    $(this).parent().children().first().css("color", "blue");
});
