// activity 1: 

// const factoral = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factoral(n-1));
//     }
// }

// console.log(factoral(33));

// Activity 2: 

// let orderCount = 0

// const takeOrder = (topping1, topping2) => {
//     console.log(`Pizza with ${topping1} and ${topping2}`);
//     orderCount++;
//     console.log(orderCount)
// }

// takeOrder("pineapple", "ham");
// takeOrder("peperoni", "cheese");
// takeOrder("pineapple", "ham");

// Activity 3: Cash machine

let storedPin = 1111
let balance = 123

const machine = (pin, cash) => {
    if (pin === storedPin && cash <= balance) {
        console.log(`You are withdrawing ${cash}.`)
        let newBalance = (balance - cash)
        console.log(`Your new balance is ${newBalance}`)
        balance = newBalance;
    } else if (pin !== storedPin) {
        console.log("You've entered an incorrect PIN")
    } else if (cash > balance) {
        console.log(`You do not have the available balance to be able to withdraw ${cash}`)
    }
}

machine(1111, 75);
machine(1111, 20);
machine(1111, 10);
machine(1111, 10);
machine(1111, 10);
machine(1113, 10);