

class pvt{

    #price;
    static price2;

    constructor(price,newprice){
        this.#price=price;
        pvt.price2=newprice;
    }

    static method1(){
        console.log("static method 1" );
        console.log("static method with static field new price: "+this.price2);
        console.log("static method with static field new price : "+ pvt.price2);

       // console.log("static method with private price: "+this.#price);
        //console.log(`static method with private price is : ${this.#price}`);
       
    }

    method2(){
        console.log("normal method");
        console.log("normal method private price is : "+this.#price);
        this.#privatemethod();
      
    }

    #privatemethod (){
        console.log("private method ");
        console.log(" private method private price is  : "+this.#price);
    }

}

// let obj= new pvt(10,20);
// obj.method2();
// pvt.method1();

//exporting above class 

export{pvt}