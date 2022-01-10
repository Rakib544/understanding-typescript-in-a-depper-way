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

// super(); when you use your own constructor which is inherit from another class you have to use super() keyword. And this super() calls the main constructor.

class ITDepartment extends Department {
  constructor(id: number | string, name: string, public admins: string[]) {
    super(id, name);
  }
}

const computer = new ITDepartment(66, "computer", ["sakil"]);

computer.addSubjects("Data structure and algorithm");
computer.showSubjects();
computer.describe();

console.log(computer);

class AccountingDepartment extends Department {
  constructor(id: number | string, name: string, public reports: string[]) {
    super(id, name);
  }

  addReport(report: string) {
    this.reports.push(report);
  }

  getReports() {
    console.log(`reports: ${this.reports}`);
  }
}

const accounting = new AccountingDepartment(88, "Accounting", []);

accounting.addReport("Hello this is report");
accounting.getReports();
accounting.addSubjects("Business Organization and communication");
accounting.showSubjects();
