//Synchronous 

// console.log(" I ")
// console.log(" eat ")
// setTimeout(()=>{
//     console.log(" ice-cream")
// },4000)
// console.log(" with a ")
// console.log(" spoon ")


// callback function example
// function fun(callback){
//     console.log("main function is called")
//     callback()
// }

// function fun1() {
//     console.log("callback function is called")
// }

// fun(fun1)

//<----------------------------------------------------------->

let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
}

//---> callback hell 

// let order = (Fruit_name, call_production) => {
//     setTimeout(() => {
//         console.log(`${stocks.fruits[Fruit_name]} was selected`);
//         call_production();
//     }, 2 * 1000);

// }

// let production = () => {
//     setTimeout(() => {
//         console.log("producction has started");
//         setTimeout(() => {
//             console.log("The fruit has been chopped");
//             setTimeout(() => {
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
//                 setTimeout(() => {
//                     console.log("the machine was started");
//                     setTimeout(() => {
//                         console.log(`the ice-cream was placed on ${stocks.holder[0]}`);
//                     }, 2000)
//                 }, 1000)
//             }, 1000)
//         }, 2 * 1000)
//     }, 0)
// }

// order(0, production);


