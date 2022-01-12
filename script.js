"use strict";
// Practice with intersection type
var user5 = {
    name: "Rakib",
    privilege: ["practice"],
    isLogin: true,
};
var number10 = 10;
function showEmployeeInfo(emp) {
    console.log("Name is: " + emp.name);
    if ("privilege" in emp) {
        console.log("Privileges are : " + emp.privilege);
    }
    if ("isLogin" in emp) {
        console.log("Is loggedIn: " + emp.isLogin);
    }
}
showEmployeeInfo(user5);
function moveAnimal(animal) {
    switch (animal.type) {
        case "bird":
            console.log("Move with speed: " + animal.flyingSpeed);
            break;
        case "horse":
            console.log("Move with speed: " + animal.runningSpeed);
    }
}
moveAnimal({ type: "bird", flyingSpeed: 90 });
