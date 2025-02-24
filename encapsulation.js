// // Topic - 13

// //What is Encapsulation ??? How to work Encapsulation ???
// //Encapsulation- Group of data বা actionকে একত্রিত করে একটি capsul বা cover এর ভিতরে মুরে রাখি সেটিকে Encapsulation বলে।

// // JavaScript এ আমরা Encapsulation দিয়ে কতভাবে কাজ করা যায়?
// //Ans: JavaScript এর ভিতরে আমরা Encapsulation কে আমরা তিন ভাবে পেয়ে থাকি। যথা - 
//         // 1. Encapsulation using Closures.
//         // 2. using Constructor function.
//         // 3. using ES6 classes.
// //উপরের এই তিনটি step follow করে JS এর মধ্যে আমরা Encapsulation কে achive করতে পারি।




// //EX: 01
// // 1. Encapsulation using Closures:
// // Closures: অনেকগুলো action কে একটা জায়গায় বা object এর মধ্যে বেঁধে রেখে সেগুলোকে return করে দেয়ার এই process কে Closures বলে।

// // function createCount(){
// //     let count = 0;

// //     return{ //here is Closures. 
// //         increment: function(){
// //             count++;
// //         },
// //         decrement: function(){
// //             count--;
// //         },
// //         getResult: function(){
// //             return count;
// //         }
// //     }
// // }
// // const result = new createCount()
// // result.increment()//1
// // result.increment()//2
// // result.increment()//3
// // result.increment()//4
// // result.decrement()//3
// // result.decrement()//2
// // console.log(result.getResult()); //Output : 2




// //EX: 02
// // 2. using Constructor function.
// function createCounter(){
//     let count = 0;

//     this.increment=()=>{
//         count++;
//     }
//     this.decrement=()=>{
//         count--
//     }
//     this.getCount=()=>{
//         return count;
//     }
// }

// let result = new createCounter()
// result.increment()//1
// result.increment()//2
// result.increment()//3
// result.increment()//4
// result.decrement()//3
// result.decrement()//2
// console.log(result.getCount());//2





// //EX: 03
// // 3. using ES6 classes:
// class createCount{
//     count = 0;

//     increment(){
//         this.count++
//     }
//     decrement(){
//         this.count--
//     }
//     getResult(){
//         return this.count
//     }
// }

// let result =new createCount()
// result.increment()
// result.increment()
// result.increment()
// result.increment()
// result.increment()
// result.decrement()
// result.decrement()
// console.log(result.getResult());
