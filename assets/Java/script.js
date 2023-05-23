var startBtn = document.getElementById("start");
var timer = document.getElementById("timer");
var quiz = document.getElementById("quiz");
var h2El = document.getElementById("word");
var winsEl = document.getElementById("wins");
var lossesEl = document.getElementById("losses");
var count = 60;
var wins = parseInt(localStorage.getItem("wins")) || 0;
var losses = 0;
var gameTimer;
var correctAnswer;

var questionIndex = 0;

var questionsList = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
    correctAnswer: "Leonardo da Vinci",
  },
];

function clockTick() {
    // update time
    count--;
    timer.textContent = count;
  
    // check if user ran out of time
    if (count <= 0) {
     // quizEnd();
    }
  }
  
  // start timer
  var timerId = setInterval(clockTick, 1000);

function displayQuestion() {
   var currentQuestion = questionsList[questionIndex]
   h2El.textContent = currentQuestion.question;

    var currentAnswers = currentQuestion.answers;
    quiz.innerHTML="";

  for (var i = 0; i < currentAnswers.length; i++) {
    var answerOption = document.createElement("button");
    var choice = currentAnswers[i]
    answerOption.textContent = choice;
    answerOption.classList.add("answer-option");
    answerOption.setAttribute("value", choice)
    quiz.appendChild(answerOption);
  }
}

function questionClick(event) {
    var buttonEl = event.target;
    console.log("button-value", buttonEl.value);
    var userAnswer = buttonEl.value
    if (userAnswer !== questionsList[questionIndex].correctAnswer) {
        count = count - 15;
    }
    questionIndex = questionIndex + 1;
    displayQuestion();
}

quiz.addEventListener("click", questionClick)

startBtn.addEventListener("click", function(e) {
  startGame();
});

function startGame() {
  
  displayQuestion();

//   startBtn.disabled = true;
//   count = 30;
//   timer.textContent = "timer: " + count;
//   lossesEl.textContent = losses;
//   winsEl.textContent = wins;
//   gameTimer = setInterval(function() {
//     count--;
//     timer.textContent = "timer: " + (count > 0 ? count : 0);

//     if (count <= 0) {
//       clearInterval(gameTimer);
//       h2El.textContent = "Game Over";
//       losses++;
//       lossesEl.textContent = losses;
//       localStorage.setItem("wins", wins);
//       startBtn.disabled = false;
//     }
//   }, 1000);
}

function getRandomQuestion() {
  return questionsList[Math.floor(Math.random() * questionsList.length)];
}



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
  }

  startBtn.disabled = false;
}

document.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    var selectedAnswer = document.querySelector(".answer-option.selected").textContent;
    checkAnswer(selectedAnswer);
  }
});

document.addEventListener("click", function(e) {
  if (e.target.classList.contains("answer-option")) {
    var answerOptions = document.querySelectorAll(".answer-option");
    answerOptions.forEach(function(option) {
      option.classList.remove("selected");
    });
    e.target.classList.add("selected");
  }
});




// var startBtn = document.getElementById("start");
// var timer = document.getElementById("timer");
// var h2El = document.getElementById("word");
// var winsEl = document.getElementById("wins")
// var lossesEl = document.getElementById("losses")
// var count = 30;
// var wordsList = ["javascript", "objects", "arrays"];
// var randWordArr;
// var randWord;
// var _Arr = [];
// var wins = parseInt(localStorage.getItem("wins")) || 0;
// var losses = 0;
// var gameTimer;

// startBtn.addEventListener("click", function(e) {
//   startGame();
// });

// function startGame() {
//   randomWord();
//   startBtn.disabled = true;
//   count = 30;
//   timer.textContent = "timer: " + count;
//   lossesEl.textContent = losses;
//   winsEl.textContent = wins;
//   gameTimer = setInterval(function() {
//     count--;
//     timer.textContent = "timer: " + (count > 0 ? count : 0);

//     if (count <= 0) {
//       clearInterval(gameTimer);
//       h2El.textContent = "Game Over";
//       losses++;
//       lossesEl.textContent = losses;
//       localStorage.setItem("wins", wins);
//       startBtn.disabled = false;
//     }
//   }, 1000);
// }

// function randomWord() {
//   randWord = wordsList[Math.floor(Math.random() * wordsList.length)];
//   randWordArr = randWord.split("");
//   _Arr = Array(randWordArr.length).fill("_");
//   h2El.textContent = _Arr.join(" ");
// }

// document.addEventListener("keyup", function(e) {
//   for (let i = 0; i < randWordArr.length; i++) {
//     if (e.key === randWordArr[i]) {
//       _Arr[i] = e.key;
//     }
//   }
//   h2El.textContent = _Arr.join(" ");

//   if (_Arr.join("") === randWord) {
//     clearInterval(gameTimer);
//     h2El.textContent = "You Win!";
//     wins++;
//     winsEl.textContent = wins;
//     localStorage.setItem("wins", wins);
//     startBtn.disabled = false;
//   }
// });

// document.addEventListener("keydown", function(e) {
//   if (e.key === "Enter") {
//     e.preventDefault();
//     if (_Arr.join("") === randWord) {
//       clearInterval(gameTimer);
//       h2El.textContent = "You Win!";
//       wins++;
//       winsEl.textContent = wins;
//       localStorage.setItem("wins", wins);
//       startBtn.disabled = false;
//     } else {
//       losses++;
//       lossesEl.textContent = losses;
//     }
//   }
// });






