

//create a base robot function
var Robot = {}
Robot = function(name, type, model) {
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
//Types
//1. Aerial
//2. Water
//3. Land

// Robot.prototype.Aerial = function () {
// 	this.type = aerial;
// }


Robot.prototype.aerialType = function() {
	this.type = aerial;
	this.health + 20;
}

function(type, health) {
	this.type = aerial;
	this.health + 20;
}

Aerial.prototype = new Robot()

// Robot.prototype.Aerial = new Robot();
// Robot.prototype.Aerial = new Robot();

var evilBot = new Aerial()
console.log(evilBot.type)

//define 3 robot type functions

//EvilBot
//RoboSatan
//FluffyBot

//each type must have a unique property aka aerial or ground-based

//define at least 2 specific robot model functions for each type

//give each robot model a unique range of health

//give each robot model a unique range of damage
