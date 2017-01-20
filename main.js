console.log("hi");

var newPlayer;
var newOpponent;
// var attackTimeout = setTimeout(inflictDamage, 1500);
// var damageTimeout = setTimeout(takeDamage, 1750)
let playerHealth;

var newPlayerClass;
var robotArray = [robosatan, evilbot, irritabot, surlybot, fluffy, kittybot];

//when UI first loads, provide 2 text inputs to name the robots for battle

//provide a select element under each text input to select one of the 6
//defined robot models

function createOptions() {
	for(i = 0; i < robotArray.length; i++) {
		// var robotOptions = '<option>'
		 $('.playerClasses').append(`<option>${robotArray[i].model}</option>`);
		 // .after(${robotArray[i]});
		 $('.opponentClasses').append(`<option>${robotArray[i].model}</option>`);
// console.log(robotArray[i]);
	}


}
createOptions();
//get name input and robot model to proceed to battle
//which Robot selected

function selectRobots() {
	// $('battlebtn').click(function() {
	// var playerName = $('#playerNameInput').val();
	var opponentName = $('#opponentNameInfo').val();
	// var playerRobotClass = $('.playerClasses').val(); //gets select option
	var opponentRobotClass = $('.opponentClasses').val(); //gets select option
}
$('.battlebtn').click(function() {
	console.log("battle")
	$('.setup-card').addClass('hidden');
	$('.battle-card').removeClass('hidden');
	createPlayer();
	createOpponent();
	selectRobots();
	battleFunction(createPlayer, createOpponent);

})

function createPlayer() {
	//create player robot
	var playerSelect = $('.playerClasses').val();
	var playerRobot = new modelObj[playerSelect]()
	playerRobot.name = $('#playerNameInput').val();
	return playerRobot;
}
//create opponent robot
function createOpponent() {
	var opponentSelect = $('.opponentClasses').val();
	var opponentRobot = new modelObj[opponentSelect]();
	opponentRobot.name = $('#opponentNameInfo').val();
	return opponentRobot;
	// console.log(opponentRobot.health)
}
//once either robot's health is less than 0, display a message that the battle is over
//message says who won and if possible, with what implement
function battleFunction() {

function inflictDamage() {
	let opponentHealth = opponentRobot.health -= playerRobot.inflictDamage;


// $('.announcements').append(`<p>${playerRobot.name} attacks ${opponentRobot.name} for ${playerRobot.inflictDamage} damage</p>`)

// 	if (opponentHealth < 0) {
// 		$('.announcements').append(`<p>${playerRobot.name} destroys ${opponentRobot.name} with ${playerRobot.weapon}</p>`)
// 	}
}
//create an attack! button
	//when clicked, applies the damage output to opponent
$('.attackbtn').click(() => {
	opponentRobot.health - playerRobot.inflictDamage;
	console.log(opponentRobot.health)
});


function takeDamage() {
	var playerHealth = playerRobot.health - opponentRobot.inflictDamage;
	$('.announcements').append(`<p>${opponentRobot.name} attacks ${playerRobot.name} for ${opponentRobot.inflictDamage} damage</p>`)
	if (playerHealth < 0) {
		$('.opponentWin').removeClass('hidden');
		$('.announcements').append(`<p>${opponentRobot.name} destroys ${playerRobot.name} with ${opponentRobot.weapon}</p>`)

	}
}
}
