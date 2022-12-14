'use strict';

const score = document.querySelector('.score');
const result = document.querySelector('.result');
const option = document.querySelectorAll('.option');

let compScore = 0;
let userScore = 0;

option.forEach(el => {
    el.addEventListener('click', (e) => {
        let userChoise = e.target.dataset.option;
        game(userChoise);
    })
})

const game = (userChoise) => {
    let compChoise = Math.ceil(Math.random(0.1) * 3);
    if( compChoise === 1 ){
        compChoise = 'rock';
    } else if(userChoise === 2){
        compChoise = 'paper';
    } else {
        compChoise = 'scissors';
    }

    switch (compChoise[0] + userChoise[0]) {
        case 'rp':
            userWin(userChoise, compChoise);
            break;
        case 'rs':
            compWin(compChoise, userChoise);
            break;
        case 'pr':
            compWin(compChoise, userChoise);
            break;
        case 'ps':
            userWin(userChoise, compChoise);
            break;
        case 'sr':
            userWin(userChoise, compChoise);
            break;
        case 'sp':
            compWin(compChoise, userChoise);
            break;
        default:
            draw(userChoise);
            break;
    }
}

const compWin = (compChoise, userChoise) => {
    score.innerHTML = `${userScore}:${++compScore}`;
    result.innerHTML = `${compChoise} covers ${userChoise}. Comp win!`;
    optionAnimation(userChoise, 'lose');
};

const userWin = (userChoise, compChoise) => {
    score.innerHTML = `${++userScore}:${compScore}`;
    result.innerHTML = `${userChoise} covers ${compChoise}. You win!`;
    optionAnimation(userChoise, 'win');
};

const draw = (userChoise) => {
    result.innerHTML = `It's a draw. Keep going!`;
    optionAnimation(userChoise, 'draw');
};

const optionAnimation = (choice, selector) => {
    const link = document.querySelector(`.${choice}`);
    link.classList.add(selector);
    setTimeout(()=>{
        link.classList.remove(selector);
    }, 1000)
}