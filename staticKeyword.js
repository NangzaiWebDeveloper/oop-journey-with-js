//Topics-05
//What is Static keyword??? How to use Static Keyword??? Why use Static Keyword???
//Static keyword এর through without creating any object আমরা class থেকে সরাসরি property গুলা access করতে পারি

class person{
    static first_name = "Abuzam";
    static last_name = "Nangzai";

    static getName(){
        return `My full name is ${this.first_name} ${this.last_name}`;
    }
}

console.log(person.first_name);
console.log(person.last_name);
console.log(person.getName());
