"use strict"

$(document).ready(function() {
    $('#toggle-link').click(function(event) {
        event.preventDefault();
        $('dd').toggleClass('invisible');
    });
});
