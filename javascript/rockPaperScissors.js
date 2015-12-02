'use strict';

var userChoice = process.argv[2];

function computerChoice() {
	var decision;
	var rand = Math.floor((Math.random() * 3) + 1);
	
	if (rand == 1) {
	decision = "rock";
}
	else if (rand == 2) {
	decision = "paper";
}
	else {
	decision = "scissors";
}
	return decision
}

function compare(a, b) {
	
	if(a == b) { 
	console.log("The result is a tie!");
	return;
	}

	if(a == "rock") {
		
		if(b == "scissors") { 
			console.log("rock wins");
		} else {
			console.log("paper wins");
		}
		}
	if(a == "paper") {
		if(b == "rock") {
			console.log("paper wins");
		} else {
			console.log("scissors wins");
			}
		}
	if(a == "scissors") {
		if (b == "rock") {
			console.log("rock wins");
		} else {
			console.log("scissors wins");
			}
		}
};

compare(userChoice, computerChoice());
