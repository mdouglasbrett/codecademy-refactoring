laying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() *5+1);
var totalDamage = 0; 

while(slaying) {
	if (youHit == 1) {
		console.log("Congratulations, you killed the dragon!");
		totalDamage += damageThisRound;
		if (totalDamage >= 4) {
			console.log("Congratulations, you killed the dragon!");
		} else {
			youHit = Math.floor(Math.random() * 2);
		}
	} else {
		console.log ("Sorry pal, you're toast!");
	}
	slaying = false;
}
