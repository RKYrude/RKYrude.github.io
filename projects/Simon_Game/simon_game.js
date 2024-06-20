document.addEventListener("keydown", main);
document.getElementById("mobile").addEventListener("click", () => {
    if (document.getElementById("mobile").innerText === "RESTART") {
        history.go(0);
    }
    document.getElementById("mobile").innerText = "RESTART";
});

let level = 1;
let arr = [];
let arrComp = [];
let btnpress = 0;

function main() {
    document.querySelectorAll("h1")[1].innerHTML="";
    document.removeEventListener("keydown", main);
    document.querySelectorAll("h1")[0].innerText="Press Any Key to Start";
    arrComp = [];
    btnpress = 0;
    updateLevel();
    animateButtonPress();
    addButtonListeners();
}

function updateLevel() {
    document.querySelectorAll("h1")[0].innerText = "LEVEL " + level;
}

function animateButtonPress() {
    const randInt = Math.floor(Math.random() * 4);

    const button = document.querySelectorAll("button")[randInt];
    button.classList.add("pressed");
        if (randInt==0){
            green()
        }
        if (randInt==1){
            red()
        }
        if (randInt==2){
            yellow()
        }
        if (randInt==3){
            blue()
        }

    setTimeout(() => {
        button.classList.remove("pressed");
    }, 150);


    arr.push(button.innerText);
}

function addButtonListeners() {
    for (let i = 0; i <= 3; i++) {
        document.querySelectorAll("button")[i].addEventListener("click", handleButtonClick);
    }
}

function handleButtonClick(event) {
    const clickedButton = event.target;
    clickedButton.classList.add("pressed");
    setTimeout(() => {
        clickedButton.classList.remove("pressed");
    }, 150);
    arrComp.push(clickedButton.innerText);
    checkButtonPress();
}

function checkButtonPress() {
    btnpress++;
    if (arr[btnpress - 1] === arrComp[btnpress - 1] && btnpress <= level) {
        if (btnpress === level) {
            level++;
            setTimeout(main, 800); 
        }
    } 
    else {
        
        resetGame();
    }
}

function playerLose() {
    let bdycolor = document.querySelectorAll("body")[0];
    let audio = new Audio("../../Assets/simon game/wrong.mp3");
    audio.play();
    bdycolor.classList.add("lose");
    setTimeout(()=>{
        bdycolor.classList.remove("lose");
    },500);
    
}

function resetGame() {
    level = 1;
    arr = [];
    arrComp = [];
    btnpress = 0;
    playerLose();
    document.querySelectorAll("h1")[0].innerHTML="Press Any Key to Restart";
    document.querySelectorAll("h1")[1].innerHTML="Player LOST";
    document.addEventListener("keydown", main);
    document.getElementById("mobile").innerText = "START";
    
}


function green(){
    let audio = new Audio("../../Assets/simon game/green.mp3");
    audio.play();
}
function red(){
    let audio = new Audio("../../Assets/simon game/red.mp3");
    audio.play();
}
function yellow(){
    let audio = new Audio("../../Assets/simon game/yellow.mp3");
    audio.play();
}
function blue(){
    let audio = new Audio("../../Assets/simon game/blue.mp3");
    audio.play();
}