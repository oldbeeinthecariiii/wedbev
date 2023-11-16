function tellFortune() {
    numOfChildren = document.getElementById("children").value;
    partnerName = document.getElementById("partner").value;
    jobTitle = document.getElementById("job").value;
    
    document.getElementById("fortune").innerText = `You will be an ${jobTitle}, and married to ${partnerName} with ${numOfChildren} kids.`;
}

// function calculateDogAge(puppyAge) {
//     puppyAge = document.getElementById("dog-age").value;
//     dogAge = puppyAge * 7;
//     document.getElementById(
//       "age"
//     ).innerHTML = `Your doggie is ${dogAge} years old in dog years!`;
// }

// function calculateSupply(age, amountPerDay) {
//     age = document.getElementById("current-age").value
//     amountPerDay = document.getElementById("amount-per-day").value

//     maxAge = 80;
//     amountPerYear = amountPerDay * 365.25;
//     totalAmount = (maxAge - age) * amountPerYear;
//     document.getElementById("supply").innerHTML = `You will need ${totalAmount} to last you until the ripe old birthing age of ${maxAge}!!!`;
// }

// function calcCircumference() {
//     radius = document.getElementById("radius").value;
//     circumference = 2 * Math.PI * radius;
//     document.getElementById(
//         "circumference"
//     ).innerHTML = `The circumference is ${circumference}`;
// }

// // const calcArea = (radius) => console.log(`The area is ${Math.PI * radius * radius}`);

// function celsiusToFahrenheit() {
//     celsius = document.getElementById("celsius").value;
//     fahrenheit = (celsius * 9) / 5 + 32;
//     document.getElementById('fahrenheit').innerHTML = `${celsius}C is ${fahrenheit}F`;
// }

// function fahrenheitToCelsius(fahrenheit) {
//     celsius = (fahrenheit - 32) * 5 / 9;
//     console.log(`${fahrenheit}F is ${celsius}C`);}