// console.log("\\nTask 1 — Array warm‑up");
// let people = ["Adam", "Mia", "Jamal", "Sara", "Omar", "Nina"];

// 1.. people.shift()

// 2.. people.unshift("Luna")

// 3.. let lastTwo = people.splice(-2);
// people.splice(1, 0,lastTwo);
//  console.log(people.flat());

//tasx 2... console.log("\\nTask 2 — Decisions with && and ||");
// let a = 12;
// let b = 5;
// let c = 0;
// let isNiceNumber =((a % 2 ==0) && (b % 2 !==0) || (!c));

//     console.log("isNiceNumber =", isNiceNumber);

// tqsx 3... console.log("\\nTask 3 — Array membership without loops");
// let cartA = ["Phone", "Headphones", "Charger"];
// let cartB = ["Laptop", "Camera"];
// let hasTechDeal = 
//   cartA.includes("Laptop") || cartA.includes("Camera") ||
//   cartB.includes("Laptop") || cartB.includes("Camera");

// console.log("hasTechDeal =", hasTechDeal);


//tasx 4... console.log("\nTask 4 — Truthy vs Falsy");
// let values = [0, "hi", "", 42, null];

// let truthy = [];
// let falsy = [];

// for (let i = 0; i < values.length; i++) {
//   if (!values[i]) {
//     falsy.push(values[i]);
//   } else {
//     truthy.push(values[i]);
//   }
// }

// console.log("truthy =", truthy);
// console.log("falsy =", falsy);

//5.. console.log("\\nTask 5 — Object.assign merge");
// let defaults = { theme: "light", pageSize: 20, showTips: true };
// let overrides = { theme: "", pageSize: 50 };
// let settings = Object.create(defaults);
// Object.assign(settings, overrides);

// console.log("settings =", settings);
// console.log("defaults still =", defaults);

//6.. console.log("\\nTask 6 — Object.create basics");
// let vehicleBase = {
//   type: "vehicle",
//   wheels: 0,
//   powered: true
// };
// let myBike = Object.create(vehicleBase);

// myBike.kind = "bike";
// myBike.wheels = 2;
// myBike.brand = "EcoRide";
// console.log("myBike.kind     =", myBike.kind); 
// console.log("myBike.wheels   =", myBike.wheels); 
// console.log("myBike.powered  =", myBike.powered);

//7... console.log("\nTask 7 — keys & values");
// let scores = { Alice: 17, Bob: 22, Carol: 22 };
// let names = Object.keys(scores);   
// let numbers = Object.values(scores);
// let hasBob = names.includes("Bob");
// let winner;
// if (scores.Alice > scores.Bob && scores.Alice > scores.Carol) {
//   winner = "Alice";
// } else if (scores.Bob > scores.Alice && scores.Bob > scores.Carol) {
//   winner = "Bob";
// } else if (scores.Carol > scores.Alice && scores.Carol > scores.Bob) {
//   winner = "Carol";
// } else {
//   winner = "TIE"; 
// }
// console.log("names  =", names);
// console.log("numbers=", numbers);
// console.log("hasBob =", hasBob);
// console.log("winner =", winner);

//8.. console.log("\nTask 8 — Ticket price rules");

// let customer = { age: 20, isStudent: true, hasCoupon: true };
// let price;
// if (customer.age < 6) {
//   price = 0;
// } else if (customer.age <= 18 || customer.isStudent) {
//   price = 8;
// } else if (customer.age >= 65) {
//   price = 6;
// } else {
//   price = 12;
// }
// if (customer.hasCoupon) {
//   price = Math.max(price - 2, 0);
// }

// console.log("price =", price);

// 9...console.log("\nTask 9 — String methods");
// let rawName = "   PreProgramming JavaScript   ";
// let trimmed = rawName.trim();
// displayName = trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
// hasProgram = trimmed.toLowerCase().includes("program");


// console.log("displayName = ", displayName);
// console.log("hasProgram  =", hasProgram);