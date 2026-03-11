

class car{

    start(){
        console.log("car: start the car ");
    }

    
    stop(){
        console.log("car: stop the car ");
    }

    batteryon(){
        console.log("car : battery is on ");
    }
    
    horn(){
        console.log("car: Horn the car ");
    }
}


class bmw extends car{
    
    start(){
        console.log("BMW: start the car ");
    }

    
    autostart(){
         super.batteryon();
        console.log("BWM : Auto start the car ");
    }
}

export{car,bmw}