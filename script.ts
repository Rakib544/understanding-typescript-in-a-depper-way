class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

const newUser = new Department("Rakib");
console.log(newUser);
