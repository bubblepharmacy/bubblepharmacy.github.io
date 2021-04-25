import * as plumber from 'plumber-client';
import * as faker from 'faker';

const rockButton = document.getElementById('submit-rock');
const scissorsButton = document.getElementById('submit-scissors');
const paperButton = document.getElementById('submit-paper');

let opponentName;
const myName = faker.name.findName();
document.getElementById('my_name').textContent = "Playing as " + myName + ". Waiting for an opponent...";

const ROCK = 'rock';
const SCISSORS = 'scissors';
const PAPER = 'paper';

plumber.config({
    websocketURL: "wss://plumberlib.com",
    apiKey: "JK5WP"
});

let myPlay = false;
let opponentPlay = false;

// Tell other players that we are ready
function notifyReady() {
    plumber.shout({
        message: 'ready',
        name: myName
    });
}

let hasOpponent = false;

notifyReady(); // Notify everyone that we are ready now.
plumber.subscribe((message) => {
    const data = message.data;
    if(!hasOpponent) { // if we don't have an opponent yet...
        if(!message.source) { // and the message is NOT from me
            if(data.message === 'ready') {
                opponentName = data.name;
                hasOpponent = true;
                notifyReady();
                readyToPlay(opponentName);
            }
        }
    } else {
        if(!message.source) {
            if(data.message === 'do_play') {
                opponentPlay = data.play;
                if(myPlay) {
                    bothHandsPlayed(myPlay, opponentPlay);
                }
            }
        }
    }
});

function playBeats(play1, play2) {
    return (play1 === ROCK && play2 === SCISSORS) ||
            (play1 === SCISSORS && play2 === PAPER) ||
            (play1 === PAPER && play2 === ROCK);
}

function bothHandsPlayed(myPlay, opponentPlay) {
    let message = "You played " + myPlay + ". The opponent played " + opponentPlay;

    if(myPlay === opponentPlay) {
        message += ". It's a tie!";
    } else if(playBeats(myPlay, opponentPlay)) {
        message += ". You win!";
    } else {
        message += ". Better luck next time.";
    }
    document.getElementById('my_name').textContent = message;
}

// Call this function when we are ready to play
function readyToPlay(opponentName) {
    document.getElementById('my_name').textContent = "Playing as " + myName + " against " + opponentName;
    enableAllButtons();
}
disableAllButtons();

// play is "rock", "scissors", or "paper". Call this function when we "throw out a hand"
function submitPlay(play) {
    plumber.shout({
        message: 'do_play',
        play: play
    });
    disableAllButtons();

    myPlay = play;
    if(opponentPlay) {
        bothHandsPlayed(myPlay, opponentPlay);
    }
}

rockButton.addEventListener    ('click', () => { submitPlay(ROCK); });
scissorsButton.addEventListener('click', () => { submitPlay(SCISSORS); });
paperButton.addEventListener   ('click', () => { submitPlay(PAPER); });

function disableAllButtons() {
    [rockButton, scissorsButton, paperButton].forEach((btn) => {
        btn.setAttribute('disabled', 'true');
    });
}
function enableAllButtons() {
    [rockButton, scissorsButton, paperButton].forEach((btn) => {
        btn.removeAttribute('disabled');
    });
}
