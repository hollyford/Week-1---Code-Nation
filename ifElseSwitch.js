// let weather = "sun";

// if (weather == "sunny") {
//     console.log("Yay! Better grab a hat.")
// } else if (weather == "rainy") {
//     console.log("Go get yout unbrella!")
// } else if (weather == "windy") {
//     console.log("Hang on to your hat!")
// } else {
//     console.log("Hmmm, I'm not sure!")
// }

// // == vs === :
// let i = 10;
// let j = "10";

// if (i === j) {
//   console.log("True")
// } else {
//   console.log("False")
// }

// let place = "Manc";
// let weather = "sunny";

// if (place == "Manc" && weather == "sunny") {
//     console.log("Check again!");
// } else if (place == "Manc" && weather == "rain") {
//     console.log("Obvs!")
// } else {
//     console.log("What, it isnt raining?")
// };

//  note || is the 'or' function

// let day = "Saturday"

// if (day == "Saturday" || "Sunday") {
//     console.log("It's the weekend!")
// } else {
//     console.log("Sad times, it's a weekday")
// }

// Activity 1:

// let age = "19"
// country = "UK"

// if (age > 17 && country == "UK") {
//     console.log("Yes, I can serve you")
// } else {
//     console.log("I can't serve you")
// };

// Activity 2:

// let topping = "pineapple"

// switch (topping) {
//     case "mushroom":
//     case "pineapple":   
//     case "ham":
//     case "bbq chicken" :
//         console.log("These are important ingredients for my pizza.");
//         break;
//     case "pepperoni":
//     case "sausage":
//     case "onion":
//     case "peppers":
//         console.log(`I don’t mind having ${topping} on my pizza`);
//         break;
//     case "extra cheese":
//     case "feta":
//     case "mozzarella":
//     case "anchovies":
//         console.log(`“${topping} should not be on a pizza.`);
//         break;
//     default:
//         console.log(`You may need to ask me if I like ${topping} on my pizza.`);
// }

// Activity 3:

// let password = "password";

// if (password.length < 8) {
//     console.log("Your password needs to be a minimum of 8 charachters");
// } else {
//     console.log(`${password}`)
// };

// let num = 7

// if (num % 5 == 0 || num % 3 == 0) {
//     console.log("This number is divisible by 3 or 5")
// } else {
//     console.log(`${num} is not divisible by 3 or 5`)
// };

// Chris' example:
// let num = 30;

// if (num % 3 == 0){
//   console.log("This number is divisble by 3.")
// } else if (num % 5 == 0){
//   console.log("This number is divisble by 5.");
// }


// activity 4:

// let num = 15

// if (num % 5 == 0 && num % 3 == 0) {
//     console.log("fizz buzz")
// } else if (num % 3 == 0) {
//     console.log("fizz")
// } else if (num % 5 == 0) {
//     console.log("buzz")
// } else {
//     console.log(`${num} does not bring back either fizz or buzz`)
// };

// Activity 5:

// let num = 1007;
// let numString = num.toString(); 
// let reverseNumString = numString.split('').reverse().join('');

// if (num == reverseNumString) {
//     console.log(`${num} is a palindrome!`)
// } else {
//     console.log(`${num} is not a palindrome.`)
// };


// Activity 6:

// let time = 20;
// let placeOfWork = "Capital One";
// let townOfHome = "Arnold";

// if (time <= 8 || time >= 18) {
//     console.log(`I'm at home in ${townOfHome}`)
// } else if (time >= 8 && time < 9) {
//     console.log(`I'm commuting to work at ${placeOfWork}`)
// } else if (time >= 17 && time <= 18) {
//     console.log(`I'm commuting home to ${townOfHome}`)
// } else if (time >= 9 && time <= 17) {
//     console.log(`I'm at work at ${placeOfWork}`)
// } else {
//     console.log("Check the time you've entered")
// };

// Notes:
// <8 - at home
// 8 - leave for work
// 9 - at work
// 5 - leave work
// 6< - at home

// Activity 7:

// Take the string
// “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh
// gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the
// // index of a last vowel in the string.

// var word = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
// var vowels = "aeiou";

// for (let i = word.length - 1; i >= 0; i--) {
//     if (vowels.includes(word[i])) {
//         console.log(i);
//         break;
//     }
// }

// Chris' example: 
// let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
// let vowelArr = ['a', 'e', 'i', 'o', 'u'];
// let highestIndex =0;
// // // counter go through whole array using length as limiter
// for (let i = 0; i < vowelArr.length; i++){
// console.log(string.lastIndexOf(vowelArr[i]));
// // // gets index of vowel in current iteration
//     index = string.lastIndexOf(vowelArr[i]);
// // // compares current index to find highest index
// if (index >= highestIndex ){
// // // so new highestindex becomes index
//     highestIndex = index;
// // // won't reach last two nums in vowelarray
//     lastVowel = vowelArr[i];
// }
// }

// // // This like logs the last Vowel to the console. 
// console.log(lastVowel); 
// // // This line logs the index number of the last vowel. 
// // console.log(highestIndex)

// Activity 8: 

// let word = "This is a string "

// let firstChar = word.charAt(0);
// let lastChar = word.charAt(word.length-1);

// if(firstChar === lastChar) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// Chris' example: 
// let word = "evening";
// if (word.charAt(0) == word.charAt(word.length-1)){
//   console.log("True")
// } else {
//   console.log("False")
// }

// Activity 9:

// let num1 = 2;
// let num2 = 3;

// if((num1 + num2) % 2 === 0){
//     console.log(`The numbers added together makes ${num1 + num2} which is an even number`)
// } else {
//     console.log(`The numbers added together makes ${num1 + num2} which is NOT an even number. Therefore, here are the numbers times by each other: ${num1 * num2}`)
// }

// Chris' example: 
// let num1 = 7;
// let num2 = 7;
// let sum = num1 + num2;

// if (sum % 2 == 0){
//   console.log(`The sum = ${sum} and is even.`)
// } else {
//   console.log(`${num1 * num2}`)
// }
