//-------------------------Start of Space Trivia Game Javascript----------------------------
//------------------------------GLOBAL VARIABLE DECLARATION---------------------------------
var correctAnswer,//-answersCorrect
    wrongAnswer,//-answersWrong
    noAnswer=8;//-answersNotChecked
//a Question array , with an Object for each question with answer arrays.
var questions = [{
    question1: "The First Question Will Go Here?",
    choices1: ["Correct Answer!","Wrong Answer One!","Wrong Answer Two!","Wrong Answer Three!"],
    },
{
    question2: "The Second Question Will Go Here?",
    choices2: ["Correct Answer!","Wrong Answer One!","Wrong Answer Two!","Wrong Answer Three!"],
},
{
    question3: "The Third Question Will Go Here?",
    choices3: ["Correct Answer!","Wrong Answer One!","Wrong Answer Two!","Wrong Answer Three!"],
},
{
    question4: "The fourth Question Will Go Here?",
    choices4: ["Correct Answer!","Wrong Answer One!","Wrong Answer Two!","Wrong Answer Three!"],
},
{
    question5: "The fifth Question Will Go Here?",
    choices5: ["Correct Answer!","Wrong Answer One!","Wrong Answer Two!","Wrong Answer Three!"],
},
{
    question6: "The sixth Question Will Go Here?",
    choices6: ["Correct Answer!","Wrong Answer One!","Wrong Answer Two!","Wrong Answer Three!"],
},
{
    question7: "The seventh Question Will Go Here?",
    choices7: ["Correct Answer!","Wrong Answer One!","Wrong Answer Two!","Wrong Answer Three!"],
},
{
    question8: "The eighth Question Will Go Here?",
    choices8: ["Correct Answer!","Wrong Answer One!","Wrong Answer Two!","Wrong Answer Three!"]
}];
//----------------------------------Function creation--------------------------------------
//start timer function -connected to start button- that begins a timer to countdown hides button on click 
function myTimer() {
    console.log("timer started");
    var count=30;
    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
    function timer() {
    count=count-1;
    if (count <= 0)  {
     clearInterval(counter);//counter ended, do something here
     console.log("Times UP!");
     $("#timer").html("Time is up!")
     //LOG USER ANSWERED QUESTIONS CORRECT||WRONG||NOT ANSWERED
        //DISPLAY RESULT PAGE with those variables 
        

     return;
    }
    console.log(count + " Seconds");
    $("#timer").html(count + " Seconds ")
    }
}

//----------when timer ends-----||-------CLICK [DONE/FINISH] BUTTON.-----------

//FUNCTION THAT IS CALLED AT EITHER FINISH BUTTON CLICK EVENT OR TIMER ENDING

//Inside gameResults funcition 

//DO A CHECK 

//      how many correct answers

//      how many incorrect answers

//      how many unanswered remaining

//Take those 3 variables and push them to the html 
//----------------------------Document Ready--------------------------------------

$(document).ready(function() {

    console.log("page loaded");

    $("#startBtn").on("click", function() {

        console.log("Start button clicked");
        
        myTimer();
        $("#startBtn").hide();
        console.log("button hidden");
        $("#endGameBtn").show();

    })
    
    $("#endGameBtn").on("click", function() {

        console.log("End button clicked");

        $("#endGameBtn").hide();//       hides the button before displaying results page
        console.log("button hidden");

        //CLEAR TIMER
        //CONDITIONAL STATEMENT TO DETERMINE RESULTS OF PAGE
        //
        //OUTPUT OF GAME PUSHED TO SCREEN TO SHOW USER CORRECT WRONG AND NOT ANSWERED 


    })

});