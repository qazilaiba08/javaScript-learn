

// a++ ;//post increment
// ++a ; //pre increment

// let a = 10;
// // console.log(++a);
// console.log(a++);
// console.log(a++);
// console.log(a++);
// console.log(a++);

// let number1 = +prompt('Enter Your First Number',20);
// let number2 = +prompt('Enter Your Second Number');
// console.log(number1 + number2);

//opreters +=;
//a +=2;
// a = a + 2;
// a = a * 2;
// a = a % 2 ;
// a = a / 2;
// 2 ** 2;

//comparsion opreteros

// let f = 18;
// let z = 18;
// console.log(f!==z);

// let mode = "yellow";
// let color = "black";
// if(mode == "dark"){
//     console.log(color); 
// }
//  else{
//     console.log("white");
//  }
// let hello ;
// console.log(hello);

// let age = +prompt("Enter Your Age");
// if(age >= 18){
//     console.log('You are eligable for voting');
// }
// else{
//     console.log("You are not eligable for voting");
// }

// let number = +prompt('Enter Your Number');
// if (number % 2 == 0) {
//     console.log( number,"is an even number");
// }
// else{
//     console.log(number, "is an odd number");
// }

// let age = +prompt('Enter Your Age');
// if(age < 18){
//     console.log("Junior");
// }
// else if(age > 60){
//     console.log("Senior");
// }
// else{
//     console.log("Middle");
// }
// let num = +prompt("Enter Your Number");
// if(num % 5 == 0){
//     console.log(num,"is a multiple of 5");
// }
// else{
//     console.log(num,"is not multiple of 5");
// }

//class Activaty

//Q 1

// let age = +prompt("Enter Your Age");
// if(age > 18 ){
//     console.log('You are eligable for voting');
// }
// else{
//     console.log("You are not eligable for voting");
// }

// // //Q 2

// let tempreture = +prompt("INPUT the tempreture");
// if(temp > 25){
//     console.log("Its a hot day");
// }
// else{
//     console.log("Its a normal day");
// }

// //Q 3
// let student_grade=+prompt("Enter your score")
// if(score >=60){
//     console.log("You passed the test");
// }
// else{
//     console.log("you failed the test");
// }

// // //Q 4


// let raining = true;

// if(raining == false){
//     console.log("remember to bring an umberalla"); 
// }
//  else{
//     console.log("Enjoy the sunny weather");
//  }

// //Q5

// let age = +prompt("Enter your age");
// if(age >= 18){
//     console.log("You are an adult");
// }
// else{
//     console.log("you are a minor");
// }
// //Q 6

// let number = +prompt("Enter the number");
// if(number > 0){
//     console.log("The number is poistive");
// }
// else if (number < 0) {
//     console.log("The number is negative");
// }
// else if(number == 0){
//     console.log("The number is zero");
// }
// else{
//     console.log("The number is inetger");
// }

// logical opreter
// let score = +prompt("Enter your score");
// if (score >= 80 && score >= 60) {
//     console.log("You are passed");
// }
// else{
//     console.log("you are failed");
// }

//logical OR 
// let score = +prompt("Enter your score");
// if (score >= 80  || score <= 60) {
//     console.log("You are passed");
// }
// else{
//     console.log("you are failed");
// }
//logical not!

// let israining = false;
// if(!israining){
//     console.log("its not raining .Enjoy the sunny day!");
// }
// else{
//     console.log("dont forget your umberalla");
// }

// let number = +prompt("Enter a number");
// if (number % 2 !== 0){
//     console.log("the number is even");
// }
// else{
//     console.log("the number is odd");
// }

//chap 13

// let weight = +prompt("Enter weight");
// let time = +prompt("Enter the time");
// if (!(weight > 300 || time < 6)){ //weight =244 && time 4
//     alert('come to our tryout!')
// }
// else{
//     alert("come to our cookout!");
// }

// let weight1 = +prompt("Enter weight");
// let time2 = +prompt("Enter the time");
// let age = +prompt("Enter your age");
// let gender = +prompt('Enter your gender');
// if (weight1 > 300 || time2 < 6 || age > 17 || gender === "male"){ //weight =244 && time 4
//     alert('come to our tryout!')
// }
// else{
//     alert("come to our cookout!");
// }

// let SAT = +prompt("Enter your sat");
// let GPA = +prompt("Enter your gpa");
// let sport = +prompt("Enter sports")

// if (SAT > 30 || GPA > 2.5 || sport === "football") { 
//        alert("Welcome to Bubba State!");  
//     } 
//      else { 
//            alert("Have you looked into appliance repair?"); 
//          }

    // chap 14
    


 
let a = 10;
let b = 30;

if (a > 6){
    if (b > 20) {
        console.log("Both x and y are greater than their respective thresholds.");
    }
    else{
        console.log("x is greater than 5, but y is not greater than 2."); 
    }
}else {
    console.log("x is not greater than 5, so the inner condition is not checked.");
}

//NESTED IF
let temperature = 15;
let isSunny = true;

if(temperature > 25){
  console.log("It's hot outside!");

  if(isSunny){
      console.log("Don't forget to wear sunscreen.");
  }
  else{
    console.log("You might still want to wear sunscreen.");
  }
}
else if(temperature >= 15 && temperature <= 25){
    console.log("It's a pleasant day.");
  if(isSunny){
    console.log("Enjoy the sunshine!");
  }
  else{
    console.log("Even if it's cloudy, it's still nice outside.");
}
}
else{
    console.log("It's a bit chilly.");
    if (isSunny) {
        console.log("Don't be fooled by the sun, it's still cool.");
    } else {
        console.log("It might be cloudy, so bring a jacket just in case.");
    }
}
