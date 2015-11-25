var workTime = prompt("You are very behind on your work. Do you KNUCKLE DOWN, FUCK ABOUT or SACK IT OFF?").toUpperCase();
switch(workTime) {
	case 'FUCK ABOUT':
		var fuckIt = prompt("Are you sure? YES or NO?").toUpperCase();
		if (fuckIt === 'YES' || fuckIt === 'NO') {
			console.log("Dude! Quit fucking around and do some work!");
		} 
		break;
		case 'SACK IT OFF':
			var sackIt = prompt("Are you sure? YES or NO?").toUpperCase();
			if (sackIt ==='YES' || sackIt === 'NO' ) {
				console.log("Dude! Quit fucking around and do some work!");
			} 
			break;
			case 'KNUCKLE DOWN':
				var knuckIt = prompt("Are you sure? YES or NO?").toUpperCase();
			if (knuckIt ==='YES' && 'NO') {
				console.log("At least YOU know what time it is!");
			} else {
				console.log("knock it off!");
			}
			break;
			default:
			console.log("That shit isn't helpfull. At all!");
			break;
}
