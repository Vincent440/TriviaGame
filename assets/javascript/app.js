/*eslint-env browser*/
/*global $*/
//-------------------------Start of Space Trivia Game Javascript----------------------------
//Link to live file https://vincent440.github.io/TriviaGame/
//------------------------------GLOBAL VARIABLE DECLARATION---------------------------------
var userCorrectPicks=0, //-answersCorrect
  userWrongAnswer=0, //-answersWrong
  noAnswer = 0, //-answersNotChecked
  counter,
  count; //a Question array , with Objects for each question with answer arrays.
var questionsObject = [
  {
    question: "Who was the first human to enter space?",
    correctAnswer:"Yuri Alekseyevich Gagarin",
    choices: [
      "Neil Alden Armstrong",
      "Yuri Alekseyevich Gagarin", //(CORRECT)
      "Edwin Eugene Aldrin Jr.",
      "Alan Barlett Shepard Jr."
    ]
  },
  {
    question: "What was the first animal to be launched into space?",
    correctAnswer: "A Rhesus monkey",
    choices: [
      "A Rhesus monkey", //(CORRECT)
      "A Dog",
      "A Chimpanzee",
      "A Cat"
    ]
  },
  {
    question: "Who was the first man on the moon?",
    correctAnswer: "Neil Armstrong",
    choices: [
      "Buzz Alrin",
      "Neil Armstrong", //(CORRECT)
      "John Glenn",
      "Alan Shepard"
    ]
  },
  {
    question: "First American Astronaut to enter orbit?",
    correctAnswer: "John Herschel Glenn Jr.",
    choices: [
      "John Herschel Glenn Jr.", //CORRECT
      "Neil A. Armstrong",
      "Alan B. Shepard",
      "Dr. Rendezvous"
    ]
  },
  {
    question: "What is the most expensive US Space program mission?",
    correctAnswer: "Space Shuttle Program",
    choices: [
      "SLS and Orion",
      "International Space Station",
      "Space Shuttle Program", //CORRECT
      "Apollo Space Program"
    ]
  },
  {
    question: "How many Spacecraft have left the Solar System?",
    correctAnswer: "2",
    choices: [
      "2", //CORRECT
      "1",
      "3",
      "4"
    ]
  },
  {
    question: "What year did the United States Place a man into Orbit?",
    correctAnswer: "1962",
    choices: [
      "1959",
      "1962", //CORRECT
      "1963",
      "1961"
    ]
  },
  {
    question: "What was the First Satellite in Orbit of the Earth?",
    correctAnswer: "Sputnik I",
    choices: [
      "Soyuz",
      "Mir",
      "Explorer 1",
      "Sputnik I" //CORRECT
    ]
  }
];
//----------------------------------Function creation--------------------------------------
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
  for (
    var myCurrentQuestionIndex = 0;
    myCurrentQuestionIndex < questionsObject.length;
    myCurrentQuestionIndex++
  ) {
    var myCurrentQuestion = questionsObject[myCurrentQuestionIndex]; //Places handle to current Questions thats in the index of array
    var questiontext = myCurrentQuestion.question; //gives me a handle on the individual ??s
    var questionHeaders = $("<h2>"); //builds headings for questions
    let theQuestionId = "question" + myCurrentQuestionIndex;
    var choices = myCurrentQuestion.choices;
    questionHeaders.attr("class","myQuestions");
    questionHeaders.attr("id",theQuestionId);
    $("#gamebox").append(questionHeaders);
    $(questionHeaders).html(questiontext);
    for (
      let theCurrentChoiceIndex = 0;
      theCurrentChoiceIndex < choices.length;
      theCurrentChoiceIndex++
    ) {
      var choiceOptions = choices[theCurrentChoiceIndex]; //handle to grab the specific answer
      var createRadio = $("<input type='radio'/>");//need to fix IDS FOR ANSWERS!!!
      createRadio.attr("value", choiceOptions);
      var theAnswerId = myCurrentQuestionIndex+ "ansID" +theCurrentChoiceIndex;
      createRadio.attr("id",theAnswerId);
      createRadio.attr("name", myCurrentQuestionIndex);
      var createLabels = $("<label>"+choiceOptions+"</label>");
      createLabels.attr("for",theAnswerId);
      createLabels.attr("class","myAnswerRadios btn btn-success");//radio and input labels
      $("#gamebox").append(createLabels);
      $("#gamebox").append(createRadio);
      $("#gamebox").append("<br>");
    }
  }
}
function checkAnswerRadioValues(){
    let correctResult0 = questionsObject[0].correctAnswer;
    let correctResult1 = questionsObject[1].correctAnswer;
    let correctResult2 = questionsObject[2].correctAnswer;
    let correctResult3 = questionsObject[3].correctAnswer;
    let correctResult4 = questionsObject[4].correctAnswer;
    let correctResult5 = questionsObject[5].correctAnswer;
    let correctResult6 = questionsObject[6].correctAnswer;
    let correctResult7 = questionsObject[7].correctAnswer;
    let qAnswerResult0  = $( "input[type=radio][name=0]:checked" ).val();
    let qAnswerResult1  = $( "input[type=radio][name=1]:checked" ).val();
    let qAnswerResult2  = $( "input[type=radio][name=2]:checked" ).val();
    let qAnswerResult3  = $( "input[type=radio][name=3]:checked" ).val();
    let qAnswerResult4  = $( "input[type=radio][name=4]:checked" ).val();
    let qAnswerResult5  = $( "input[type=radio][name=5]:checked" ).val();
    let qAnswerResult6  = $( "input[type=radio][name=6]:checked" ).val();
    let qAnswerResult7  = $( "input[type=radio][name=7]:checked" ).val();
    //clearly could of done this alot neater but if it works it works ¯\_(ツ)_/¯ Sorry guys :D 
    if ( qAnswerResult0 === correctResult0 ){
        userCorrectPicks=1;
    }
    else if (qAnswerResult0==undefined){
        noAnswer=1;
    }
    else{
        userWrongAnswer=1;
    }
    if ( qAnswerResult1 === correctResult1 ){
        userCorrectPicks++;
    }
    else if(qAnswerResult1==undefined){
        noAnswer++;
    }
    else{
        userWrongAnswer++;
    }
    if ( qAnswerResult2 === correctResult2 ){
        userCorrectPicks++;
    }
    else if(qAnswerResult2==undefined){
        noAnswer++;
    }
    else{
        userWrongAnswer++;
    }
    if ( qAnswerResult3 === correctResult3 ){
        userCorrectPicks++;
    }
    else if(qAnswerResult3==undefined){
        noAnswer++;
    }
    else{
        userWrongAnswer++;
    }
    if ( qAnswerResult4 === correctResult4 ){
        userCorrectPicks++;
    }
    else if(qAnswerResult4==undefined){
        noAnswer++;
    }
    else{
        userWrongAnswer++;
    }
    if ( qAnswerResult5 === correctResult5 ){
        userCorrectPicks++;
    }
    else if(qAnswerResult5==undefined){
        noAnswer++;
    }
    else{
        userWrongAnswer++;
    }
    if ( qAnswerResult6 === correctResult6 ){
        userCorrectPicks++;
    }
    else if(qAnswerResult6==undefined){
        noAnswer++;
    }
    else{
        userWrongAnswer++;
    }
    if ( qAnswerResult7 === correctResult7 ){
        userCorrectPicks++;
    }
    else if(qAnswerResult7==undefined){
        noAnswer++;
    }
    else{
        userWrongAnswer++;
    }
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
//----------------------------Document Ready--------------------------------------
$(document).ready(function() {
  $("#startBtn").on("click", function() {
    $("#timer").html("START!!!");
    myTimer();
    $("#startBtn").hide();
    $("#endGameBtn").show();
    $("#resultbox").removeAttr("style","visibility");
    $("#resultbox").hide();
    callToPlaceQuestionOnPage();//On start button click Call function to display questions and answers
  });
  $("#endGameBtn").on("click", function() {
    endGameGenerateResults();
  });
});