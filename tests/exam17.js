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

//////////////////////////////////////
/**
 * 7️⃣ Private Field

Create a class BankAccount with a private field #balance.
Add methods deposit() and getBalance().

Example:

Balance: 5000
 */
