class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: ${this.name}`);
  }
}

const business = new Department("business");

business.describe();

const businessCopy = { name: "Computer", describe: business.describe };

businessCopy.describe();
