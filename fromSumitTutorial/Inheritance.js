//Topic -02 
//Inheritance : 

class Player{
    #name;
    #age;
    constructor(name, age){
        this.#name = name;
        this.#age = age;
    }

    getPlayerDetails(){
        return `Player name is ${this.#name} & age is ${this.#age}.`
    }
}

class Cricketer extends Player{
    #centuries;

    constructor(name, age, centuries){
        super(name, age)
        this.#centuries = centuries;
    }
}

class Footballer extends Player{
    #goals;

    constructor(name, age, goals){
        super(name, age)
        this.#goals = goals;
    }
}
const Sakib = new Cricketer("Sakib", 40, 55)
console.log(Sakib.getPlayerDetails())
console.log(Sakib.name);
