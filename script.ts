// Practice with intersection type

type Admin = {
  name: string;
  privilege: string[];
};

type Employee = {
  name: string;
  isLogin: boolean;
};

type User = Admin & Employee;

const user5: User = {
  name: "Rakib",
  privilege: ["practice"],
  isLogin: true,
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable | Numeric;

const number10: Universal = 10;

type EmployeeCombine = Admin | Employee;

function showEmployeeInfo(emp: EmployeeCombine) {
  console.log(`Name is: ${emp.name}`);
  if ("privilege" in emp) {
    console.log(`Privileges are : ${emp.privilege}`);
  }

  if ("isLogin" in emp) {
    console.log(`Is loggedIn: ${emp.isLogin}`);
  }
}

showEmployeeInfo(user5);
