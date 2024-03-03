//Type Script Assignments
// Day1
// Name: Mohamed Hamdy Imam Abdelazim
//1-	Create array that accept  number only
// with type annotation
let arr1: number[];
arr1 = [1, 2, 3, 4];
// type alias name
type numOnly = number;
let arr1_1: numOnly[];
arr1_1 = [1, 2, 3, 4];
// with generics
let arr1_3: Array<number>;
arr1_3 = [1, 2, 3, 4];
////////////////////////////////////////////

//2-	Create array that accept string and number only and print all items
// with union
let arr2: (string | number)[];
arr2 = [1, 2, 3, "s", "a"];
// type alias name
type stringNum = string | number;
let arr2_2: stringNum[];
arr2_2 = [1, 2, 3, "s", "a"];
// with generics
let arr2_3: Array<string | number>;
arr2_3 = ["s", 1, 2, 3, "a"];
// with tuple with index, number of array and datatype restriction
let tuple2: [string, number];
tuple2 = ["s", 1];
// to print
arr2_3.forEach((item) => console.log(item));
////////////////////////////////////////////

//3-	Create a variable that accept number and Boolean only
//with union
let z: number | boolean;
z = 3;
z = true;
// with type alias name
type numBoolean = number | boolean;
let z_2: numBoolean;
z_2 = 10;
z_2 = false;
////////////////////////////////////////////

//4-	Create function with two parameter try
//      to call it without any parameter “handling”
// using defult parameter
function Add(a: number = 0, b: number = 0): number {
  console.log(a + b);

  return a + b;
}
Add();
Add(11, 22);
////////////////////////////////////////////

//5- 5-	Create class Employee implement IEmployee
// {"id": 1,"name": "Leanne Graham","username": "Bret",
//"email": "Sincere@april.biz","
//address": {"street": "Kulas Light","suite": "Apt. 556",
//"city": "Gwenborough","zipcode": "92998-3874",
//"geo": {"lat": "-37.3159","lng": "81.1496"}}
//a.	Username private b.	Address public

class Employee {
  constructor(
    public id: number,
    private username: string,
    public email: string,
    public address: string,
    public geo: string
  ) {}
  get userName(): string {
    return this.username;
  }
  set userName(value: string) {
    this.username = value;
  }
  Display(): void {
    console.log(this.address);
  }
}
var e1 = new Employee(1, "Moh1234", "h@gmail.com", "Cairo", "123,321");
console.log(e1);
e1.userName = "ahmed_123";
console.log(e1);
e1.Display();
////////////////////////////////////////////

//6-	Create class manager inherit from employee class and
//Create a function to view employee address
class Manager extends Employee {
  constructor(
    id: number,
    username: string,
    email: string,
    address: string,
    geo: string
  ) {
    super(id, username, email, address, geo);
  }
  Display(): void {
    console.log(this.address);
  }
}

var m1 = new Manager(0, "manager123", "manag@gmail.com", "BNS", "984,324");
console.log(m1);
m1.Display();
// I used private access modifier in "username" in Employee (parent class)
// and shows no errors in calling it in Manager (child class)
////////////////////////////////////////////

//7-	Implement the following diagram

var x = 10;
console.log(x);
let y = 20;
console.log(y);
var num = 10;
var nam = "ali"; //type interfernece
