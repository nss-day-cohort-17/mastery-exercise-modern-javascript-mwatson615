console.log("hi");

var newPlayer;
var newOpponent;



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
	var playerName = $('#playerNameInput').val();
	var opponentName = $('#opponentNameInfo').val();
	var playerRobot = $('.playerClasses').val();
	var opponentRobot = $('.opponentClasses').val();
	
	// console.log(playerName + playerRobot + opponentName + opponentRobot);


}

$('.battlebtn').click(function() {
	console.log("battle")
	$('setup-card').addClass('hidden');
	$('battle-card').removeClass('hidden');
	selectRobots();

})

//create an attack! button
	//when clicked, applies the damage output to opponent

//once either robot's health is less than 0, display a message that the battle is over
//message says who won and if possible, with what implement
