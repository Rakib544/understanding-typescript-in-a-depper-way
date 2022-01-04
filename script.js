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
function combineInputs(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
console.log(combineInputs(1, 2));
console.log(combineInputs("hello", "world"));
