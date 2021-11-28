// Gather HTML elements for manipulation
var highScores = document.getElementById("scores");
var timer = document.getElementById("timer");
var startDiv = document.getElementById("start");
var questionDiv = document.getElementById("questions");
var answerSection = document.getElementById("answer-buttons");
var endOfGame = document.getElementById("gameover");
var finalScore = document.getElementById("final-score");
var playerInitials = document.getElementById("initials");
var submitButton = document.getElementById("submit");
var highScoreContainer = document.getElementById("highScoreContainer");
var highScoreDiv = document.getElementById("highscore");
var highScorePage = document.getElementById("highscorepage");
var highScoreHeader = document.getElementById("highScoreHeader");
var highScoreInitials = document.getElementById("highscore-initials");
var highScores = document.getElementById("highscores");
var engGameBtn = document.getElementById("End-Btns");
var playAgainBtn = document.getElementById("play-again");
var clearScoresBtn = document.getElementById("clearScores");

var finalQuestionIndex = questions.length;
var currentQuestionIndex = 0;
var timeLeft = 50;
var timerInterval;
var score = 0
var correct;

function replayQuiz(){
    highScoreContainer.style.display = "none";
    
}

function clearScore (){
    window.localStorage.clear();
   highscoreDisplayName.textContent = "";
   highscoreDisplayScore.textContent = ""; 
}