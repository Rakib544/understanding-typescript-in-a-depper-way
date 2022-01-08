"use strict";
// Practice with number, string and boolean
// function calculateResult(
//   number1: number,
//   number2: number,
//   greet: string,
//   isLoggedIn: boolean
// ): string {
//   if (isLoggedIn) {
//     return `${greet} ${number1 + number2}`;
//   } else {
//     return "Not authorized to see the result";
//   }
// }
// console.log(calculateResult(90, 89, "Your result is - ", false));
// Practice with union data type
// function combineInputs(input1: number | string, input2: number | string) {
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     return input1 + input2;
//   } else {
//     return input1.toString() + input2.toString();
//   }
// }
// console.log(combineInputs(1, 2));
// console.log(combineInputs("hello", "world123"));
// type UserInfo = {
//   name: string;
//   email: string;
//   id: number | string;
// };
// const user1: UserInfo = {
//   name: "Rakib",
//   email: "md.rakib10122003@gmail.com",
//   id: 457100,
// };
// console.log(user1.id.toString());
// const addNumber = (num1: number, num2: number): number => {
//   return num1 + num2;
// };
// console.log(addNumber(2, 5));
// const names: string[] = ["Rakib", "Shehab", "Mamun", "Sakil"];
// const activeUsers: string[] = ["User"];
// activeUsers.push(...names);
// console.log(activeUsers);
// Practice with rest parameter
// const addNumbers = (...numbers: number[]): number => {
//   return numbers.reduce((sum, num) => {
//     return sum + num;
//   }, 0);
// };
// console.log(addNumbers(1, 2, 4, 6));
// const userInfo = {
//   name: "Rakib",
//   email: "md.rakib10122003@gmail.com",
// };
// const { name: username, email } = userInfo;
// console.log(username);
