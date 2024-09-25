const Person = {
	fullname: "Omotola Jinadu",
	stateOfOrigin: "Lagos state",
	occupation: "Software Developer",
	talk: function () {
		console.log(`Hello guys, my name is ${this.fullname}`);
	},
	extraInformation: {
		martitalStatus: "Single",
		religion: "Muslim",
	},
};

// Dot Operator
// console.log(Person.fullname);
// console.log(Person.occupation);
// console.log(Person.stateOfOrigin);

// Square Bracket Notation
// console.log(Person["fullname"]);
// console.log(Person["occupation"]);
// console.log(Person["stateOfOrigin"]);

// You can modify the properties of an object
// Person.fullname = "Nancy";
// Person.stateOfOrigin = "Delta State";
// Person.occupation = "Frontend developer";
// console.log(Person);

// You can add properties to an object
// Person.gender = "male";
// Person.age = 35;
// console.log(Person);

// Object Methods
// Person.talk();

// Nested Objects
// console.log(Person.extraInformation.religion);
