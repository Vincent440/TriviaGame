//-------------------------Start of Space Trivia Game Javascript----------------------------
//------------------------------------------------------------------------------------------
//------------------------------GLOBAL VARIABLE DECLARATION---------------------------------
//----------------------------initiate each required variable-------------------------------
//a Question object with answer arrays.
//-answersCorrect
//-answersWrong
//-answersNotChecked
//----------------------------------Function creation--------------------------------------
//start timer function -connected to start button- that begins a timer to countdown
//hides button on click 
//when timer ends/ Once an answer is selected.-----------
//  if answer clicked is correct
//else if the answer is incorrect
//else/ no answer is checked
//store this is a variable
//function to build DOM objects to store questions and answers in
//
//that is called by click of start button and end of each countdown


function myTimer() {
    var count=30;
    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
    function timer() {
    count=count-1;
    if (count <= 0)  {
     clearInterval(counter);//counter ended, do something here
     console.log("Times UP!");
     $("#timer").html("Time is up!")

     return;
    }
    console.log(count + " Seconds");
    $("#timer").html(count + " Seconds ")
    }
}
//--------------------------------------------------------------------------------------
//----------------------------Document Ready--------------------------------------
//click event for start button to begin timer and dom push each question
//place the required logic here to have everything load after entire document loads
//
$(document).ready(function() {
    console.log("page loaded");
    $("button").on("click", function() {
    console.log("Click event");
    myTimer();
    $("#startBtn").hide(this);
    console.log("button hidden");
})
    
});