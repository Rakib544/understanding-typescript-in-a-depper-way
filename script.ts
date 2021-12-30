// Practice with number, string and boolean

function calculateResult(
  number1: number,
  number2: number,
  greet: string,
  isLoggedIn: boolean
): string {
  if (isLoggedIn) {
    return `${greet} ${number1 + number2}`;
  } else {
    return "Not authorized to see the result";
  }
}

console.log(calculateResult(90, 89, "Your result is - ", false));
