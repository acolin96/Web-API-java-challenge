var startBtn = document.getElementById("start");
var timer = document.getElementById("timer");
var quiz = document.getElementById("quiz");
var h2El = document.getElementById("word");
var winsEl = document.getElementById("wins");
var lossesEl = document.getElementById("losses");
var count = 60;
var wins = parseInt(localStorage.getItem("wins")) || 0;
var losses = parseInt(localStorage.getItem("losses")) || 0;
var gameTimer;
var correctAnswer;

var questionIndex = 0;

var questionsList = [
  {
    question: "Inside what HTML element do we include the JavaScript?",
    answers: ["<script>", "<js>", "<javascripting>", "<.script>"],
    correctAnswer: "<script>",
  },
  {
    question: "What is CSS used for?",
    answers: ["inserting logic", "styling", "encryption", "cooking"],
    correctAnswer: "styling",
  },
  {
    question: "How do you comment out a line in JavaScript?",
    answers: ["<!-->", "/*", "//", "F4"],
    correctAnswer: "//",
  },
];

function clockTick() {
  // update time
  count--;
  timer.textContent = count;

  // check if user ran out of time
  if (count <= 0) {
    clearInterval(gameTimer); 
    timer.classList.add("hidden"); 
    h2El.classList.add("hidden"); 
    quiz.innerHTML = "";
    var gameOverEl = document.createElement("div");
    gameOverEl.textContent = "Game Over";
    gameOverEl.style.fontSize = "24px";
    gameOverEl.style.fontWeight = "bold";
    gameOverEl.style.marginTop = "30px";
    quiz.appendChild(gameOverEl);
    quiz.appendChild(startBtn);
  }
}

function displayQuestion() {
  var currentQuestion = questionsList[questionIndex];
  h2El.textContent = currentQuestion.question;

  var currentAnswers = currentQuestion.answers;
  quiz.innerHTML = "";

  for (var i = 0; i < currentAnswers.length; i++) {
    var answerOption = document.createElement("button");
    var choice = currentAnswers[i];
    answerOption.textContent = choice;
    answerOption.classList.add("answer-option");
    answerOption.setAttribute("value", choice);
    quiz.appendChild(answerOption);
  }
  correctAnswer = currentQuestion.correctAnswer;
}

function questionClick(event) {
  var buttonEl = event.target;
  console.log("button-value", buttonEl.value);
  var userAnswer = buttonEl.value;
  if (userAnswer !== questionsList[questionIndex].correctAnswer) {
    count = count - 15;
  }
  questionIndex = questionIndex + 1;

  if (questionIndex === questionsList.length) {
    displayResult();
  } else {
    displayQuestion();
  }
}

quiz.addEventListener("click", questionClick);

function startGame() {
  displayQuestion();
  gameTimer = setInterval(clockTick, 1000);
  startBtn.disabled = true;
}

startBtn.addEventListener("click", startGame);

function checkAnswer(selectedAnswer) {
  clearInterval(gameTimer);

  if (selectedAnswer === correctAnswer) {
    h2El.textContent = "Correct!";
    wins++;
    winsEl.textContent = wins;
    localStorage.setItem("wins", wins);
  } else {
    h2El.textContent = "Wrong!";
    losses++;
    lossesEl.textContent = losses;
    localStorage.setItem("losses", losses);
  }

  startBtn.disabled = false;

  if (questionIndex === questionsList.length) {
    displayResult();
  } else {
    displayQuestion();
  }
}

function displayResult() {
  clearInterval(gameTimer);  
  timer.classList.add("hidden");

  h2El.classList.add("hidden");  
  quiz.innerHTML = "";
  var resultEl = document.createElement("div");
  resultEl.textContent = "Congratulations! Your score is: " + wins;
  resultEl.style.fontSize = "24px";
  resultEl.style.fontWeight = "bold";
  resultEl.style.marginTop = "30";
  quiz.appendChild(resultEl);
  quiz.appendChild(startBtn);

}






