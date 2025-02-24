// Topic - 12

// What is Abstraction ??? How to work Abstraction ???
// Abstraction - যার কোন মূর্তি/object/instance থাকে না।
// abstraction এর বিষয়টি আসে inheritance থেকে।

// abstraction use করতে হলে "abstract" keyword লিখে use করতে হবে। (not support in JS, but need to know)
// abstract keyword যদি কোন class এর সামনে লিখি তাহলে ঐ classকে আর object বানাতে পারব না ।
// abstract থাকা class এর property use করতে হলে always "son" class থেকে use করতে হবে।
// but দুঃখের বিষয় JavaScript এ  abstraction/abstract এর Built-in support করে না । 



abstract class father{ // but দুঃখের বিষয় JavaScript এ  abstraction/abstract এর Built-in support করে না । 
    
}

class son extends father{

}

let obj1 = new father() //father can not make object, because abstract have before father class.
let obj2 = new son() //if I want to use father class property, then we need to be use by son class.