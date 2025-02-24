//this is called functional or procedural way of program

class Player {
    #name

    constructor(name, year, monthlySalary, noOfMonths) {
        this.#name = name;
        this.year = year;
        this.monthlySalary = monthlySalary;
        this.noOfMonths = noOfMonths;
    }
    calculateAge() {
        return this.year * this.noOfMonths;
    }
    getSalary() {
        return this.monthlySalary * this.noOfMonths;
    }
}
let Nangzai = new Player("Abuzam Nangzai", 5, 80000, 12)
let Nasim = new Player("Nasim M Rahman", 3, 80000, 12)

console.log(Nangzai.calculateAge())
console.log(Nasim.getSalary())

console.log(Nangzai.name)

