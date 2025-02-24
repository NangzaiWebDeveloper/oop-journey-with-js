//Topics-07
//How to work Constructor into Inheritance???

//case-1:
//constructor have only father class, constructor not have into son class.
//constructor have only father class & pass parameter in constructor method.

//case-2:
//if constructor have only son class, constructor not have into father class.
//if constructor have only son class & pass parameter in constructor method.

//case-3:
//if constructor have both father & child class.
//if constructor have both father & child class, and pass the parameter.

//what will be result or output in this code???


//case-1:
//ex-1: constructor have only father class, constructor not have into son class.
class father{
    constructor(){
        console.log("I am constructor of father class");
    }
}
class son extends father{
}

new father()
new son()


//ex-2: constructor have only father class & pass parameter in constructor method.
class father{
    constructor(msg){
        console.log(msg);
    }
}
class son extends father{
}

new father("This parameter is from father")
new son("This parameter is from son")


//case-2:
//ex-01: if constructor have only son class, constructor not have into father class.
// class father{
// }

// class son extends father{
//     constructor(){ //son class এর মধ্যে constructor use করতে হলে father এর permission লাগে।
//         super() //permission বলতে constructor লিখার পরের লাইনে super()(super intalisance বলে)
//         console.log("This is from son class");
//     }
// }

// new father()
// new son()


//ex-02: if constructor have only son class & pass parameter in constructor method.
// class father{
// }

// class son extends father{
    
//     constructor(msg){
//         super()
//         console.log(msg)
//     }
// }

// new father("This message is from father")
// new son("This message is from son")


//case-03:
//ex-1: if constructor have both father & child class.
// class father{
//     constructor(){
//         console.log("This is constructor from father")
//     }
// }

// class son extends father{
//     constructor(){
//         super()
//         console.log("This is constructor from son");
//     }
// }

// new father()
// new son()


// ex-2: if constructor have both father & child class, and pass the parameter.
// class father{
//     constructor(msg){
//         console.log(msg);
//     }
// }
// class son extends father{
//     constructor(msg){
//         super()
//         console.log(msg)
//     }
// }

// // new father("This is arguments from father")
// new son("This is arguments from son")