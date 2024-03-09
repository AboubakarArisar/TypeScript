/*
Variable scopes in TypeScript:Here scope means the visibility of variable. The scope defines that we are able to access the variable or not. TypeScript variables can be of the following scopes:
Local Scope:As the name specified, are declared within the block like methods, loops etc. Local variables are accessible only within the construct where they are declared.
Global Scope:If the variable is declared outside the construct then we can access the variable anywhere. This is known as Global Scope.
Class Scope:If a variable is declared inside the class then we can access that variable within the class only.
*/

//Example

//Local Scope

function localScope() {
    let a = 10;
    console.log("local scope : "+ a);
}

localScope(); //Output: 10


//Global Scope

let g = 20;
function globalScope() {
    console.log("global scope : "+ g);
}

globalScope(); //Output: 20

//Class Scope

class ClassScope {
    c: number = 30;
    display() {
        console.log("class scope : "+ this.c);
    }
}

let obj = new ClassScope();
obj.display(); //Output: 30
//In the above example, variable a is declared inside the function localScope() so it is a local variable. Variable b is declared outside the function globalScope() so it is a global variable. Variable c is declared inside the class ClassScope so it is a class variable.//In the above example, variable a is declared inside the function localScope() so it is a local variable. Variable b is declared outside the function globalScope() so it is a global variable. Variable c is declared inside the class ClassScope so it is a class variable.
