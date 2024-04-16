//passing an array to the function in typescript

let ar:string[] = new Array("GEEKSFORGEEKS", "2300", "Java", "Abhishek"); 

// Passing an Array in a function 
function display(arr_values:string[]) { 
for(let i = 0;i<arr_values.length;i++) { 
	console.log(arr[i]); 
}	 
} 

// Calling an Array in a function 
display(ar);
