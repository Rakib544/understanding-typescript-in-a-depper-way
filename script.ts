class Department {
  // private name:string;
  private subjects: string[] = [];

  constructor(private readonly id: number | string, private name: string) {
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department(${this.id}): ${this.name}`);
  }

  addSubjects(subjectName: string) {
    //   this.id = 67;
    this.subjects.push(subjectName);
  }

  showSubjects() {
    console.log(this.subjects);
  }
}

const computer = new Department(66, "computer");

computer.addSubjects("Data structure and algorithm");
computer.showSubjects();
computer.describe();
