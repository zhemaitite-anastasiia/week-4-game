
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
var win = 0;
var lost = 0;
var previous = 0;


var startGame = function() {

    $('.crystals').empty();
    var images = [
    "assets/images/img1.jpg",
    "assets/images/img2.jpg",
    "assets/images/img3.jpg",
    "assets/images/img4.jpg"]

    random_result = Math.floor(Math.random() * 101) + 19;
    //console.log(random_result);

    $("#result").html("NUMBER: " + random_result);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;


        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        crystal.css({
        	"background-image": "url('" + images[1] +  "')",
        	"background-size":"cover"

        });

        //crystal.html(random);

        $(".crystals").append(crystal);
    }

 $("#previous").html("Your total Score is: " + previous);
}

startGame();


$(document).on('click',".crystal", function() {

    var num = parseInt($(this).attr('data-random'));
    previous += num;

    $("#previous").html("Your total Score is: " + previous);
    console.log(previous);

    if (previous > random_result) {
        lost++;
        $("#lost").html("Loses: " + lost);
        previous = 0;
        
        startGame();


    } else if (previous === random_result) {
        win++;
        $("#win").html("Wins: " + win);
       
        previous = 0;
        startGame();


    }

});

