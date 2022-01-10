class Department {
  // private name:string;
  protected subjects: string[] = [];

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
computer.addSubjects("Computer");
computer.showSubjects();
computer.describe();

console.log(computer);

class AccountingDepartment extends Department {
  private lastReports: string;

  get mostRecentReport() {
    if (this.lastReports) {
      return this.lastReports;
    }

    throw new Error("No report found. ");
  }

  set mostRecentReport(value: string) {
    // console.log({ value });
    if (value) {
      this.addReport(value);
      return;
    }
    throw new Error("Please pass in a valid value");
  }

  constructor(id: number | string, name: string, public reports: string[]) {
    super(id, name);
    this.lastReports = reports[0];
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReports = report;
  }

  getReports() {
    console.log(`reports: ${this.reports}`);
  }

  // overriding addSubjects() method.
  addSubjects(subjectName: string): void {
    if (subjectName === "Computer") {
      return;
    }

    this.subjects.push(subjectName);
  }
}

const accounting = new AccountingDepartment(88, "Accounting", []);

// console.log(accounting.mostRecentReport);

accounting.addReport("Hello this is report");
accounting.addReport("Hello this is report1");
accounting.getReports();
accounting.addSubjects("Computer");
accounting.addSubjects("Business Organization and communications");
accounting.showSubjects();
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = "Test";
accounting.getReports();
