//Create a button that adds 1 to a botScore stored in localStorage 
let button = document.createElement('button');
document.querySelector('body').appendChild(button).append('+1');

localStorage.setItem('botScore', 0);

document.querySelector('button').addEventListener('click', add1BotScore);

function add1BotScore() {
    const currentScore = Number(localStorage.getItem('botScore'));
    localStorage.setItem('botScore', currentScore + 1);

    console.log(localStorage.getItem('botScore'));
}