// Topic-10 

//What is method Overloading ??? How to work method Overloading???
// একটি বা একই class এর মধ্যে যদি same/একই নামের একের অধিক Method থাকে আর parameter এবং data type সংখ্যা ভিন্ন থাকে তখন তাকে overloading বলে।

/*
    - OOP like Java or c++, method overloading allows.
    - JavaScript has not directly support for method overloading as like Java & C++.
    - Yet, in JavaScript we can simulate method overloading by examining the number of arguments.
*/

class myClass{
    myMethod(p1, p2, p3){
        if(arguments.length == 1){ //only 1 parameter(p1) executed
            console.log("This is arguments one:", p1);
        }
        else if(arguments.length == 2){ //only 2 parameter(p1, p2) executed
            console.log("This is arguments two:", p1, p2)
        }
        else if(arguments.length == 3){ //only 2 parameter(p1, p2, p3) executed
            console.log("This is arguments three:", p1, p2, p3)
        }
    }
}

let result = new myClass()
result.myMethod(10)
result.myMethod(10, 20)
result.myMethod(10, 20, 30)