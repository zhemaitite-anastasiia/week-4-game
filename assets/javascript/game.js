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


var number;
var winCount = 0;
var loseCount = 0;
var score;

function startGame(){
	//Generate number for the first crystal
	$(".fcol3").on("click", function(){
		var random =[Math.floor(Math.random() * 12) + 1];

	})
	//Generate number for the second crystal
	$(".fcol4").on("click", function(){
		var random =[Math.floor(Math.random() * 12) + 1];

	})
	//Generate number for the third crystal
	$(".fcol5").on("click", function(){
		var random =[Math.floor(Math.random() * 12) + 1];

	})
	//Generate number for the fourth crystal
	$(".fcol6").on("click", function(){

		var random =[Math.floor(Math.random() * 12) + 1];

	})

	//Generate the random Number

	var number = ".fcol1"
	var number = Math.floor(Math.random() * 120) +19;
	


}
