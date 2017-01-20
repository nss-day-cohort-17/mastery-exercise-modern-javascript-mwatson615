
var robotArray = [robosatan, evilbot, irritabot, surlybot, fluffy, kittybot];

var playerHealth;
var opponentHealth;
var playerRobot;
var playerRobot;
var opponentRobot;

//when UI first loads, provide 2 text inputs to name the robots for battle

//provide a select element under each text input to select one of the 6
//defined robot models

function createOptions() {
	for(i = 0; i < robotArray.length; i++) {
		 $('.playerClasses').append(`<option>${robotArray[i].model}</option>`);
		 $('.opponentClasses').append(`<option>${robotArray[i].model}</option>`);
	}
}
createOptions();


//get name input and robot model to proceed to battle
//which Robot selected
$('.battlebtn').click(function() {
	$('.setup-card').addClass('hidden');
	$('.battle-card').removeClass('hidden');
	createPlayer();
	createOpponent();
})



//create player robot
function createPlayer() {
	var playerSelect = $('.playerClasses').val();
	playerRobot = new modelObj[playerSelect]();
	playerRobot.name = $('#playerNameInput').val();
	return playerRobot;
}
//create opponent robot
function createOpponent() {
	var opponentSelect = $('.opponentClasses').val();
	opponentRobot = new modelObj[opponentSelect]();
	opponentRobot.name = $('#opponentNameInfo').val();
	return opponentRobot;
}

//create an attack! button
	//when clicked, applies the damage output to opponent
$('.attackbtn').click(() => {
	if (opponentHealth < 0 || playerHealth < 0) {
	$('.announcements').append(`<h2>${playerRobot.name} defeats ${opponentRobot.name}<br> with ${playerRobot.weapon}<br> attack</h2>`)
	}else if (playerHealth < 0) {
		$('.announcements').append(`<h2>${opponentRobot.name} defeats ${playerRobot.name}<br> with ${opponentRobot.weapon}<br> attack</h2>`)
	} else {
	inflictDamage();
	takeDamage();
	}
});

//once either robot's health is less than 0, display a message that the battle is over
//message says who won and if possible, with what implement

function inflictDamage() {
	opponentHealth = opponentRobot.health -= playerRobot.inflictDamage;
	if (opponentHealth > 0) {
	$('nav').append(`<p class="text-left">${playerRobot.name} attacks ${opponentRobot.name} for ${playerRobot.inflictDamage} damage</p>`)
	}
}

function takeDamage() {
	playerHealth = playerRobot.health -= opponentRobot.inflictDamage;
	if (playerHealth >= 0) {
	$('nav').append(`<p class="text-right">${opponentRobot.name} attacks ${playerRobot.name} for ${opponentRobot.inflictDamage} damage</p>`)
	}
}
