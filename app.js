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

// set event listeners 
cupOneButtonEl.addEventListener('click', () => {
    handleGuess('cup-one');
});

cupTwoButtonEl.addEventListener('click', () => {
    handleGuess('cup-two');
});

cupThreeButtonEl.addEventListener('click', () => {
    handleGuess('cup-three');
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

function handleGuess(userClicked) {

    const correctCup = Math.floor(Math.random() * 3);
    totalGames++;

    switch (userClicked) {
        case 'cup-one':
            (correctCup === 0) ? youWon(0) : youLost(correctCup);
            break;
        case 'cup-two':
            (correctCup === 1) ? youWon(1) : youLost(correctCup);
            break;
        case 'cup-three':
            (correctCup === 2) ? youWon(2) : youLost(correctCup);
    }

    totalGamesEl.textContent = totalGames;
    gamesWonEl.textContent = gamesWon;
    gamesLostEl.textContent = totalGames - gamesWon;

}

function youWon(cupNum) {
    gamesWon++;
    raiseCups(cupNum);
}

function youLost(cupNum) {
    raiseCups(cupNum);
}

function raiseCups(cupNum) {
    switch (cupNum) {
        case 0:
            cupOneImgEl.src = './assets/correct-cup.png';
            cupTwoImgEl.src = './assets/incorrect-cup.png';
            cupThreeImgEl.src = './assets/incorrect-cup.png';
            break;
        case 1:
            cupOneImgEl.src = './assets/incorrect-cup.png';
            cupTwoImgEl.src = './assets/correct-cup.png';
            cupThreeImgEl.src = './assets/incorrect-cup.png';
            break;
        case 2:
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
    resetCups();
    cupOneButtonEl.hidden = false;
    cupTwoButtonEl.hidden = false;
    cupThreeButtonEl.hidden = false;
    tryAgainButtonEl.hidden = true;
}