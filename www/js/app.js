const audioFiles = [
    ...Array.from("abcdefghijklmnopqrstuvwxyz", letter => `assets/letters/${letter}.mp3`),
    "assets/bravo.mp3"
];

const preloadAudio = (file) => {
    const audio = new Audio();
    audio.src = file;
    return audio;
};

const audioCache = {};
audioFiles.forEach(file => {
    audioCache[file] = preloadAudio(file);
});

const playAudio = file => audioCache[file].play();

const createButton = (text, file) => {
    const button = document.createElement('div');
    button.className = 'button';
    button.innerHTML = `<h1>${text}</h1>`;
    
    const playSound = () => playAudio(file);
    
    button.addEventListener('mousedown', playSound);
    button.addEventListener('touchstart', playSound);
    
    return button;
};

const buttons = [
    ...Array.from("abcdefghijklmnopqrstuvwxyz", letter => createButton(letter.toUpperCase(), `assets/letters/${letter}.mp3`)),
    createButton("Bravo", "assets/bravo.mp3")
];

const buttonsContainer = document.getElementById("buttons");
buttons.forEach(button => buttonsContainer.appendChild(button));
//awesome!