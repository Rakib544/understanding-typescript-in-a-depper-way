// interface Person {
//   name: string;
//   age: number;

//   greet(speech: string): void;
// }

// const rakib: Person = {
//   name: "Rakib",
//   age: 21,
//   greet(speech: string) {
//     console.log(`${speech} ${this.name}`);
//   },
// };

// rakib.greet("Hello");

interface Named {
  readonly name: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}

const user1: Greetable = new Person("Rakib");
user1.greet("Hello");

// // How to define function structure using interface

// interface AddFunction {
//   (number1: number, number2: number): number;
// }

// const addNumber: AddFunction = (num1: number, num2: number) => {
//   return num1 + num2;
// };
