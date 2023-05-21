var startBtn = document.getElementById("start");
var timer = document.getElementById("timer");
var h2El = document.getElementById("word");
var count = 30;
var wordsList = ["javascript", "objects"]
var randWordArr;
var randWord;
var _Arr = [];
var wins = 0;
var losses = 0;

startBtn.addEventListener("click", function (e) {
    // alert("click working");
    randomWord();
    var gameTimer = setInterval(function () {
        count--;
        timer.textContent = count;

        if (count <= 0) {
            clearInterval(gameTimer)
            h2El.textContent = "Game Over"
            if(randWordArr.join("") === _Arr.join("") ){
                wins++
                localStorage.setItem("wins", wins)
            }else{
                losses++
            }

        }
    }, 1000)
})

function randomWord () {
     randWord = wordsList[Math.floor(Math.random()*wordsList.length)]
    console.log(randWord);
     randWordArr = randWord.split("");
    for (var i = 0; i < randWordArr.length; i++) {
       _Arr.push('_')
        
    }
    console.log(_Arr);
    var randWordToDisplay = _Arr.join(" ");
    h2El.textContent =  _Arr.join(" ");
}

document.addEventListener("keyup",function(e){
    console.log(e.key, randWordArr);
    for (let i = 0; i < randWordArr.length; i++) {
        if(e.key === randWordArr[i])
        {
            _Arr[i] = e.key;
        }
        
    }
    h2El.textContent =  _Arr.join(" ");

})