// var startBtn = document.getElementById("start");
// var timer = document.getElementById("timer");
// var quiz = document.getElementById("quiz");
// var h2El = document.getElementById("word");
// var winsEl = document.getElementById("wins");
// var lossesEl = document.getElementById("losses");
// var count = 60;
// var wins = parseInt(localStorage.getItem("wins")) || 0;
// var losses = parseInt(localStorage.getItem("losses")) || 0;
// var gameTimer;
// var correctAnswer;

// var questionIndex = 0;

// var questionsList = [
//   {
//     question: "Inside what HTML element do we include the JavaScript?",
//     answers: ["<script>", "<js>", "<javascripting>", "<.script>"],
//     correctAnswer: "<script>",
//   },
//   {
//     question: "What is CSS used for?",
//     answers: ["inserting logic", "styling", "encryption", "cooking"],
//     correctAnswer: "styling",
//   },
//   {
//     question: "How do you comment out a line in JavaScript?",
//     answers: ["<!-->", "/*", "//", "F4"],
//     correctAnswer: "//",
//   },
// ];

// function clockTick() {
//   // update time
//   count--;
//   timer.textContent = count;

//   // check if user ran out of time
//   if (count <= 0) {
//     // quizEnd();
//   }
// }

// function displayQuestion() {
//   var currentQuestion = questionsList[questionIndex];
//   h2El.textContent = currentQuestion.question;

//   var currentAnswers = currentQuestion.answers;
//   quiz.innerHTML = "";

//   for (var i = 0; i < currentAnswers.length; i++) {
//     var answerOption = document.createElement("button");
//     var choice = currentAnswers[i];
//     answerOption.textContent = choice;
//     answerOption.classList.add("answer-option");
//     answerOption.setAttribute("value", choice);
//     quiz.appendChild(answerOption);
//   }
//   correctAnswer = currentQuestion.correctAnswer;
// }

// function questionClick(event) {
//   var buttonEl = event.target;
//   console.log("button-value", buttonEl.value);
//   var userAnswer = buttonEl.value;
//   if (userAnswer !== questionsList[questionIndex].correctAnswer) {
//     count = count - 15;
//   }
//   questionIndex = questionIndex + 1;
//   displayQuestion();
// }

// quiz.addEventListener("click", questionClick);

// startBtn.addEventListener("click", function (e) {
//   startGame();
// });

// function startGame() {
//   displayQuestion();
//   gameTimer = setInterval(clockTick, 1000);
//   startBtn.disabled = true;
// }

// function checkAnswer(selectedAnswer) {
//   clearInterval(gameTimer);

//   if (selectedAnswer === correctAnswer) {
//     h2El.textContent = "Correct!";
//     wins++;
//     winsEl.textContent = wins;
//     localStorage.setItem("wins", wins);
//   } else {
//     h2El.textContent = "Wrong!";
//     losses++;
//     lossesEl.textContent = losses;
//     localStorage.setItem("losses", losses);
//   }

//   startBtn.disabled = false;

//   if (questionIndex === questionsList.length - 1) {
//     displayResult();
//   } else {
//     questionIndex++;
//     displayQuestion();
//   }
// }



// function displayResult() {
//     quiz.innerHTML = "";
//     var resultEl = document.createElement("div");
//     resultEl.textContent = "Congratulations! Your score is: " + wins;
//     resultEl.style.fontSize = "24px";
//     resultEl.style.fontWeight = "bold";
//     resultEl.style.marginTop = "30px";
//     quiz.appendChild(resultEl);
//     quiz.appendChild(startBtn);
//   }

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Enter") {
//     e.preventDefault();
//     var selectedAnswer = document.querySelector(".answer-option.selected").textContent;
//     checkAnswer(selectedAnswer);
//   }
// });

// document.addEventListener("click", function (e) {
//   if (e.target.classList.contains("answer-option")) {
//     var answerOptions = document.querySelectorAll(".answer-option");
//     answerOptions.forEach(function (option) {
//       option.classList.remove("selected");
//     });
//     e.target.classList.add("selected");function displayResult() {
//   quiz.innerHTML = "";
//   var resultEl = document.createElement("div");
//   resultEl.textContent = "Congratulations! Your score is: " + wins;
//   quiz.appendChild(resultEl);
// }
 
// }})














