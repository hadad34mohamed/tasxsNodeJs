//1..... function countVowels(str) {
//         str = str.toLowerCase();
//     let vowels = "aeiou";
//     let count = 0;
//         for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }

//     return count;
// }
// console.log(countVowels("Hello"));        
// console.log(countVowels("JAVASCRIPT"));   
// console.log(countVowels("xyz"));         
// console.log(countVowels("AEiou"));


//2... function invertCase(str) {
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         let ch = str[i];

//         if (ch === ch.toUpperCase() && ch !== ch.toLowerCase()) {
//                   result += ch.toLowerCase();
//         } else if (ch === ch.toLowerCase() && ch !== ch.toUpperCase()) {
//                  result += ch.toUpperCase();
//         } else {
//                         result += ch;
//         }
//     }

//     return result;
// }
// console.log(invertCase("Hello"));       

// console.log(invertCase("JavAScript"));  
// console.log(invertCase("123!@#"));      
// console.log(invertCase("aEiOu"));


//3... function uniqueMerge(a, b) {
//     let result = [];
//         for (let i = 0; i < a.length; i++) {
//         if (!result.includes(a[i])) {
//             result.push(a[i]);
//         }
//     }
//         for (let j = 0; j < b.length; j++) {
//         if (!result.includes(b[j])) {
//             result.push(b[j]);
//         }
//     }

//     return result;
// }
// console.log(uniqueMerge([1, 2, 3], [3, 4, 5])); 
// console.log(uniqueMerge(["a", "b"], ["b", "c", "a"])); 

// console.log(uniqueMerge([], [1, 2])); 


//4.. function findFirstIndexDivisibleBy(nums, x, y) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % x === 0 && nums[i] % y === 0) {
//             return i; // أول index نلاقيه
//         }
//     }
//     return -1;
// }
// console.log(findFirstIndexDivisibleBy([3, 10, 15, 20, 30], 2, 5)); 
// console.log(findFirstIndexDivisibleBy([7, 9, 12, 18], 3, 6)); 
// console.log(findFirstIndexDivisibleBy([5, 7, 11], 2, 3)); 


//5.. function allTruthy(values) {
//     for (let i = 0; i < values.length; i++) {
//         if (!values[i]) {
//             return false;
//                    }
//     }
//     return true;
// }
// console.log(allTruthy([1, "hello", true])); 
// console.log(allTruthy([1, 0, "test"]));  
// console.log(allTruthy(["", "hi"]));   

// console.log(allTruthy([{}, [], 42])); 


//6.. function pickEveryNth(arr, n) {
//     let result = [];

//     for (let i = 0; i < arr.length; i += n) {
//         result.push(arr[i]);
//     }

//     return result;
// }
// console.log(pickEveryNth([10, 20, 30, 40, 50], 2)); 
// console.log(pickEveryNth([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(pickEveryNth(["a", "b", "c", "d"], 1));
// console.log(pickEveryNth(["x", "y", "z"], 5));

//7.. function ticketPrice(customer) {
//     let price;

//     if (customer.age < 6) {
//         price = 0;
//     } else if (customer.age <= 18 || customer.isStudent) {
//         price = 8;
//     } else if (customer.age >= 65) {
//         price = 6;
//     } else {
//         price = 12;
//     }
//         if (customer.hasCoupon) {
//         price = price - 2;
//         if (price < 0) {
//             price = 0;
//         }
//     }

//     return price;
// }
// console.log(ticketPrice({ age: 4, isStudent: false, hasCoupon: false }));
// console.log(ticketPrice({ age: 16, isStudent: false, hasCoupon: true }));
// console.log(ticketPrice({ age: 22, isStudent: true, hasCoupon: false }));  
// console.log(ticketPrice({ age: 70, isStudent: false, hasCoupon: true }));
// console.log(ticketPrice({ age: 30, isStudent: false, hasCoupon: false })); 


//8.. function normalizeNames(names) {
//     let result = [];

//     for (let i = 0; i < names.length; i++) {
//         let name = names[i].trim().toLowerCase();

//         if (name.length > 0) {
//                         let fixed = name[0].toUpperCase() + name.slice(1);
//             result.push(fixed);
//         } else {
//             result.push("");
//                     }
//     }

//     return result;
// }
// console.log(normalizeNames(["   aMMaR massOUD ", "   FAtMa", "OMAR  "])); 
// console.log(normalizeNames(["  alice", "BOB  ", "  CHARLie "])); 
// console.log(normalizeNames(["   " , "x", " Y "]));


//9... const productProto = {
//     isAvailable: function () { return this.stock > 0; },
//     label: function () { return (this.brand || "Generic") + " " + this.name; }
// };

// function buildProductCatalog(rawItems) {
//     let catalog = [];

//     for (let i = 0; i < rawItems.length; i++) {
//         let obj = Object.create(productProto);
//                 Object.assign(obj, rawItems[i]);

//         catalog.push(obj);
//     }

//     return catalog;
// }
// let items = [
//     { name: "Mouse", brand: "Logi", stock: 10 },
//     { name: "SSD", stock: 0 },
//     { name: "Keyboard", brand: "MS", stock: 5 }
// ];

// let catalog = buildProductCatalog(items);

// for (let i = 0; i < catalog.length; i++) {
//     console.log(
//         catalog[i].label(), 
//         "| Available:", catalog[i].isAvailable()
//     );
// }


//10... function sumUntilLimit(nums, limit) {
//     let sum = 0;
//     let i = 0;

//     while (i < nums.length && sum + nums[i] <= limit) {
//         sum += nums[i];
//         i++;
//     }

//     return sum;
// }
// console.log(sumUntilLimit([5, 7, 4], 12)); 
// console.log(sumUntilLimit([1, 2, 3, 4, 5], 10)); 
// console.log(sumUntilLimit([10, 20, 30], 15)); 
// console.log(sumUntilLimit([], 100)); 



// 11...function safeLogin(user, policy) {
//     let password = user.password;
//         if (password.length < policy.minLen) {
//         return false;
//     }
//         if (policy.mustIncludeNumber) {
//         let hasNumber = false;
//         for (let i = 0; i < password.length; i++) {
//             let ch = password[i];
//             if (ch >= "0" && ch <= "9") {
//                 hasNumber = true;
//                 break;
//             }
//         }
//         if (!hasNumber) return false;
//     }
//         if (password.toLowerCase().includes(policy.blockWord.toLowerCase())) {
//         return false;
//     }
//     return true;
// }
// console.log(safeLogin(
//     { email: "user@example.com", password: "MyPass123" },
//     { minLen: 8, mustIncludeNumber: true, blockWord: "password" }
// )); 