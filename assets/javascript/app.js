/*eslint-env browser*/
/*global $*/

//-------------------------Start of Space Trivia Game Javascript----------------------------
//Link to live file https://vincent440.github.io/TriviaGame/
//------------------------------GLOBAL VARIABLE DECLARATION---------------------------------
var correctAnswer, //-answersCorrect
  wrongAnswer, //-answersWrong
  noAnswer = 8, //-answersNotChecked
  counter,
  count; //a Question array , with Objects for each question with answer arrays.
var questionsObject = [
  {
    question: "Who was the first human to enter space?",
    correctAnswer: 1,
    choices: [
      "Neil Armstrong",
      "Yuri Alekseyevich Gagarin ", //(CORRECT)
      "Buzz Aldrin",
      "Alan Shepard"
    ]
  },
  {
    question: "What was the first animal to be launched into space?",
    correctAnswer: 0,
    choices: [
      "A Rhesus monkey", //(CORRECT)
      "A Dog",
      "A Chimpanzee",
      "A Cat"
    ]
  },
  {
    question: "Who was the first man on the moon?",
    correctAnswer: 1,
    choices: [
      "Buzz Alrin",
      "Neil Armstrong", //(CORRECT)
      "John Glenn",
      "Alan Shepard"
    ]
  },
  {
    question: "First American Astronaut to enter orbit?",
    correctAnswer: 0,
    choices: [
      "John Glenn", //CORRECT
      "Neil Armstrong",
      "Alan Shepard",
      "Buzz Aldrin"
    ]
  },
  {
    question: "What is the most expensive US Space program mission?",
    correctAnswer: 2,
    choices: [
      "SLS and Orion",
      "International Space Station",
      "Space Shuttle Program", //CORRECT
      "Apollo Space Program"
    ]
  },
  {
    question: "How many Spacecraft have left the Solar System?",
    correctAnswer: 0,
    choices: [
      "2", //CORRECT
      "1",
      "3",
      "4"
    ]
  },
  {
    question: "What year did the United States Place a man into Orbit?",

    correctAnswer: 1,
    choices: [
      "1959",
      "1962", //CORRECT
      "1963",
      "1961"
    ]
  },
  {
    question: "What was the First Satellite in Orbit of the Earth?",
    correctAnswer: 3,
    choices: [
      "Soyuz",
      "Mir",
      "Explorer 1",
      "Sputnik I" //CORRECT
    ]
  }
];
//----------------------------------Function creation--------------------------------------
//start timer function -connected to start button- that begins a timer to countdown hides button on click
// started counter variable in global scope to control my timer outside of the function.

function myTimer() {
  console.log("timer started");
  count = 60;
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
    // console.log(count + " Seconds");
    $("#timer").html(count + " Seconds ");
  }
}
//function to display questions and answers to screen after start button clicked
function callToPlaceQuestionOnPage() {
  for (
    var myCurrentQuestionIndex = 0;
    myCurrentQuestionIndex < questionsObject.length;
    myCurrentQuestionIndex++
  ) {
    var myCurrentQuestion = questionsObject[myCurrentQuestionIndex]; //Places handle to current Questionthats in the index of array
    var questiontext = myCurrentQuestion.question; //gives me a handle on the individual ??question?? text
    var questionHeaders = $("<h3>"); //builds div and places ???question?? inside
    


    var choices = myCurrentQuestion.choices;
    questionHeaders.attr("class","myQuestions");
    $("#gamebox").append(questionHeaders);

    $(questionHeaders).html(questiontext);
    
    console.log(questiontext);
    for (
      let theCurrentChoiceIndex = 0;
      theCurrentChoiceIndex < choices.length;
      theCurrentChoiceIndex++
    ) {
      var choiceOptions = choices[theCurrentChoiceIndex]; //handle to grab the specific answer
      console.log(choiceOptions);

      console.log(theCurrentChoiceIndex);

      var createRadio = $("<input type='radio'/>");

      createRadio.attr("value", choiceOptions);
      createRadio.attr("id",choiceOptions);
      createRadio.attr("name", myCurrentQuestionIndex);

      
      var createLabels = $("<label>"+choiceOptions+"</label>")
      createLabels.attr("for",choiceOptions);
      createLabels.attr("class","myAnswerRadios");//radio and input labels
      $("#gamebox").append(createLabels);

      $("#gamebox").append(createRadio);

      $("#gamebox").append("<br>");
    }
  }
}

function gameOverHideGameBox() {
  //function to hide questions and answers before results show on screen
  $("#gamebox").hide();
  $("#resultbox").show();
}

function endGameGenerateResults() {
  //function to be called from end button or end timer
  //conditional statement to check answers(correctAnswer == choice) and store them in the variables
  clearInterval(counter); //CLEAR TIMER
  

  $("#endGameBtn").hide(); //hides the button before displaying results page
  $("#timerBox").html("Game over!");
  $("#userMessage").text("I haven't actually gotten this far yet :( I bet you did good though!")
  gameOverHideGameBox(); //hides questions and answers after storing results
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
    $("#timer").html("START!!!");

    console.log("Start button clicked");
    myTimer();
    $("#startBtn").hide();
    console.log("button hidden");
    $("#endGameBtn").show();
    $("#resultbox").removeAttr("style","visibility");
    $("#resultbox").hide();

    //On start click Call function to display questions and answers
    callToPlaceQuestionOnPage();
  });

  $("#endGameBtn").on("click", function() {
    console.log("End button clicked");
    console.log("button hidden");
    //call function to hide Questions
    //will need to have this button call the function that does the same as if the timer ends. Displaying results to screen after taking in only one input for each question.

    endGameGenerateResults();
  });
});
