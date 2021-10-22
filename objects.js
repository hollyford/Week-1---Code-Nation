// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter coffee",
//         "Tea",
//         "Hot chocolate"
//     ],
//     openCafe() {
//         return "Come on in"
//     }
// };

// 

// console.log(person.sayHi());

// console.log(person.favSongs[1])
// console.log(person["favSongs"][1])

// console.log(person.name);
// console.log(person["name"]);


// let day = 'Saturday';
// let alarm = '';

// let alarmMessages = {
//     weekendAlarm: 'no alarm needed',
//     weekdayAlarm: 'get up at 7am'
// }

// if(day === 'Saturday' || day === 'Sunday'){
//     alarm = alarmMessages.weekendAlarm
// } else {
//     alarm = alarmMessages.weekdayAlarm
// }
// console.log(alarm)

// Activity 1:
    //     const person = {
    //     name: "Holly",
    //     age: 36,
    //     favSongs: [
    //         "Nothing else matters",
    //         "Africa",
    //         "Carry on my Wayward Son",
    //         "Back in Black",
    //         "Don't stop believin"
    //     ],
    //     sayHi() {
    //         return `Hello, my name is ${this.name}`;
    //     }
    // };

// Activity: 2

// const pet = {
//     name: "Reggie",
//     typeOfPet: "Goldfish",
//     age: "2 months",
//     colour: "Black, red and silver",
//     eat() {
//         return `${this.name} is eating`
//     },
//     drink() {
//         return `${this.name} is drinking... which is weird for a goldfish.`
//     }
// }

// console.log(pet.eat());
// console.log(pet.drink());

// Activity 3:

let foodPrice = 0
let drinkPrice = 0

const coffeeShop = {
    branch: "Nottingham",
    drinks: [["Coffee", 3.50], ["Tea", 2.50], ["Hot Chocolate", 3.50], ["Pepermint Tea", 4.00]],
    food: [["Salad", 7.50], ["Burger", 15.00], ["Chips", 5.50], ["Panini", 8.00]],
    drinksOrdered(drinkChoice) {
        for(i=0; i < this.drinks.length; i++) {
            if(i == drinkChoice) {
                drinkPrice = this.drinks[i][1];
                return `${this.drinks[i][0]} £${this.drinks[i][1].toFixed(2)}`
            }
        }
    },
    foodOrdered(foodChoice) {
        for(i=0; i < this.food.length; i++) {
            if(i == foodChoice) {
                foodPrice = this.food[i][1];
                return `${this.food[i][0]} £${this.food[i][1].toFixed(2)}`
            }
        }
    },
    total() {
        return foodPrice + drinkPrice
    }
}

console.log(coffeeShop.foodOrdered(3));
console.log(coffeeShop.drinksOrdered(2));
console.log(`Your total is £${coffeeShop.total().toFixed(2)}`)
