//Topic- 01
//Encapsulation:যে জিনিসগুলো একই বৈশিষ্ট্যের অন্তর্গত, সেই বৈশিষ্ট্যগুলকে একটি কেপসুলে ভরে রাখাকে Encapsulation বলে।

class Player{

    //Here (#) is indicate that, these are private property;
    #name;
    #birthday;
    #monthlySalary;
    #noOfMonths

    constructor(name, birthday, monthlySalary, noOfMonths){
        // this.name = name; //public property
        this.#name = name;
        this.#birthday = birthday;
        this.#monthlySalary = monthlySalary;
        this.#noOfMonths = noOfMonths;
    }

    #calculateAge(){
        const diff_ms = Date.now() - new Date(this.#birthday).getTime();
        const age_dt = new Date(diff_ms)

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    #getSalary(){
        return (this.#monthlySalary * this.#noOfMonths).toLocaleString()
    }
}

const Sakib = new Player("Sakib", "1987-03-24", 10000, 12)
console.log(Sakib.calculateAge());