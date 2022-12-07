"use strict"
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//2.


const person = [{
    name: 'luis',
    languages: ['java', 'scala', 'php'],
},
    {
        name: 'fernando',
        languages: ['java', 'php', 'sql'],
    },
    {
        name: 'justin',
        languages: ['html', 'css', 'javascript', 'php'],
    },
    // {
    //     name: 'zach',
    //     languages: ['javascript', 'bash'],
    // },
    // {
    //     name: 'ryan',
    //     languages: ['clojure', 'javascript'],
    // }
];
   let threeLanguages = person.filter(function(p){
   });
   console.log(person);

    //3.
const assigned = [{

    email: 'ryan@codeup.com',
},
    {

        email: 'luis@codeup.com',
    },
    {

        email: 'zach@codeup.com',
    },
    {

        email: 'fernando@codeup.com',
    },
    {

        email: 'justin@codeup.com',
    }
];


let eachEmail= assigned.map(function(a) {
});
console.log(assigned);

//4.


const totalOfYears = users.reduce((total, user) => total + user.yearsOfExperience,0);
const average = users.reduce((total, user) => total + user.yearsOfExperience, 0) / users.length;
console.log(totalOfYears );
console.log(average);


 //5.
const longestEmail = users.reduce((longEmail, user) => {
    if (user.email.length > longEmail.length) {
        return user.email;
    }
    return longEmail;
    }, "");
console.log(longestEmail);


//6.
const instructorRollCall = users.reduce((finalStr, user, index) => {
    if (index === users.length - 1) {
        return finalStr + `and ${user.name}.`;
    } else {
        return finalStr + `${user.name}, `;
    }
}, "Your instructors are: ");

console.log(instructorRollCall);
