//array push() method in ts

let arr: number[] = [1, 2, 3, 4, 5];
arr.push(8);
let arrLength: number = arr.push(6); //it returns the length of the array
console.log(arr); //Output: [1, 2, 3, 4, 5, 6]
console.log(arrLength); //Output: 6