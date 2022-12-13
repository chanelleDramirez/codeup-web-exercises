"use strict";

(() => {
    fetch( {headers: {'Authorization': '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'}})

    fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach( "sb-son", "deramusWyatt", "Jonathanvra"); {
                // do something with each username
                console.log(users);
            }
        })
        .catch(error => console.error(error));



}) ();

