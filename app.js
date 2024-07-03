


// 1- masala

// let orgArray = [1,2,3,4,5,6,7];
//  let newArray = [];
//   for(let i = 0; i < orgArray.length; i++){
//     if(orgArray[i] > 2){
//         newArray.push(orgArray[i])
//     }
//   }
//   console.log(newArray);








// 2-masala


// let array = [3,4,5,6,12,14,21];
// let  = even = 0;
// let  = od = 0;
// for(let i = 0; i < array.length; i++){
//     if(array[i] % 2 ===0 ){
//         even += array[i];
//     }else{
//         od += array[i];
//     }
// }
// let input = parseInt(prompt("Son kiriting"));
// console.log("Juft sonlar yig'indisi :" + even);
// console.log("Toq sonlar yig'indisi: " + od);

// let evenfarq = Math.abs(input - even);
// let odfarq = Math.abs(input - od);
// console.log("Kiritilgan son va juft sonlar yig'indisi o'rtasidagi farq: " + even);
// console.log("Kiritilgan son va juft sonlar yig'indisi o'rtasidagi farq: " + od);










// 3-masala

// let firstNumber = parseInt(prompt(" birinchi sonni kiriting:"));
// let secondNumber = parseInt(prompt(" ikkinchi sonni kiriting:"));
// if (firstNumber >= secondNumber) {
//     console.log("Birinchi son ikkinchi sondan kichik bo'lishi kerak.");
// } else {
//     let evenSum = 0;
    
//     for (let i = firstNumber; i <= secondNumber; i++) {
//         if (i % 2 === 0) {
//             evenSum += i;
//         }
//     }
    
//     console.log("Juft sonlar yig'indisi: " + evenSum);
// }












// 4-masala

// function filterNumbers(...args) {

//     let numbersArray = [];
    
//     for (let i = 0; i < args.length; i++) {
//         if (typeof args[i] === 'number') {
//             numbersArray.push(args[i]);
//         }
//     }
    
//     return numbersArray;
// }
// let result = filterNumbers(1, 'hello', 3, true, 4, 'world', 6);
// console.log(result); 















// 5-masala

// function getObjectValues(obj) {
//     let valuesArray = [];

//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             valuesArray.push(obj[key]);
//         }
//     }

//     return valuesArray;
// }
// let exampleObject = { name: 'John', age: 30, city: 'New York' };
// let result = getObjectValues(exampleObject);
// console.log(result); 















// 6-masala


// function getObjectKeys(obj) {
//     let keysArray = [];

//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             keysArray.push(key);
//         }
//     }

//     return keysArray;
// }
// let exampleObject = { name: 'John', age: 30, city: 'New York' };
// let result = getObjectKeys(exampleObject);
// console.log(result); 













// 7-masala

// let array = [5, 16, 7, 4, 10, 3, 4, 4, 14, 5, 14, 4, 44, 4];
// let filteredArray = array.filter(function(number) {
//     return number !== 4;
// });

// console.log(filteredArray); 







// 8-masala
// let exampleObject = {
//     key1: 10,
//     key2: 15,
//     key3: 20,
//     key4: 25,
//     key5: 30,
//     key6: 35
// };
// let valuesArray = [];
// for (let key in exampleObject) {
//     if (exampleObject.hasOwnProperty(key)) {
//         valuesArray.push(exampleObject[key]);
//     }
// }

// console.log("Qiymatlar ro'yxati: ", valuesArray); 
// let sum = valuesArray.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0);

// console.log("Qiymatlar yig'indisi: ", sum); 
