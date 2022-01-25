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

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  switch (animal.type) {
    case "bird":
      console.log(`Move with speed: ${animal.flyingSpeed}`);
      break;
    case "horse":
      console.log(`Move with speed: ${animal.runningSpeed}`);
  }
}

moveAnimal({ type: "horse", runningSpeed: 90 });

// Practice with type casting

// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;

userInputElement.value = "Hello world";

const fetchUserData = {
  name: "Rakib",
  id: 1,
  info: { title: "Student", institute: "Dhaka Polytechnic Institute" },
};

// console.log(fetchUserData?.info);
