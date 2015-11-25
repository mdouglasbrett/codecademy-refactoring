var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

add = function(firstName, lastName, phoneNumber, email) {
var newContact= {
firstName: firstName,
lastName: lastName,
phoneNumber: phoneNumber,
email: email
};
contacts[contacts.length] = newContact;
};

add("Davey", "Brett","555 555 5555", "bigDaveb@example.com");

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}
list()

