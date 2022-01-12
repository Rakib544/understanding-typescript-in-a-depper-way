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

interface Greetable {
  name: string;

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

const user1 = new Person("Rakib");
user1.greet("Hello");
