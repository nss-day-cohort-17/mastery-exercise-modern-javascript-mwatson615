

//create a base robot function
function Robot(name, type, model) {
	this.name = null;
	this.type = null;
	this.model = null;
	this.specialPower = null;
	this.inflictDamage = null;
	this.takeDamage = null;
	this.health = null;

	this.toString = function() {
		return this.name;
	}
}
function getRandomNumber(lower, upper) {
	var randomNumber = Math.floor(Math.random() * (upper - lower + 1) + lower);
}

//define 3 robot type functions
//each type must have a unique property aka aerial or ground-based

//1. Aerial

function Aerial() {
	this.type = "aerial";
}
Aerial.prototype = new Robot();
//2. Water
function Water() {
	this.type = "water";
}

Water.prototype = new Robot();
//3. Land
function Land() {
	this.type = "land";
}

Land.prototype = new Robot();
//***********************************

//define at least 2 specific robot model functions for each type
//give each robot model a unique range of health
//give each robot model a unique range of damage

//Aerial Type Models

function RoboSatan() {
	this.health = getRandomNumber(80, 120)
	this.inflictDamage = getRandomNumber(5, 15)
}
RoboSatan.prototype = new Aerial();

function Evilbot() {
	this.health = getRandomNumber(70, 130);
	this.inflictDamage = getRandomNumber(2, 20);
}
Evilbot.prototype = new Aerial();

// *********************************
//Land Type Models

function Irritabot() {
	this.health = getRandomNumber(90, 110);
	this.inflictDamage = getRandomNumber(5, 20);
}
Irritabot.prototype = new Land();

function Surlybot() {
	this.health = getRandomNumber(75, 100);
	this.inflictDamage = getRandomNumber(15, 20);
}

//**********************************
//Water Type Models

function Fluffy() {
	this.health = getRandomNumber(50, 150);
	this.inflictDamage = getRandomNumber(5, 50);
}
Fluffy.prototype = new Water();

function Kittybot() {
	this.health = getRandomNumber(75, 125);
	this.inflictDamage = getRandomNumber(10, 30);
}
Kittybot.prototype = new Water();




//EvilBot
//RoboSatan
//FluffyBot
