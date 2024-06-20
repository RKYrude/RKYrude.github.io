
// Click Event Listener
for (let i = 0; i <= 6; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", playClick);
}

function playClick() {
    let buttonPress = this.innerHTML;
    makeSound(buttonPress);
    btnAnimation(buttonPress);
}

// Key press Event Listener
document.addEventListener("keypress", playKey);

function playKey(event) {
    console.log("Key pressed:", event.key); // Debugging line
    makeSound(event.key);
    btnAnimation(event.key);
}

function makeSound(pressed) {
    switch (pressed) {
        case "w":
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
            break;
        default:
            console.log("No matching key found for:", pressed); // Debugging line
            break;
    }
}

function btnAnimation(key) {
    let button = document.querySelector("." + key);
    if (button) {
        button.classList.add("pressed");
        setTimeout(function () {
            button.classList.remove("pressed");
        }, 100);
    } else {
        console.log("No button found for key:", key); // Debugging line
    }
}
