/**
 * Rule 1 — Instance Method
 * Instance methods belong to the object.
    Inside an instance method → this refers to the instance (object)
*/
class product {
    price=10;
    
    method1(){
       console.log(this.price); //10
    }
}

let obj = new product();
obj.method1();

/**
 * Rule 2 — Static Method
 * Static methods belong to the class.
 * Inside a static method → this refers to the class
*/

class Product {
    static price = 20;
    static method() {
        console.log(this.price);//this.price → Product.price
    }
}
Product.method();//20

/**
 * Rule 3 — Constructor
Constructor runs when an object is created.
Inside constructor → this refers to the new instance being created
 */

class product3{

    constructor(price){
        this.price = price;//this → obj3 so obj3.price
    }
}

let obj3 = new product3(30); 
let obj4 = new product3(30); 
if(obj3==obj4){
    console.log("Pass")
}
else{
    console.log("fail")
}
console.log(obj3.price); //30


/**
 * Rule 4 — Static Fields
Static fields belong to the class, not the object.
Static field → accessed using class name or inside static method
 */

class product4{
    static price4=40;  

    static method4(){
        console.log(this.price4);
    }
}
console.log(product4.price4); //40
product4.method4(); //40

/**
 * Rule 5 — Private Fields
Private fields belong to the instance.
#privateField → accessible only inside instance methods
 */
class Product5 {
    #price = 50;
    method(){
        console.log(this.#price);//obj.#price not allowed 
        this.#method5();   // calling private method
    }           //Private methods can only be accessed inside the class.
                //Private methods must be called using "this"
                //Private methods can access private fields.

    #method5(){
        console.log(this.#price);
    }
    
}

let obj5= new Product5();
obj5.method();

/**
 * Rule 6 — Static Method Cannot Access Instance Fields
Static method cannot access instance fields directly
 */

class Product6 {
    price6 = 60;
    static method(){
        console.log(this.price6); //this belongs to Product, product dont have price, price belongs to obj so udefined
    }                            // Product6.price does not exisit
}


/**
 * Rule 7 — Instance Method CAN Access Static Fields
Instance methods CAN access static fields using class name
 */

class Product7 {
    static price7 = 70;
    method(){
        console.log(Product7.price7); //static field is for the class, so by using class we can get the value 
    }
}

let obj7= new Product7();
obj7.method(); // 70