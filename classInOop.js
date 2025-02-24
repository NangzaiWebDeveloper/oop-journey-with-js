//Topics-01
//object এর পূর্ববর্তী অবস্থা হচ্ছে class । যা class ধারা object এর নীল নকশা/blue print তৈরি করা হয়।
//class তৈরি করা ।। variable তৈরি করা ।। function তৈরি করা || শেষে class থেকে object তৈরি করা ।
//in js we can write 2 kinds of class.
                        //1. kind of write class;
                        //2. this is called Class Expression;




//1. kind of write class
class person{
    first_name = "Abuzam"
    last_name = "Nangzai"
    age = 27
    fullName = ()=>{
        return `My full name is ${this.first_name} ${this.last_name}`
    }
}
const personInstance = new person()
console.log(personInstance.fullName())




//2. this is called Class Expression
let person = class{
    first_name = "Nangzai";
    last_name = "Singha";
    sum(){
        return `My name is ${this.first_name} ${this.last_name}`
    }
}
let personInstance = new person()
console.log(personInstance.sum());
