"use strict";
var rakib = {
    name: "Rakib",
    age: 21,
    greet: function (speech) {
        console.log(speech + " " + this.name);
    },
};
rakib.greet("Hello");
