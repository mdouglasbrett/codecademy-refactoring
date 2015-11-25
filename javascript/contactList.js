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
var list = function() {
	for (var firstName in friends) {
		console.log(firstName);
	}
};
var search = function(name) {
	for (var search in friends) {

		console.log(friends);
		return friends;
	}
	
};


