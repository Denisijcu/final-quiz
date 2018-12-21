var count = 0;
var time = 0;
var result = null;
var bird = document.getElementsByClassName("bird")[0];
var bird2 = document.getElementsByClassName("bird2")[0];
var bird3 = document.getElementsByClassName("bird3")[0];

var rsg = document.getElementsByClassName("rsg")[0];
var resultMsg = document.getElementsByClassName("result")[0];
var timerMsg = document.getElementsByClassName("timer")[0];


let bubble1 = document.querySelector(".bubble1");
let bubble2 = document.querySelector(".bubble2");
let bubble3 = document.querySelector(".bubble3");

let goalLine = document.getElementsByClassName("crossing-line")[0];
let targetLeft = goalLine.offsetLeft;
let targetTop = goalLine.offsetTop;

var timer;

let theAnswer = '';
let two=0;
let three=0;

var jokes = [
    "You're so slow, the bird grew a beard while racing... go look..., GOTCHA!!! didn't I?",
    "You're so slow, we had to measure your 10 second race with a calendar",
    "You're so slow, you came in 2nd in a 1 man race",
    "You're so slow, you have to chase the zombies",
    "You're slower than a slow cooker",
    "You're slower than a 1 legged dog on tranquilizers",
    "You're slower than Daenerys Targaryen on her way to Westeros",
    "You gotta get those fingers to the gym asap my nigga! You too slow!",
    "You've got some supreme slownest in those fingers son! You gotta do some finger cardio!",
    "You've got limitted edition slow fingers! go claim your Ginnes record!",
]

function initialize() {
    timer = setInterval(checkIfWin, 300);

    bubble1.style.display = 'block';
    bubble2.style.display = 'block';
    bubble3.style.display = 'block';
   
}

function checkIfWin() {
    if (count >= 1000 && count < 2000) {
        rsg.innerHTML = 'READY';
    } else if (count >= 2000 && count < 3000) {
        rsg.innerHTML = 'SET';
    } else if (count >= 3000 && count < 4000) {
        rsg.innerHTML = 'GO!';
    } else {
        rsg.innerHTML = '';
    }

    two+=2;
    three+=3;

    bubble1.style.height = Math.floor(Math.random()*100,10) + 'px';
    bubble1.style.width = Math.floor(Math.random()*100,10) + 'px';
  

    if (time >= 13000 && !result) {
        result = 'lost';
        stop();
        showResult(jokes[Math.floor(Math.random() * 10)], 'joke');
    }

    if (count >= 3000) {
        time += 100;
        timerMsg.innerHTML = time / 1000;
    }

    count += 100;
}

function stop() {
    bubble1.style.display = 'none';
    bubble2.style.display = 'none';
    bubble3.style.display = 'none';
    clearInterval(timer);
}

function reset() {
    count = 0;
    time = 0;
    result = null;

    resultMsg.classList.add("hide");
    resultMsg.innerHTML = "";
    bird.style.top = "50%";
    bird.style.left = 0;
    bird2.style.top = "25%";
    bird2.style.left = 0;
    bird3.style.top = "75%";
    bird3.style.left = 0;
    

    timerMsg.innerHTML = 0;

   

    initialize();
}

function keydownFunc() {
    let bird = document.getElementsByClassName("bird")[0];
    let positionLeft = bird.offsetLeft;
    let positionTop = bird.offsetTop;
    let targetLeft = goalLine.offsetLeft;
    let targetTop = goalLine.offsetTop;

  

    if (count > 3000) {
        if (positionLeft + 20 > targetLeft) {
            if (time >= 10000 && !result) {
                result = 'lost';
                stop();
                showResult('YOU LOSE!');
            }
            if (time < 10000 && !result) {
                result = 'won';
                stop();
                showResult('YOU WIN!');
            }
        }

        if (event.keyCode === 37) {
            if (positionLeft > 0) {
                bird.style.left = Math.max(positionLeft - 50, 0) + "px";
                bird2.style.left = Math.max(positionLeft - two, 0) + "px";
                bird3.style.left = Math.max(positionLeft - three, 0) + "px";
            }
        }
        if (event.keyCode === 38) {
            if (positionTop > 0) {
                bird.style.top = Math.max(positionTop - 50, 0) + "px";
                bird2.style.top = Math.max(positionTop - two, 0) + "px";
                bird3.style.top = Math.max(positionTop - three, 0) + "px";
            }
        }
        if (event.keyCode === 39) {
            if (positionLeft < window.innerWidth - bird.style.width) {
                bird.style.left = Math.min(positionLeft + 50, window.innerWidth - bird.style.width) + "px";
                bird2.style.left = Math.min(positionLeft + two, window.innerWidth - bird2.style.width) + "px";
                bird3.style.left = Math.min(positionLeft + three, window.innerWidth - bird3.style.width) + "px";
            }
        }
        if (event.keyCode === 40) {
            if (positionTop < window.innerHeight - bird.style.height) {
                bird.style.top = Math.min(positionTop + 50, window.innerHeight - bird.style.height) + "px";
                bird2.style.top = Math.min(positionTop + two, window.innerHeight - bird2.style.height) + "px";
                bird3.style.top = Math.min(positionTop + three, window.innerHeight - bird3.style.height) + "px";
            }
        }
    }

}

function keyupFunc() {
    let bird = document.getElementsByClassName("bird")[0];
    let bird2 = document.getElementsByClassName("bird2")[0];
    let bird3 = document.getElementsByClassName("bird3")[0];
    let positionLeft = bird.offsetLeft;
    let positionTop = bird.offsetTop;
    //let positionLeft = bird2.offsetLeft;
   // let positionTop = bird2.offsetTop;
    //let positionLeft = bird3.offsetLeft;
   // let positionTop = bird3.offsetTop;
}

function showResult(msg, className) {
    theAnswer = msg;
    speak();

    resultMsg.style.display = "flex";
    resultMsg.innerHTML = '<div class="' + className + '">' + msg + '</div>';
    resultMsg.innerHTML += '<div class="reset-btn" onclick="reset()">RESTART</div>';
}

var readyFunc = function () {
    bird = document.getElementsByClassName("bird")[0];
    bird2 = document.getElementsByClassName("bird2")[0];
    bird3 = document.getElementsByClassName("bird3")[0];
    rsg = document.getElementsByClassName("rsg")[0];
    resultMsg = document.getElementsByClassName("result")[0];
    timerMsg = document.getElementsByClassName("timer")[0];
    goalLine = document.getElementsByClassName("crossing-line")[0];
    targetLeft = goalLine.offsetLeft;
    targetTop = goalLine.offsetTop;

    initialize();
};



const synth = window.speechSynthesis;
// const textForm = document.querySelector("form");
// const textInput = document.querySelector("#text-input");


// Speak
const speak = () => {
   
    // Check if speaking
    if (synth.speaking) {
        console.log("Already speaking...");
        return;
    }




    // Get speak text
    const speakText = new SpeechSynthesisUtterance(theAnswer);
    // Speak end
    speakText.onend = e => {
        console.log("Done speaking...");
    };

    //Speak error
    speakText.onerror = e => {
        console.error("Something went wrong");
    };

    //speakText.rate = 0;
    //speakText.pitch = 0;
    //Speak
    synth.speak(speakText);
}





document.addEventListener("DOMContentLoaded", readyFunc);


