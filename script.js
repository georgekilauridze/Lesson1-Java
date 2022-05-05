///lesson 1, ex 6///

// let array = [[2, -3, 5, 10],[25, -24, -11, 100],[-6, -7, 10]]


// for (let x = 0; x < array.length; x++) {
//     let numbers = array[x];
//     for (let x = 0; x < numbers.length; x++) {
//         let positive = numbers[x];

//         if (positive > 0) {
//             console.log(positive);
//         }
//     }
// }

/// ex 7 ///

// let array = [32, 10, 'hello', null, 'hello2', 50]

// for (let x = 0; x < array.length; x++) {
//     const element = array[x];
    
//     if (typeof element == 'number' && element % 5 == 0) {
//         console.log(element);
//     }
// }

/// Lesson 2 ex 1 //


// function sum (...numbers) {
//     let newSum = 0;
//     for (let item of numbers) {
//         if (item > 0) {
//             newSum = newSum + item;
//         }
//     }
//     // console.log(newSum);
//     return newSum;
// }

// // sum (2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);

// let result = sum (2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);


// console.log(result);

/// Lesson 2 ex 2 //

// sum (10, 50, 6, 7, 8, 11, 6, 3, 9)  ///igove if piroba ar ikneba


/// Lesson 2 ex 3 //

// let user = {
//     firstname: 'giorgi',
//     lastname: 'saakadze',
//     age: 32,
//     isloggedin: true
// }

// function printName(obj) {
//     if (obj.isloggedin) {
//         return obj.firstname + ' ' + obj.lastname;
//     }
//     return false;
// }

// let resultPrintName = printName(user)
// console.log(resultPrintName);


/// Lesson 2 ex 4 //

// function getMax(numbers) {
//     let maxValue = 0;
//     for (let index = 0; index < numbers.length; index++) {
//         const x = numbers[index];
//         if (x > maxValue) {
//             maxValue = x;
//         }
        
//     }
//     return maxValue;
// }
// console.log(getMax ([3, 102, 54, 36, 120, 8]));


/// Lesson 3 ex 6 //


