// Name: Shaman Barnes 
// Class: Scalable Data Infrastructures
// Assignment: functions Assignment



function genRanPowerballNum(min, max, num) {

    var powerballArray = [];

    for (var i = 0; i < num; i++) {

    	var ranNum = Math.random() * (max - min) + min;

        while (powerballArray.indexOf(Math.round(ranNum)) > -1) {
            ranNum = Math.random() * (max - min) + min;

        }
        powerballArray[i] = Math.round(ranNum);

    }
    return powerballArray;
   }
var numberOfTickets = Number(prompt("Enter the amount of tickets you would like to purchase. "));