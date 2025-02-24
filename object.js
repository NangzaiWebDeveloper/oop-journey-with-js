//Topics-02
//In javaScript objects are three types . . . 
            //1. object literal(আক্ষরিক);
            //2. instance(অস্তিত্ব) of object;
            //3. object constructor;



//here create object by Object Literal
let person = {
    first_name : "Abuzam",
    last_name : "Nangzai",
    age : 25,
    isBangladeshi : true,
    getFullName : ()=>{
        return `My full name is ${person.first_name} ${person.last_name}`
    }
}
console.log(person.getFullName())



//here create object by Instance of Object
let person = new Object() //এখানে new হচ্ছে optional
    person.first_name = "Nangzai"
    person.last_name = "Singha"
    person.age = 27
    person.isBangladeshi = true
    person.getName = ()=>{
        return `My full name is ${person.first_name} ${person.last_name}`
    }
console.log(person.getName())



//here create object by Object Constructor
function person (){
    this.first_name = "Abujam" //this বলতে বুজাই এই object এর মধ্যে first_name property বানানু
    this.last_name = "Nangzai"
    this.age = 27
    this.isBangladeshi = true
    this.fullName =()=>{
        return `My full name is ${this.first_name} ${this.last_name}`
    }
}
let personInstance = new person()//এখানে personInstance Variable ধারা object এর অস্তিত্ব তৈরি করা বুজাতছে
console.log(personInstance)
 