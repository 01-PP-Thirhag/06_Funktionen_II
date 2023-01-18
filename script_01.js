
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/

// Konstanten
const ERROR_STR_DIV = "Division durch 0 nicht möglich!";
const ERROR_STR_GEN = "Irgendetwas ging schief!"

function startApp() 
{
	output(calculator(getNumber1(),getNumber2(),getOp()));	
}
function getNumber1()
{
	return prompt("Zahl 1 eingeben");
}	
function getNumber2()
{
	return prompt("Zahl 2 eingeben");
}
function getOp()
{
	return prompt("Operator eingeben");
}


// module: calculator | tests:

function calculator(a,b,op) {
	switch (op) {
		case "+": // addition
			return add(a,b);
		case "-": // subtraktion
			return subtract(a,b);
		case "*": // multiplikation
			return multiply(a,b);
		case ":": // divison
		case "/": // divison
			return divide(a,b);
		default:
			return ERROR_STR_GEN;
	}
}
// module: division a / b |  test:
function divide(a,b) {
	if (b == 0) { 
		return ERROR_STR_DIV;
	} 
	return a / b;
}

// module: multiplication a * b |  test:
function multiply(a,b) {
    return a * b; 
}

// module: subtraction a - b |  test:
function subtract(a,b) {
	return a - b;
}

// module: addition a + b |  test:
function add(a,b) {
	let c = a + b;
	return c; 	
}

// module: output | test:
function output(outputData) {
	console.log(outputData);
}
