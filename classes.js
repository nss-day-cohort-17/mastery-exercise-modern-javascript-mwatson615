var modelObj = {}

//create a base robot function
function Robot(name) {
	this.name = null;
	// this.type = null;
	// this.model = null;
	// this.inflictDamage = null;
	// this.health = null;

	this.toString = function() {
		return this.name;
	}
}
function getRandomNumber(lower, upper) {
	var randomNumber = Math.floor(Math.random() * (upper - lower + 1) + lower);
	return randomNumber;
}

//define 3 robot type functions
//each type must have a unique property aka aerial or ground-based

//1. Aerial

function Aerial(type) {
	this.type = "aerial";
}
Aerial.prototype = new Robot();
//2. Water
function Water(type) {
	this.type = "water";
}

Water.prototype = new Robot();
//3. Land
function Land(type) {
	this.type = "land";
}

Land.prototype = new Robot();
//***********************************

//define at least 2 specific robot model functions for each type
//give each robot model a unique range of health
//give each robot model a unique range of damage

//Aerial Type Models
modelObj.RoboSatan = function (health, inflictDamage, model, weapon) {
	this.health = getRandomNumber(80, 120);
	this.inflictDamage = getRandomNumber(5, 15);
	this.model = "RoboSatan";
	this.weapon = "Vicious Taunting";
}
modelObj.RoboSatan.prototype = new Aerial();
var robosatan = new modelObj.RoboSatan();

modelObj.Evilbot = function (health, inflictDamage, model, weapon) {
	this.health = getRandomNumber(70, 130);
	this.inflictDamage = getRandomNumber(2, 20);
	this.model = "Evilbot";
	this.weapon = "Evil Eye";
}
modelObj.Evilbot.prototype = new Aerial();
var evilbot = new modelObj.Evilbot();

// *********************************
//Land Type Models

modelObj.Irritabot = function (health, inflictDamage, model, weapon) {
	this.health = getRandomNumber(90, 110);
	this.inflictDamage = getRandomNumber(5, 20);
	this.model = "Irritabot";
	this.weapon = "Scowling";
}
modelObj.Irritabot.prototype = new Land();
var irritabot = new modelObj.Irritabot();

modelObj.Surlybot = function (health, inflictDamage, model, weapon) {
	this.health = getRandomNumber(75, 100);
	this.inflictDamage = getRandomNumber(15, 20);
	this.model = "Surlybot";
	this.weapon = "Snarky Remarks";
}
modelObj.Surlybot.prototype = new Land();
var surlybot = new modelObj.Surlybot();

//**********************************
//Water Type Models

modelObj.Fluffy = function (health, inflictDamage, model, weapon) {
	this.health = getRandomNumber(50, 150);
	this.inflictDamage = getRandomNumber(5, 50);
	this.model = "Fluffy";
	this.weapon = "Cuddling";
}
modelObj.Fluffy.prototype = new Water();
var fluffy = new modelObj.Fluffy();

modelObj.Kittybot = function (health, inflictDamage, model, weapon) {
	this.health = getRandomNumber(75, 125);
	this.inflictDamage = getRandomNumber(10, 30);
	this.model = "Kittybot";
	this.weapon = "Claw Fury"

}
modelObj.Kittybot.prototype = new Water();
var kittybot = new modelObj.Kittybot();
