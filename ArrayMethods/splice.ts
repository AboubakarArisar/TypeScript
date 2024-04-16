//array splice method in ts

let ary: number[] = [1, 2, 3, 4, 5];
let removed = ary.splice(2, 0, 6 ); //insert 6 at index 2
console.log(ary); //Output: [1, 2, 6, 3, 4, 5]
console.log(removed); //Output: []