//Topics-06
//What is Inheritance? & how to work?
//Inheritance- উত্তরাধিকার।
//extends- প্রসারিত করা, বিস্তার করা।

class father{
    num1 = 10;
    num2 = 20;
    addNum(){
        return this.num1 + this.num2;
    }
}

class son extends father{

}

//son তার বাবার সবকিছু পেয়েগেছে মানে এই না যে বাবা অচল হয়েগেছে। father ও object তৈরি করে access করতে পারে।
let sonObj = new son()
console.log(sonObj.addNum());



