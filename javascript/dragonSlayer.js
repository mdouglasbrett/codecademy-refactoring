'use strict';

var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor((Math.random() * 5)+1);
var totalDamage = 0; 

while(slaying) {
	if (youHit) {
		console.log("A touch! You smote the dragon!");
		totalDamage += damageThisRound;
		if (totalDamage >= 4) {
			console.log("The dragon is dead, huzzah!");
			slaying = false;
	}
	}
	else {
		console.log ("Sorry pal, you're toast!");
        	slaying = false;
	}
}
