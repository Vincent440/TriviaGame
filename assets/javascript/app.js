/*eslint-env browser*/
/*global $*/
//-------------------------Start of Space Trivia Game Javascript Link to live file https://vincent440.github.io/TriviaGame/ ----------------------------
var userCorrectPicks=0, //-answersCorrect
  userWrongAnswer=0, //-answersWrong
  noAnswer = 0, //-answersNotChecked
  counter, 
  count, //a Question array , with Objects for each question with answer arrays.
 questionsObject = [
  {
    question: "Who was the first human to enter space?",
    correctAnswer:"Yuri Alekseyevich Gagarin",
    choices: [ "Neil Alden Armstrong", "Yuri Alekseyevich Gagarin",
     "Edwin Eugene Aldrin Jr.", "Alan Barlett Shepard Jr." ]
  },
  {
    question: "What was the first animal to be launched into space?",
    correctAnswer: "A Rhesus monkey",
    choices: ["A Rhesus monkey", "A Dog", "A Chimpanzee", "A Cat" ]
  },
  {
    question: "Who was the first man on the moon?",
    correctAnswer: "Neil Armstrong",
    choices: [ "Buzz Alrin", "Neil Armstrong", "John Glenn", "Alan Shepard" ]
  },
  {
    question: "First American Astronaut to enter orbit?",
    correctAnswer: "John Herschel Glenn Jr.",
    choices: ["John Herschel Glenn Jr.", "Neil A. Armstrong",
    "Alan B. Shepard", "Dr. Rendezvous" ]
  },
  {
    question: "What is the most expensive US Space program mission?",
    correctAnswer: "Space Shuttle Program",
    choices: [ "SLS and Orion", "International Space Station",
      "Space Shuttle Program", "Apollo Space Program" ]
  },
  {
    question: "How many Spacecraft have left the Solar System?",
    correctAnswer: "2",
    choices: [ "2", "1", "3", "4" ]
  },
  {
    question: "What year did the United States Place a man into Orbit?",
    correctAnswer: "1962",
    choices: [ "1959", "1962", "1963", "1961" ]
  },
  {
    question: "What was the First Satellite in Orbit of the Earth?",
    correctAnswer: "Sputnik I",
    choices: [ "Soyuz", "Mir", "Explorer 1", "Sputnik I" ]
  }
];
function myTimer() {
  count = 90;
  counter = setInterval(timer, 1000); //1000 will  run it every 1 second
  function timer() {
    count = count - 1;
    if (count <= 0) {
      endGameGenerateResults();
      return;
    }
    $("#timer").html(count + " Seconds ");
    $("#timer2").html(count + " Seconds ");
  }
}
function callToPlaceQuestionOnPage() {//function to display questions and answers to screen after start button clicked
  for ( var myCurrentQuestionIndex = 0;
    myCurrentQuestionIndex < questionsObject.length; myCurrentQuestionIndex++ ) {
    var myCurrentQuestion = questionsObject[myCurrentQuestionIndex]; //Places handle to current Questions thats in the index of array
    var questiontext = myCurrentQuestion.question; //gives me a handle on the individual QuestionsText??s
    var questionHeaders = $("<h2>"); //builds heading elements for questions
    var theQuestionId = "question" + myCurrentQuestionIndex;
    var choices = myCurrentQuestion.choices;
    questionHeaders.attr("class","myQuestions")
    .attr("id",theQuestionId);
    $("#gamebox").append(questionHeaders);
    $(questionHeaders).html(questiontext);
   for ( let theCurrentChoiceIndex = 0;
     theCurrentChoiceIndex < choices.length; theCurrentChoiceIndex++) {
      var choiceOptions = choices[theCurrentChoiceIndex]; //handle to grab the specific answer
      var createRadio = $("<input type='radio'/>");//need to fix IDS FOR ANSWERS!!!
      createRadio.attr("value", choiceOptions);
      var theAnswerId = myCurrentQuestionIndex+ "ansID" +theCurrentChoiceIndex;
      createRadio.attr("id",theAnswerId)
      .attr("name", myCurrentQuestionIndex);
      var createLabels = $("<label>"+choiceOptions+"</label>");
      createLabels.attr("for",theAnswerId)
      .attr("class","myAnswerRadios btn btn-success");//radio and input labels
      $("#gamebox").append(createLabels)
      .append(createRadio)
      .append("<br>");
    }
  }
}
function checkAnswerRadioValues(){
  var answerResultInput = [//handle to grab the values of user input for answers
    $("input[type=radio][name=0]:checked").val(), $("input[type=radio][name=1]:checked").val(),
    $("input[type=radio][name=2]:checked").val(), $("input[type=radio][name=3]:checked").val(),
    $("input[type=radio][name=4]:checked").val(), $("input[type=radio][name=5]:checked").val(),
    $("input[type=radio][name=6]:checked").val(), $("input[type=radio][name=7]:checked").val() ];
    for ( let i = 0 ; i < 8 ; i++ ) {
      if ( answerResultInput[i] === questionsObject[i].correctAnswer ) {
        userCorrectPicks++;
       } else if ( answerResultInput[i] == undefined ) {
       noAnswer++;
       } else {
        userWrongAnswer++;
      }
    }//DOM push to place answer text 
    $("#correctAnswered").text(userCorrectPicks);
    $("#wrongAnswered").text(userWrongAnswer);
    $("#notAnswered").text(noAnswer);
 }
function gameOverHideGameBox() {//function to hide questions and answers before results show on screen
  $("#gamebox").hide();
  $("#resultbox").show();
}
function endGameGenerateResults() {
  clearInterval(counter); //CLEAR TIMER
  checkAnswerRadioValues();
  $("#endGameBtn").hide(); //hides the button before displaying results page
  $("#timerBox").html("Game over!");
  $("#bottomTimerMessage").html("");
  $("#userMessage").text("Check above for the results!")
  gameOverHideGameBox(); //hides questions and answers after storing results
}
$(document).ready(function() {
  $("#startBtn").on("click", function() {
    $("#timer").html("START!!!");
    myTimer();
    $("#startBtn").hide();
    $("#endGameBtn").show();
    $("#resultbox").removeAttr("style","visibility")
    .hide();
    callToPlaceQuestionOnPage();//On start button click Call function to display questions and answers
  });//End button click event
  $("#endGameBtn").on("click", function() {
    endGameGenerateResults();
  });
});