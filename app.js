// import functions and grab DOM elements
const cupOneImgEl = document.getElementById('cup-one');
const cupTwoImgEl = document.getElementById('cup-two');
const cupThreeImgEl = document.getElementById('cup-three');
const cupOneButtonEl = document.getElementById('cup-one-btn');
const cupTwoButtonEl = document.getElementById('cup-two-btn');
const cupThreeButtonEl = document.getElementById('cup-three-btn');
const tryAgainButtonEl = document.getElementById('try-again-btn');
const totalGamesEl = document.getElementById('total-games');
const gamesWonEl = document.getElementById('games-won');
const gamesLostEl = document.getElementById('games-lost');


// set state
let gamesWon = 0;
let totalGames = 0;

const cupArray = [
    'cup-one',
    'cup-two',
    'cup-three'
];

let correctCup = getRandomItem(cupArray);

// set event listeners 
cupOneButtonEl.addEventListener('click', () => {
    handleGuess('cup-one', correctCup);
});

cupTwoButtonEl.addEventListener('click', () => {
    handleGuess('cup-two', correctCup);
});

cupThreeButtonEl.addEventListener('click', () => {
    handleGuess('cup-three', correctCup);
});

tryAgainButtonEl.addEventListener('click', () => {
    cupOneButtonEl.hidden = false;
    cupTwoButtonEl.hidden = false;
    cupThreeButtonEl.hidden = false;
    tryAgainButtonEl.hidden = true;
    tryAgain();
});

function resetCups() {
    cupOneImgEl.src = './assets/cup.png';
    cupTwoImgEl.src = './assets/cup.png';
    cupThreeImgEl.src = './assets/cup.png';
}

function handleGuess(userClicked, correctCup) {

    
    totalGames++;

    switch (userClicked) {
        case 'cup-one':
            (correctCup === 'cup-one') ? youWon('cup-one') : youLost(correctCup);
            break;
        case 'cup-two':
            (correctCup === 'cup-two') ? youWon('cup-two') : youLost(correctCup);
            break;
        case 'cup-three':
            (correctCup === 'cup-three') ? youWon('cup-three') : youLost(correctCup);
    }

    totalGamesEl.textContent = totalGames;
    gamesWonEl.textContent = gamesWon;
    gamesLostEl.textContent = totalGames - gamesWon;

}

function youWon(cupString) {
    gamesWon++;
    raiseCups(cupString);
}

function youLost(cupString) {
    raiseCups(cupString);
}

function raiseCups(cupString) {
    switch (cupString) {
        case 'cup-one':
            cupOneImgEl.src = './assets/correct-cup.png';
            cupTwoImgEl.src = './assets/incorrect-cup.png';
            cupThreeImgEl.src = './assets/incorrect-cup.png';
            break;
        case 'cup-two':
            cupOneImgEl.src = './assets/incorrect-cup.png';
            cupTwoImgEl.src = './assets/correct-cup.png';
            cupThreeImgEl.src = './assets/incorrect-cup.png';
            break;
        case 'cup-three':
            cupOneImgEl.src = './assets/incorrect-cup.png';
            cupTwoImgEl.src = './assets/incorrect-cup.png';
            cupThreeImgEl.src = './assets/correct-cup.png';
            break;
    }
    tryAgainButtonEl.hidden = false;
    cupOneButtonEl.hidden = true;
    cupTwoButtonEl.hidden = true;
    cupThreeButtonEl.hidden = true;
}

function tryAgain() {
    correctCup = getRandomItem(cupArray);
    resetCups();
    cupOneButtonEl.hidden = false;
    cupTwoButtonEl.hidden = false;
    cupThreeButtonEl.hidden = false;
    tryAgainButtonEl.hidden = true;
}

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

