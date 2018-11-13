// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */


$("#shoot").click(function(){
     userChoice=$("userChoice").val()
      var randomNumber = Math.random()
    $("#userChoice").text(userChoice);
    
    if(randomNumber >.666) {
        $("#computerChoice").text("rock");
    }else if(randomNumber <.666 && randomNumber >.333){
        $("#computerChoice").text("paper")        
    }else if(randomNumber <.333){
        $("#computerChoice").text("paper");
    } 
});




// DOCUMENT READY FUNCTION BELOW

var userChoice= ""

var computureChoice= ""

var winner= ""

