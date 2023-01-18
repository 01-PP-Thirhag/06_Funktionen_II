
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart :
3. Fkt. Grundrechenarten :
4. Ausgabe in Konsole : check!
*/

// modul division a / b  | test:
output(divide(10,2));
output(divide(20,10));
output(divide(100,0));
function divide(a,b){

if (b==0) {
return" teilen durch 0 nicht möglich" 
} else {
return a/b
}}


// module: multiply a * b |  test:
// output(multiply(2,3));
// output(multiply(2,-9));
// output(multiply(-1,-3));
// function multiply (a,b) {
// 	return a * b
//}


// module: subtraction a - b |  test:
// output(subtract(2,3));
// output(subtract(2,-9));
// output(subtract(-1,-3));
// function subtract (a,b) {
// 	return a - b
// }


// module:  addition a + b | test:
// output(add(2,3));
// output(add(2,-9));
// output(add(-1,-3));

// function add(a,b) {
// 	let c = a + b;
// 	return c; 	
// }

// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
