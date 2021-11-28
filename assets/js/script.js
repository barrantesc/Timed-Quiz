// Declaring Element
var startDiv = document.getElementById("start");
var questionSectionDiv = document.getElementById("question-section");
var questionDiv = document.getElementById("questions");
var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");
var button4 = document.getElementById("btn4");
var endOfGame = document.getElementById("gameOver");
var final= document.getElementById("final-score");
var playerInitials = document.getElementById("initials");
var highScoreContainer = document.getElementById("highScoreContainer");
var highScoreList = document.getElementById("highScoreList");




var finalQuestionIndex = questions.length;
var currentQuestionIndex = 0;
var timeLeft = 50;
var score = 0;
var initials;
// var timerInterval;


// Start Quiz Button Function
function startQuiz(){
    console.log(question);
    startDiv.style.display = "none";
    questionSectionDiv.style.display = "block"
    populateQuestions();
}

// Populating questions along with answers
function populateQuestions(){
    if (currentQuestionIndex === finalQuestionIndex) {
        showGameOver();
    }
   question.innerHTML = questions[currentQuestionIndex].question;
    // console.log(questions[currentQuestionIndex].question)

   button1.innerHTML = questions[currentQuestionIndex].choices[0]
//    console.log("testing",questions[currentQuestionIndex].choices[0])

   button2.innerHTML = questions[currentQuestionIndex].choices[1]

   button3.innerHTML = questions[currentQuestionIndex].choices[2]

   button4.innerHTML = questions[currentQuestionIndex].choices[3]

}
// Function checks the response of the answer
function checkAnswer(answer) {
    var correctAnswer = questions[currentQuestionIndex].answer
    // console.log(correctAnswer)


    if (answer === correctAnswer && currentQuestionIndex !== finalQuestionIndex){
        // console.log("correctAnswer")
        score++;
        currentQuestionIndex++;
        populateQuestions();

    }else if (answer !== correctAnswer & currentQuestionIndex !== finalQuestionIndex) {
        // console.log("incorrecAnswer")
        currentQuestionIndex++;
        populateQuestions();

    }else {
    // console.log("finished");
    showGameOver();
    console.log(highScoreContainer)
    }
}

function showGameOver() {
    endOfGame.style.display = "block";
    questionSectionDiv.style.display = "none";
    finalScore();
}

function finalScore() {
    final.innerHTML = score;
}

function submitScore() {
    initials = playerInitials.value
    console.log(initials);
    window.localStorage.setItem(initials,score);

    endOfGame.style.display = "none"
    highScoreContainer.style.display = "block";
    showHighScores();
}

function showHighScores() {
    var li = document.createElement("li");
     var text = document.createTextNode(`${initials}-${score}`);
     li.appendChild(text);
     highScoreList.appendChild(li);
}


// function clearScore (){
//     window.localStorage.clear();
//    highscoreDisplayName.textContent = "";
//    highscoreDisplayScore.textContent = ""; 
// }