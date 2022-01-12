interface Person {
  name: string;
  age: number;

  greet(speech: string): void;
}

const rakib: Person = {
  name: "Rakib",
  age: 21,
  greet(speech: string) {
    console.log(`${speech} ${this.name}`);
  },
};

rakib.greet("Hello");
