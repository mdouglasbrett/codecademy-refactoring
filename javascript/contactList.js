'use strict';

var friends = {
	bill: {
	firstName: "Bill",
	lastName: "Gates",
	number: "0207 352 6040",
	address: ['One Microsoft Way', 'Redmond', '98052']
	},
	steve: {
	firstName: "Steve",
	lastName: "Jobs",
	number: "0207 590 9040",
	address: ['300 Kings Road', 'Chelsea', 'London', 'SW3 5UH']
	}
};

function list() {

	for (var firstName in friends) {
		console.log(firstName);
	}

}

function search(name) {
	
	for (var key in friends) {
		if (friends[key].firstName == name) {

		console.log(friends[key]);
		return friends[key];
	} else {
		console.log('Not found');
	}
	
}
}

list();
search('Bill');
