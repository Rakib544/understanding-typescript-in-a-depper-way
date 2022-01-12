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
