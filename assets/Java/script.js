var startBtn = document.getElementById("start");
var timer = document.getElementById("timer");
var h2El = document.getElementById("word");
var count = 30;
var wordsList = ["javascript", "objects"];
var randWordArr;
var randWord;
var _Arr = [];
var wins = parseInt(localStorage.getItem("wins")) || 0;
var losses = 0;

startBtn.addEventListener("click", function(e) {
  randomWord();
  startBtn.disabled = true;
  var gameTimer = setInterval(function() {
    count--;
    timer.textContent = "timer: " + (count > 0 ? count : 0);

    if (count <= 0) {
      clearInterval(gameTimer);
      h2El.textContent = "Game Over";
      losses++;
      localStorage.setItem("wins", wins);
    }
  }, 1000);
});

function randomWord() {
  randWord = wordsList[Math.floor(Math.random() * wordsList.length)];
  randWordArr = randWord.split("");
  _Arr = Array(randWordArr.length).fill("_");
  h2El.textContent = _Arr.join(" ");
}

document.addEventListener("keyup", function(e) {
  console.log(e.key, randWordArr);
  for (let i = 0; i < randWordArr.length; i++) {
    if (e.key === randWordArr[i]) {
      _Arr[i] = e.key;
    }
  }
  h2El.textContent = _Arr.join(" ");
});

timer.textContent = "timer: " + count;

