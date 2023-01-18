
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart :
3. Fkt. Grundrechenarten :
4. Ausgabe in Konsole : check!
*/

// Konstanten
const ERROR_STR_DIV = "Division durch 0 nicht möglich" 
const ERROR_STR_GEN = "irgendetwas ging schief!"

// module: calculator | test:
// agreement: "+","-","*",":"
output(calculator(3,2,"+"));
output(calculator(3,2,"-"));
output(calculator(3,2,"*"));
output(calculator(3,2,":"));
output(calculator(3,2,"/"));
output(calculator(3,0,"/"));
output(calculator(3,2,"&%"));

function calculator(a,b,op) {
	
	switch (op) {
		case "+": // addiion
			return "Ergebnis addition"
		case "-": // subtraction
			return "Ergebnis subtraction"
		case "*": // multiplikation
			return "Ergebnis multiplikation"
		case ":": // division
		case "/": // division
			return "Ergebnis division"
		default:
			return ERROR_STR_GEN
	}
	
	}

// modul division a / b  | test:
// output(divide(10,2));
// output(divide(20,10));
// output(divide(100,0));
// function divide(a,b) {

// 	if (b==0) {
// 		return ERROR_STR_DIV;
// 	} else {
// 		return a/b
// 	}
// }
//Konstante Var 2
// if (b==0) {
// 	return ERROR_STR_DIV;
// 	return a/b
// }


// module: multiply a * b |  test:
// output(multiply(2,3));
// output(multiply(2,-9));
// output(multiply(-1,-3));
function multiply (a,b) {
// 	return a * b
}


// module: subtraction a - b |  test:
// output(subtract(2,3));
// output(subtract(2,-9));
// output(subtract(-1,-3));
function subtract (a,b) {

	return a - b
}


// module:  addition a + b | test:
// output(add(2,3));
// output(add(2,-9));
// output(add(-1,-3));

function add(a,b) {
	let c = a + b;
	return c; 	
}

// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
