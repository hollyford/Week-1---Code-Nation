// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ];
// console.log(coffeeOrder);

// coffeeOrder[1] = "Ann - Vanilla Latte"
// console.log(coffeeOrder);

// coffeeOrder.push("Donna - Espresso")
// console.log(coffeeOrder);
// coffeeOrder.pop();

// console.log(coffeeOrder[0]);
// console.log(coffeeOrder);
// console.log(coffeeOrder.length);

// let favSong = [
//     "Enter Sandman",
//     "Africa",
//     "I want to break free"
// ];
// console.log(favSong);

// favSong.push("Sad but true", "Of Wolf and Man");
// console.log(favSong);

// favSong.pop();
// console.log(favSong);

// favSong.shift();
// console.log(favSong);

// favSong.unshift("Enter Sandman");
// console.log(favSong);



// map() - The Map object holds key-value pairs and remembers the original insertion order of the keys. 
// Any value (both objects and primitive values) may be used as either a key or a value.

// shift() - The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

// unshift() - puts an item in at the front of the array

// splice() - 

// unsplice() - 


// let favDrinks = [
//     "Coffee",
//     "Tea",
//     "Cordial",
//     "larger",
//     "Hot Chocolate"
// ];

// // console.log(favDrinks[0]);
// // console.log(favDrinks[1]);
// // console.log(favDrinks[2]);

// for(let i = 0; i < favDrinks.length; i++) {
//     console.log(favDrinks[i]);
// }

// let multiplesTwo = [];

// for(let i = 0; i <= 20; i++) {
//     if ( i % 2 == 0) {
//         multiplesTwo.push(i);
//     }
// }
// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}`);

// let age = 15;

// while(age < 18) {
//     console.log("you're a child");
//     age++;
// }
// console.log("You're an adult!")


// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club";

// while(currentCard != "Spade"){
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];
// }
// console.log(currentCard);


// // Acticity 1:

// let favFilms = ["Jurassic Park", "Independence Day", "The Lion King", "Harry Potter and the Philosopher's Stone"];
// // console.log(favFilms);

// favFilms.push("The deathly hallows", "Nightmare before Christmas");
// // console.log(favFilms);

// for(let i = 0; i < favFilms.length; i++) {
//     console.log(favFilms[i]);
// };

// Activity 2:

// for(let i = 0; i < 6; i++) {
//     console.log([Math.floor(Math.random()*50)])
// };


// Activity 3:

// for(let i = 9; i >= 0; i--) {
//     console.log(i)
// };

// Activity 4: 

// let films = ["The Lion King", "Harry Potter", "Ghostbusters", "Nightmare before Christmas"];
// for(let i = 0; i < films.length; i++) {
//     console.log(films[i])
// }

// if (films[2] == "Ghostbusters") {
//     console.log("Yay, it't Ghostbusters!")
// } else {
//     console.log("Boo! We want Ghostbusters!")
// };


// Activity 5: 
// let ranNum = [];

// for(let i = 0; i < 6; i++) {
//     ranNum.push([Math.floor(Math.random()*30)])
// }
// for(let i = 0; i < ranNum.length; i++) {
//     if (ranNum[i] % 7 == 0) {
//         console.log(`${ranNum[i]} is divisible by 7`)
//     } else {
//         console.log(`${ranNum[i]} is NOT divisible by 7`)
//     }
//     }


// Activity 6:

// let bobsFollowers = ["Fred", "George", "Harry", "Ginny"];
// let hannahsFollowers = ["Hermioni", "Ron","Fred", "George"];

// for(let i = 0; i < bobsFollowers.length; i++) {
//     for(let j = 0; j < hannahsFollowers.length; j++) {
//         if (bobsFollowers[i] == hannahsFollowers[j]) {
//             console.log(`${bobsFollowers[i]}`)
//         }
//     }
// }

// Do...while

// let result = '';
// let i = 0;

// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 5);

// console.log(result);
// // expected result: "12345"
