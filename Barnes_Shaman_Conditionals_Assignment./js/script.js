// Name: Shaman Barnes 
// Class: Scalable Data Infrastructures
// Assignment: Conditionals

var loanAmount 		= Number(prompt("Please enter your loan amount")); // User should enter there loan amount
var numberOfMonths 	= Number(prompt("Enter the amount of months")); // User should enter the amount of months for loan
var income			= Number(prompt("Enter your monthly income")); //  User should enter their monthly income

if (loanAmount <= 0 || isNaN(Number(loanAmount)) ); // if loan amount is not a number or less than 0
{
    var loanAmount = prompt("Please enter a valid loan amount");// prompt enter valid amount 
}

