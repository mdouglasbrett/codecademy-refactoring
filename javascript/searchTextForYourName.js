/*jshint multistr:true */
var text = "what you you stupid mike dove dove dove blah blah mike mike dove fun fun";
var myName = "mike";
var hits = [];

for (var i = 0; i < text.length; i++) {
if (text[i] == "m") {
	for (var j = i; j < (myName.length + i); j++) {
 	hits.push(text[j]); 
}
}
}
if (hits === 0)	{
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
};
