//Topic-9

// What is overriding??? How to work overriding???
// overriding - কোনকিছুকে পরিবর্তন করা।
//যখন father এর কোন property উত্তরাধিকার সূত্রে son যদি পরিবর্তন করে তখন তাকে overriding বলে থাকি।

class father{
    fatherProperty(){
        let num = 10;
        let mum = 20;
        let sum = num + mum;
        console.log("This value from Father = ",sum)
    }
}
class son extends father{
    fatherProperty(){
        let num = 100;
        let mum = 300;
        let sum = num + mum;
        console.log("This value from Son = ",sum)
    }
}
//This is from father class where son can't overriding(change) the value;
let objFather = new father()
objFather.fatherProperty()

//This is from son class where we overriding(change) the values;
let result = new son()
result.fatherProperty()
