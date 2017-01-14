

//create a base robot function
function Robot(name, type, model) {
	this.name = null;
	this.type = null;
	this.model = null;
	this.specialPower = null;
	this.inflictDamage = null;
	this.takeDamage = null;
	this.health = 100;

	this.toString = function() {
		return this.name;
	}
}
//define 3 robot type functions
//1. Aerial

function Aerial() {
	this.type = "aerial";
	this.health + 20;
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
	this.health - 20;
}

Land.prototype = new Robot();
//***********************************

// var evilBot = new Aerial();
// var roboSatan = new Land();
// var fluffyBot = new Water();
// console.log(evilBot, roboSatan, fluffyBot)



//EvilBot
//RoboSatan
//FluffyBot

//each type must have a unique property aka aerial or ground-based

//define at least 2 specific robot model functions for each type

//give each robot model a unique range of health

//give each robot model a unique range of damage
