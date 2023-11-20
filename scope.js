numbers = [1, 2, 3, 4, 5];

//Block
// for (number of numbers){
//     console.log("value of number variable inside loop:", number);
// }

// console.log("value of number variable outside loop:", number);

//Lixical 

// let runningTotal = 0;

// for(let number of numbers){
//     runningTotal += number;
//     console.log("value of runningTotal inside loop:", runningTotal);
// }

//console.log("value of runningTotal outside loop", runningTotal);

const numbersSquared = [];

for (const number of numbers){
    numbersSquared.push(number ** 2);
}

console.log(numbersSquared);