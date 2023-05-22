var startBtn = document.getElementById("start");
var timer = document.getElementById("timer");
var h2El = document.getElementById("word");
var winsEl = document.getElementById("wins")
var lossesEl = document.getElementById("losses")
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
      lossesEl.textContent = losses;
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
  
    if (_Arr.join("") === randWord) {
      clearInterval(gameTimer);
      h2El.textContent = "You Win!";
      wins++;
      winsEl.textContent = wins;
      localStorage.setItem("wins", wins);
    }
  });
  
  document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      if (_Arr.join("") === randWord) {
        clearInterval(gameTimer);
        h2El.textContent = "You Win!";
        wins++;
        winsEl.textContent = wins;
        localStorage.setItem("wins", wins);
      } else {
        losses++;
      }
    }
  });
  
  winsEl.textContent = wins;
  lossesEl.textContent = losses;



