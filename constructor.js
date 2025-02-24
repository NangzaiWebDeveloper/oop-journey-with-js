//Topics-03
//constructor কি???  কিভাবে লিখে???   কিভাবে কাজ করে???  

class person{
    //Constructor name should be Constructor;
    //Constructor execute automatically when object is created;
    //Constructor can take parameter;
    //Constructor method can't Return any result; (disAdvantage)
    constructor(){
        console.log("I am a constructor method")
    }
}
let personObj = new person() // this line is create Object from Class && Constructor execute automatically when object is created;





//In constructor how to pass Parameter
class person{
    constructor(num1, num2){
        let sum = num1 + num2;
        console.log(sum);
    }
}
new person(5, 6) //output: 11





//Here we can see, By Constructor Parameter how to change Class Property
// {
// ### 01: Create object from class & add number.
class person{ //This is class
    num1 = 20;
    num2 = 30;

    addTwoNumber(){ //Method or function
        return this.num1 + this.num2;
    }
}
const personInstance = new person() //create object from class
console.log(personInstance.addTwoNumber()); //Output: 50




//### 02: Change num1 & num2 value by Constructor method.
class person{
    num1 = 10;
    num2 = 15

    constructor(){
        this.num1 = 500; //modify value of num1
        this.num2 = 550; //modify value of num2
    }

    addTwoNum(){
        return this.num1+this.num2;
    }
}
let personInstance = new person()
console.log(personInstance.addTwoNum()) //Output: 1050



