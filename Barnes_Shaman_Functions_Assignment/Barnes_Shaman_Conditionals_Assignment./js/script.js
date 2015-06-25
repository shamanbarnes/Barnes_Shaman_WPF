// Name: Shaman Barnes 
// Class: Scalable Data Infrastructures
// Assignment: functions Assignment





var powerballLotteryRandom;   //Variable for lottery numbers 
var powerballRandom;          //Variable for powerball 

function genRanPowerballNum(min, max, num) {    //This function that generates the min and max numbers 

    var powerballArray = [];

    for (var i = 0; i < num; i++) {

    	var ranNum = Math.random() * (max - min) + min;  //Math.random generates random numbers for our lottery game

        while (powerballArray.indexOf(Math.round(ranNum)) > -1) { 
            ranNum = Math.random() * (max - min) + min;

        }
        powerballArray[i] = Math.round(ranNum);

    }
    return powerballArray; //Calling out the var powerball Array
   }
var numberOfTickets = Number(prompt("Enter the amount of tickets you would like to purchase. ")); //Asking the user to enter number of tickets 

for (var i = 0; i < numberOfTickets; i++)
{
    var tickects = genRanPowerballNum(1, 36, 6);
    console.log("Here is your lottery tickets "   + (i+1) + " - " + tickects  +   " good luck! "); //Printing out lottery numbers  
}

powerballLotteryRandom = genRanPowerballNum(1, 36, 5);    //Generating out lotto numbers form the return in the function 

powerballRandom = genRanPowerballNum(1, 35, 1);

console.log("Your Powerball lottery numbers are " + powerballLotteryRandom + ", and your Powerball number is " + powerballRandom + " good luck! ");
//printing out our powerball numbers 