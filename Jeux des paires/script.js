'use strict';

// Card data
const cardsArray = [{
    'name': 'Maxime Huet',
    'img': 'img/1.jpg',
},
{
    'name': 'John',
    'img': 'img/2.jpg',
},
{
    'name': 'David',
    'img': 'img/3.jpg',
},
{
    'name': 'Thomas Huet',
    'img': 'img/4.jpg',
},
{
    'name': 'Maxime Giunta',
    'img': 'img/5.jpg',
},
{
    'name': 'Thomas Bailleux',
    'img': 'img/6.jpg',
},
{
    'name': 'Loick',
    'img': 'img/7.jpg',
},
{
    'name': 'Hathan',
    'img': 'img/8.jpg',
},
{
    'name': 'Hadrien',
    'img': 'img/9.jpg',
},
{
    'name': 'Hadrienbg',
    'img': 'img/10.jpg',
},
{
    'name': 'Raph',
    'img': 'img/11.jpg',
},
{
    'name': 'Baptiste',
    'img': 'img/12.jpg',
},
];

let gameGrid = cardsArray.concat(cardsArray).sort(function () {
    return 0.5 - Math.random();
});

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 800;

let game = document.getElementById('game');
let grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(function (item) {
    let name = item.name,
        img = item.img;


    let card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = name;

    let front = document.createElement('div');
    front.classList.add('front');

    let back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = 'url(' + img + ')';

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
});

let match = function match() {
    let selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
        card.classList.add('match');
    });
};

let resetGuesses = function resetGuesses() {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;

    let selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
        card.classList.remove('selected');
    });
};

grid.addEventListener('click', function (event) {

    let clicked = event.target;

    if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
        return;
    }

    if (count < 2) {
        count++;
        if (count === 1) {
            firstGuess = clicked.parentNode.dataset.name;
            console.log(firstGuess);
            clicked.parentNode.classList.add('selected');
        } else {
            secondGuess = clicked.parentNode.dataset.name;
            console.log(secondGuess);
            clicked.parentNode.classList.add('selected');
        }

        if (firstGuess && secondGuess) {
            if (firstGuess === secondGuess) {
                setTimeout(match, delay);
            }
            setTimeout(resetGuesses, delay);
        }
        previousTarget = clicked;
    }
});


  //https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/?fbclid=IwAR1HFF9L6_IsmQ65wu5xNmT6ztgJhajCbDwKr2TkbjOMzcTKscxenwk9Qn8//
