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


var reset = function(){
	$('.crystals').empty();
	var images = ["assets/images/img1.jpg",
	"assets/images/img2.jpg",
	"assets/images/img3.jpg",
	"assets/images/img4.jpg",
	 ]
}

random_result = Math.floor(Math.random() * 101) +19;
//console.log(random_result);

$("#result").html("NUMBER: " + random_result);

for (var i=0; i<4; i++){

	var random =Math.floor(Math.random() * 11) + 1;
	

	var crystal = $("<div>");
	crystal.attr({
		"class": 'crystal', "data-random":random});

	$(".crystals").append(crystal);	
}

$(".crystal").on('click', function(){
	var result;
	var num = $(this).attr('data-random');
	
});


//function startGame(){
	//Generate number for the first crystal
	
		//var random =[Math.floor(Math.random() * 12) + 1];

	
	

	//Generate the random Number

	
	//var number = Math.floor(Math.random() * 120) +19;
	   //  then reveal number in the html
         


