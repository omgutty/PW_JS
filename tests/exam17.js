//Classes Inheritance Static Private Methods in JS
/**
 * 1. Create a Class

Create a class Person with properties name and age.
Create an object and print the values.

Example Output:

Name: John
Age: 25
 */

class Person{ 
   constructor(name, age){
    this.name=name;
    this.age= age;
   }
}
const obj= new Person("Om",35);
console.log("Name: "+obj.name);
console.log("Age: "+obj.age);

class Person2{

    setdetails(name, age){
        this.name=name;
        this.age=age;
    }
}

const obj2= new Person2;
obj2.setdetails("Om",35);
console.log("Name: "+obj2.name)
console.log("Age: "+obj2.age);

/////////////////////////////////////////

/**
 * 2️⃣ Constructor Example

Create a class Car with a constructor that takes brand and model.
Print the car details.

Example Output:

Brand: Toyota
Model: Fortuner
 */

class Car{
    constructor(brand, model){
        this.brand=brand;
        this.model=model;
    }
}
const obj3= new Car("Toyoto","fortuner");
console.log("Brand: "+obj3.brand);
console.log("Model: "+obj3.model);
/////////////////////////////////////////////

/**
 * 3️⃣ Add a Method

Create a class Student with properties name and marks.
Add a method display() to print student details.
 */

class Student{
    constructor(name,marks){
        this.name=name;
        this.marks=marks;
    }

    display(){
        console.log("Student name: "+ this.name);
        console.log("Marks of the student: "+this.marks);
    }
}

const obj4=new Student("Tanmayi",100);
obj4.display();

//////////////////////////////////////////

/**
 * 4️⃣ Multiple Objects

Create a class Employee with name and salary.
Create 3 objects and print their details.
 */

class Employee{
    constructor(employe, salary){
        this.employe=employe;
        this.salary=salary;
    }
    getdetails(){
        console.log("Name : "+this.employe);
        console.log("salary :"+this.salary);
    }
}

const obj5= new Employee("Om",1);
const obj6= new Employee("kittu",2);
const obj7= new Employee("Tanmayi",3);

obj5.getdetails();
obj6.getdetails();
obj7.getdetails();

////////////////////////////////////

/**
 * 5️⃣ Static Method

Create a class MathUtils with a static method add(a,b) that returns the sum.

Example:

MathUtils.add(5,10)

Output:

15
 * 
 */

class MathUtils{
    static add(a,b){
        return a+b;
    }
}
console.log(MathUtils.add(5,6));

/////////////////////////////////////

/**
 * 6️⃣ Static Property
Create a class Company with a static property companyName = "Tech Corp"
Print it using the class.
 */

class Company{
    static companyName= "Tech Corp"
}

console.log(Company.companyName);

/////////////////////////////////////
/**
 * 
 * 7️⃣ Private Field
 * 
Create a class BankAccount with a private field #balance.
Add methods deposit() and getBalance().
Example:
Balance: 5000
 */

class BankAccount{
    #balance;
    deposit(balance){
        this.#balance=balance;
    }
    getBalance(){
        console.log("Balance :"+this.#balance);
    }
}
const obj8= new BankAccount();
obj8.deposit(500);
obj8.getBalance();

////////////////////////////////
/**
 * 8️⃣ Private Method
Create a class User with a private method #generatePassword()
Call it inside a public method createAccount().
 */

class User2{
    #generatePassword(){
        console.log("generate password");
    }
    createAccount(){
       this.#generatePassword();
    }
}
const obj9= new User2();
obj9.createAccount();
///////////////////////////////////////
/**
 * 9️⃣ Simple Inheritance
Create a class Animal with method sound().
Create a class Dog that extends Animal.
Call the method from the child class.
Output:
Animal makes sound
 */

class Animal {
    sound(){
        console.log("Animal makes sound");
    }
}
class Dog extends Animal{
    dogsound(){
        super.sound();
    }
}
let obj10= new Dog();
obj10.dogsound();

/////////////////////////////////////////
/**
 * 🔟 Constructor Inheritance
Create a class Person with constructor (name).
Create a class Teacher that extends Person and prints teacher name.
 */

class Person4{
    constructor (name){
        this.name=name;
    }
}

class Teacher extends Person4{
     constructor(name) {
        super(name); // passes name to Person's constructor
    }

    teachername() {
        console.log("Teacher Name: " + this.name);
    }
}

const obj11 = new Teacher("Mohan");
obj11.teachername();

//////////////////////////////////

/**
 * 1️⃣1️⃣ Method Overriding
Create class Vehicle with method start().
Create class Bike that overrides start().
Output:
Bike started
 */

class Vehicle2{
    start(){
        console.log("vehicle2 start method ");
    }
}
class Bike extends Vehicle2 {
      start(){
        console.log("Bike started ");
    }
 }
let obj12= new Bike();
obj12.start();


/////////////////////////////////////////////
/**
 * 1️⃣2️⃣ super Keyword
Create a class Shape with method draw().
Create class Circle that calls the parent method using super.draw().
 */

class Shape{

    draw(){
        console.log("draw mehthod from shape class ")
    }
}

class Circl extends Shape{
    drawmethod(){
        super.draw();
    }
}

const obj13= new Circl();
obj13.drawmethod();

////////////////////////////////////////////////
/**
 * 1️⃣3️⃣ Static Counter
Create a class Counter with static variable count.
Increase count every time an object is created.
Example Output:
Total objects: 3
 */

class Counter{
    static count;
    

}











