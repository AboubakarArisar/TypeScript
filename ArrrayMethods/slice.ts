//array slice method in ts

let arry: number[] = [1, 2, 3, 4, 5];
let arr1: number[] = arry.slice(0, 3);//last parameter is exclusive
let arr2: number[] = arry.slice(3); //single parameter means it will slice from that index to the end of the array
console.log(arr1); //Output: [1, 2, 3]
console.log(arr2); //Output: [4, 5]