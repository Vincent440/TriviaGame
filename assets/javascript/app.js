/*eslint-env browser*/
/*global $*/
//-------------------------Start of Space Trivia Game Javascript----------------------------
//Link to live file https://vincent440.github.io/TriviaGame/
//------------------------------GLOBAL VARIABLE DECLARATION---------------------------------
var correctAnswer, //-answersCorrect
  wrongAnswer, //-answersWrong
  noAnswer = 8, //-answersNotChecked
  counter,
  count;//a Question array , with an Object for each question with answer arrays.
var questionsObject = [
  {
    question: "Who was the first human to enter space?",
    correctAnswer: 1,
    choices: [
      "Wrong Answer One!",
      "Correct Answer!",
      "Wrong Answer Two!",
      "Wrong Answer Three!"
    ]
  },
  {
    question: "What was the first animal to be launched into space?",
    correctAnswer: 0,
    choices: [
      "Correct Answer!",
      "Wrong Answer One!",
      "Wrong Answer Two!",
      "Wrong Answer Three!"
    ]
  },
  {
    question: "Who was the first man on the moon?",
    correctAnswer: 1,
    choices: [
      "Wrong Answer One!",
      "Correct Answer!",
      "Wrong Answer Two!",
      "Wrong Answer Three!"
    ]
  },
  {
    question: "First American Astronaut to enter orbit?",
    correctAnswer: 0,
    choices: [
      "Correct Answer!",
      "Wrong Answer One!",
      "Wrong Answer Two!",
      "Wrong Answer Three!"
    ]
  },
  {
    question: "What is the most expensive US Space program mission?",
    correctAnswer: 2,
    choices: [
      "Wrong Answer Two!",
      "Wrong Answer One!",
      "Correct Answer!",
      "Wrong Answer Three!"
    ]
  },
  {
    question: "How many Spacecraft have left the Solar System?",
    correctAnswer: 0,
    choices: [
      "Correct Answer!",
      "Wrong Answer One!",
      "Wrong Answer Two!",
      "Wrong Answer Three!"
    ]
  },
  {
    question: "What year did the United States Place a man into Orbit?",

    correctAnswer: 1,
    choices: [
      "Wrong Answer One!",
      "Correct Answer!",
      "Wrong Answer Two!",
      "Wrong Answer Three!"
    ]
  },
  {
    question: "What was the First Satellite in Orbit of the Earth?",
    correctAnswer: 3,
    choices: [
      "Wrong Answer Three!",
      "Wrong Answer One!",
      "Wrong Answer Two!",
      "Correct Answer!"
    ]
  }
];
//----------------------------------Function creation--------------------------------------
//start timer function -connected to start button- that begins a timer to countdown hides button on click
// started counter variable in global scope to control my timer outside of the function. 

function myTimer() {
  console.log("timer started");
  count = 30;
  counter = setInterval(timer, 1000); //1000 will  run it every 1 second
  function timer() {
    count = count - 1;
    if (count <= 0) {
      console.log("Times UP!");
      //CALL FUNCTION TO(to do same as finish button):
      //LOG USER ANSWERED QUESTIONS CORRECT||WRONG||NOT ANSWERED
      //DISPLAY RESULT PAGE with those variables
      endGameGenerateResults();
      return;
    }
    console.log(count + " Seconds");
    $("#timer").html(count + " Seconds ");
  }
}
//function to display questions and answers to screen after start button clicked
 function questionPlacement() {

   for (var questionIndex = 0 ; questionIndex < questionsObject.length ; questionIndex++ ) {

    var question = questionsObject[questionIndex];//sets question to the question in the index of array
    var questiontext = question.question;//gives me a handle on the individual question text
    var questionDivs = $("<div>"+questiontext+"</div>");//builds div and places question inside
    var choices = question.choices;
    $("#gamebox").append(questionDivs);
  
    for (let choiceIndex = 0 ; choiceIndex < choices.length; choiceIndex++ ){

      var choice = choices[choiceIndex];//handle to grab the specific answer
      //need input to place answer choices into 
      //must only allow One answer to be selected
      
    }
  }
 }

function gameOverHideGameBox(){//function to hide questions and answers before results show on screen
  $("#gamebox").hide();
}

function endGameGenerateResults(){//function to be called from end button or end timer
  //conditional statement to check answers(correctAnswer == choice) and store them in the variables
  clearInterval(counter); //CLEAR TIMER
  $("#endGameBtn").hide(); //hides the button before displaying results page
  $("#timer").html("Game over!");

  gameOverHideGameBox();//hides questions and answers after storing results 
  //Inside of this function I will need to call on a function to determine the results 
  //then push those results into the HTML 


}

//----------when timer ends-----||-------CLICK [DONE/FINISH] BUTTON.-----------
//Inside gameResults function
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
    //On start click Call function to display questions and answers 
    questionPlacement();
  });

  $("#endGameBtn").on("click", function() {
    console.log("End button clicked");
    console.log("button hidden");
    //call function to hide Questions & Answers & Display results
    endGameGenerateResults();
  });
});
