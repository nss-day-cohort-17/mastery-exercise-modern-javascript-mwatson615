
//create a base robot function
function Robot(name, type, model) {
	this.name = name;
	this.type = type;
	this.model = model;
	this.power = power;
	this.inflictDamage = inflictDamage();
	this.takeDamage = takeDamage();
	this.health = health;

	this.toString = function() {
		return this.name;
	}
}



console.log(Robot)

//define 3 robot type functions

//EvilBot
//RoboSatan
//FluffyBot

//each type must have a unique property aka aerial or ground-based

//define at least 2 specific robot model functions for each type

//give each robot model a unique range of health

//give each robot model a unique range of damage
