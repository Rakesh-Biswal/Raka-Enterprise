var container = document.getElementById("container");
var screen = document.getElementById("displayIPOP");
var NewGame = document.getElementById("NewGame");
var submit = document.getElementById("submit");
var PreviousGuessOP = document.getElementById("PreviousGuessOP");
var remainingGuessOP = document.getElementById("remainingGuessOP");
var start = document.getElementById("start");
var lastElement = document.getElementById("lastElement");
var answer = document.getElementById("answer");
var blury = 0;

var timerDisplay = document.getElementById("timer");
var totalTimeInSeconds = 120; // 2 minutes
var timeLeftInSeconds = totalTimeInSeconds;
var timerInterval;
var watchTimer = document.getElementById("watchTimer");
watchTimer.style.display = "none";
var randomNo = parseInt(Math.random() * 100 + 1);
submit.disabled = true;
NewGame.disabled = true;
var timerCondition = 1;

console.log(randomNo);
screen.readOnly = true;
submit.readOnly = true;
var previousGuesses = [];
var Remaining = [];
var limit = 10;

screen.addEventListener("click", () => {
    if (screen.readOnly == true) {
        start.style.transform = "scale(120%)";
        start.style.backgroundColor = "red";
        alert("Please Click on Start Game");
    }
});




start.addEventListener("click", () => {
    alert("Let's Play The Game...");
    submit.disabled = false;
    NewGame.disabled = false;
    startTimer(); // Start the timer
    watchTimer.style.display = "block";
    screen.readOnly = false;
    submit.readOnly = false;
    NewGame.style.filter = "blur(0)";
    submit.style.filter = "blur(0)";
    start.style.display = "none";
    container.style.transform = "scale(150%)";
    container.style.animation = "all 1s ease-in-out";
    watchTimer.style.display = "block";
});


NewGame.addEventListener("click", () => {
    answer.innerText = "Guess A Number";
    alert("Let's Enter into a New Game...");
    submit.disabled = false;
    submit.disabled = false;
    screen.readOnly = false;
    screen.value = "";
    screen.placeholder = "Enter Your Value";
    container.style.backgroundColor = "rgb(150, 140, 115)";
    previousGuesses = [];
    watchTimer.style.display = "block";
    submit.style.filter = "blur(0px)";
    PreviousGuessOP.style.display = " none";
    remainingGuessOP.style.display = "none";
    limit = 10;
    timeLeftInSeconds = 120;
    if (timeLeftInSeconds == 0) {
        alert('You Lost one Chance..');
        timeLeftInSeconds = 120; // 2 minutes
        previousGuesses.push("Lost");
        previousGuesses.join(" , ");
        PreviousGuessOP.style.visibility = "visible";
        PreviousGuessOP.innerText = previousGuesses.join(" , ");
        remainingGuessOP.style.visibility = "visible";
    }
    if(input==randomNo|| limit==0){
        clearInterval(timerInterval);
    }

    NewGame.style.transform = "scale(100%)";
    randomNo = parseInt(Math.random() * 100 + 1);

});


submit.addEventListener("click", (e) => {
    if (submit.disabled == true) {
        alert("Click on New Game Btn....");
    }
    else {
        e.preventDefault();
        timeLeftInSeconds = 120;
        var input = parseInt(screen.value);
        console.log(input);
        if (!isNaN(input)) {
            limit = limit - 1;
        }
        workingStorages(input, randomNo, screen, submit, NewGame, limit, watchTimer, timeLeftInSeconds, PreviousGuessOP, previousGuesses, remainingGuessOP);

    }
});

//timer changing code

function startTimer() {

    timerInterval = setInterval(updateTimer, 1000); // Update timer every second
}

if (timerCondition = 1) {

    function updateTimer() {
        var minutes = Math.floor(timeLeftInSeconds / 60);
        var seconds = timeLeftInSeconds % 60;
        var timerText = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
        timerDisplay.textContent = timerText;

        if (timeLeftInSeconds == 0) {

            timeLeftInSeconds = 120;
            limit--;
            remainingGuessOP.innerText = (limit + "  / 10 ");

            alert('You Lost one Chance..');
            timeLeftInSeconds = 120; // 2 minutes
            previousGuesses.push("Lost");
            previousGuesses.join(" , ");
            PreviousGuessOP.style.visibility = "visible";
            PreviousGuessOP.innerText = previousGuesses.join(" , ");
            remainingGuessOP.style.visibility = "visible";


        }

        else {
            timeLeftInSeconds = timeLeftInSeconds - 5; // 2 minutes ago
            if (timeLeftInSeconds < 60) {
                watchTimer.style.backgroundColor = "red";
            }
        }
    }


}

if (input == randomNo || limit == 0) {
    clearInterval(timerInterval);
}

function workingStorages(input, randomNo, screen, submit, NewGame, limit, watchTimer, timeLeftInSeconds, PreviousGuessOP, previousGuesses, remainingGuessOP) {

    if (input == randomNo) {
        clearInterval(timerInterval);
        watchTimer.style.display = "none";
        screen.style.backgroundColor = "black";
        screen.style.color = "Yellow";
        screen.value = "Bro u Own the Match..";
        submit.style.filter = "blur(2px)";
        NewGame.style.backgroundColor = "green";
        NewGame.style.transform = "scale(120%)";

    }
    else {

        PreviousGuessOP.style.display = " block";
        remainingGuessOP.style.display = "block";

        if (limit == 4) {
            container.style.width = "500px";
        }

        if (limit == 0) {
            lastElement.style.paddingTop = "20px";
            screen.value = "Dont Woory Play Again";
            answer.innerText = ("Answer = " + randomNo);
            answer.style.animation = "animate 1s ease-in-out";
            watchTimer.style.display = "none";
            screen.readOnly = true;
            PreviousGuessOP.style.visibility = "visible";
            remainingGuessOP.style.visibility = "visible";
            submit.style.filter = "blur(2px)";
            NewGame.style.backgroundColor = "green";
            NewGame.style.transform = "scale(130%)";
            screen.placeholder = "No More Chances";
            timeLeftInSeconds = 120;

        }
        screen.placeholder = "Try Again Please";
        timeLeftInSeconds = 120; // 2 minutes
        screen.value = "";

        if (isNaN(input)) {
            alert("Please enter a valid number...");
        }
        else {

            previousGuesses.push(input);
            previousGuesses.join(" , ");
            PreviousGuessOP.style.visibility = "visible";
            PreviousGuessOP.innerText = previousGuesses.join(" , ");
            remainingGuessOP.style.visibility = "visible";
            remainingGuessOP.innerText = (limit + "  / 10 ");
        }
    }
}








