

//create a base robot function
function Robot(name, type, model) {
	this.name = null;
	this.type = null;
	this.model = null;
	this.inflictDamage = null;
	this.health = null;

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
	this.health = getRandomNumber(80, 120);
	this.inflictDamage = getRandomNumber(5, 15);
	this.model = "RoboSatan";
	this.weapon = "Vicious Taunting";
}
RoboSatan.prototype = new Aerial();
var robosatan = new RoboSatan();

function Evilbot() {
	this.health = getRandomNumber(70, 130);
	this.inflictDamage = getRandomNumber(2, 20);
	this.model = "Evilbot";
	this.weapon = "Evil Eye";
}
Evilbot.prototype = new Aerial();
var evilbot = new Evilbot();

// *********************************
//Land Type Models

function Irritabot() {
	this.health = getRandomNumber(90, 110);
	this.inflictDamage = getRandomNumber(5, 20);
	this.model = "Irritabot";
	this.weapon = "Scowling";
}
Irritabot.prototype = new Land();
var irritabot = new Irritabot();

function Surlybot() {
	this.health = getRandomNumber(75, 100);
	this.inflictDamage = getRandomNumber(15, 20);
	this.model = "Surlybot";
	this.weapon = "Snarky Remarks";
}
Surlybot.prototype = new Land();
var surlybot = new Surlybot();

//**********************************
//Water Type Models

function Fluffy() {
	this.health = getRandomNumber(50, 150);
	this.inflictDamage = getRandomNumber(5, 50);
	this.model = "Fluffy";
	this.weapon = "Cuddling";
}
Fluffy.prototype = new Water();
var fluffy = new Fluffy();

function Kittybot() {
	this.health = getRandomNumber(75, 125);
	this.inflictDamage = getRandomNumber(10, 30);
	this.model = "Kittybot";
	this.weapon = "Claw Fury"

}
Kittybot.prototype = new Water();
var kittybot = new Kittybot();
