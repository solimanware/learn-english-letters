const playAudio = file => new Audio(file).play();
const createButton = (text, file) => `<div onClick="playAudio('${file}')" class="button"><h1>${text}</h1></div>`;
const buttons = [
    ...Array.from("abcdefghijklmnopqrstuvwxyz", letter => createButton(letter.toUpperCase(), `assets/letters/${letter}.mp3`)),
    createButton("Bravo", "assets/bravo.mp3")
];
document.getElementById("buttons").innerHTML = buttons.join(' ');
//awesome!