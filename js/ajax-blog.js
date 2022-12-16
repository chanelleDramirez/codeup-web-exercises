"use strict";


(function(){
    $.ajax("../data/blog.json").done(function(data) {
        console.log(data);
        let list = data;
        for (let i = 0; i < list.length; i++) {
            let blogList = `<h3>${list[i].title}</h3>
             <p>${list[i].content}</p>
             <p>${list[i].date}</p>
             <p class="categories">${list[i].categories.join(',')}</p>`
            $(`#posts`).append(blogList)
        }
    })
})();








