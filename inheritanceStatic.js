//Topics- 08
//How to work inheritance static property???
//static keyword use করলে without creating object আমরা class এর ভিতর থেকে সরাসরি যেকোন propertyকে access করতে পারি।

// ex-1:
class father{
    static greetParent(){
        return "This is from father class"
    }
}
class son extends father{
    static greetSon(){
        return "This is from son class"
    }
}

console.log(father.greetParent()); //father can not access son class property.
console.log(son.greetSon())
console.log(son.greetParent()) //in static we can access father class property without creating object. 
