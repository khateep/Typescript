//Type Script Assignments
// Day1
// Name: Mohamed Hamdy Imam Abdelazim
//1-	Create array that accept  number only
// with type annotation
let arr1;
arr1 = [1, 2, 3, 4];
let arr1_1;
arr1_1 = [1, 2, 3, 4];
// with generics
let arr1_3;
arr1_3 = [1, 2, 3, 4];
////////////////////////////////////////////
//2-	Create array that accept string and number only and print all items
// with union
let arr2;
arr2 = [1, 2, 3, "s", "a"];
let arr2_2;
arr2_2 = [1, 2, 3, "s", "a"];
// with generics
let arr2_3;
arr2_3 = ["s", 1, 2, 3, "a"];
// with tuple with index, number of array and datatype restriction
let tuple2;
tuple2 = ["s", 1];
// to print
arr2_3.forEach((item) => console.log(item));
////////////////////////////////////////////
//3-	Create a variable that accept number and Boolean only
//with union
let z;
z = 3;
z = true;
let z_2;
z_2 = 10;
z_2 = false;
////////////////////////////////////////////
//4-	Create function with two parameter try
//      to call it without any parameter “handling”
// using defult parameter
function Add(a = 0, b = 0) {
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
    id;
    username;
    email;
    address;
    geo;
    constructor(id, username, email, address, geo) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.address = address;
        this.geo = geo;
    }
    get userName() {
        return this.username;
    }
    set userName(value) {
        this.username = value;
    }
    Display() {
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
    constructor(id, username, email, address, geo) {
        super(id, username, email, address, geo);
    }
    Display() {
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
