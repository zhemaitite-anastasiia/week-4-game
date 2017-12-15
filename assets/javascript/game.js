//crystals should be buttons
//random number should appear on the start of the game
//player clicks on crystal , the total score should be updated with the number
//score counter should be all the time updqated with the score
//if the total score =random number , player wins
//if the total score > random number , player loses
//game restart when player wins or loses and the score should be 0
//wins or loses should show the results
//random number between 19-120
//crystal random number between 1-12


var random_result;
var number;
var winCount = 0;
var loseCount = 0;
var score;

for (var i=0; i<4; i++){
	var crystal = $("<div>");
	crystal.attr("class", 'crystal');
	
	$(".crystals").append(crystal);

	
}


//function startGame(){
	//Generate number for the first crystal
	
		//var random =[Math.floor(Math.random() * 12) + 1];

	
	

	//Generate the random Number

	
	//var number = Math.floor(Math.random() * 120) +19;
	   //  then reveal number in the html
         


