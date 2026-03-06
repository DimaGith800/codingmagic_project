const previousButton = document.querySelector('#slider_previous');
const nextButton = document.querySelector('#slider_next');
const contributorPhoto = document.querySelector('#slider_photo');
const authorName = document.querySelector('#slider_authorname');
const contributionInfo = document.querySelector('#slider_contribution');
const lines = document.querySelector('#slider_items');
const line = document.querySelector('#slider_line')

const authors = [
    {
        name: 'Олійниченко Дмитро',
        contribution: 'Виконав весь проєкт',
        photo: '../img/mee.png'
    },
    {
        name: 'Акула',
        contribution: 'Відповідальний за нагляд за розробкою',
        photo: '../img/drill-sergeant.png'
    },
    {
        name: 'Тварини',
        contribution: 'Очільники департаменту контролю якості',
        photo: '../img/chicken-and-duck.png'
    },
    {
        name: 'Дракон',
        contribution: 'Підрядний з нагляду за розробкою',
        photo: '../img/dragon.png'
    },
    {
        name: 'wayou',
        contribution: 'Надав екстракт коду динозаврика',
        photo: '../img/cat-in-glasses.jpg'
    },
    {
        name: 'amoga',
        contribution: 'waxba ma sameynin gabi ahaanba',
        photo: '../img/dino.png'
    },
    {
        name: 'Цікавий кіт',
        contribution: 'Тімлід',
        photo: '../img/cat-from-temu.png'
    },
];

let currentActiveSlide = 0;

function updateSlider() {
    const author = authors[currentActiveSlide];

    contributorPhoto.src = author.photo;
    authorName.textContent = author.name;
    contributionInfo.textContent = author.contribution;

    previousButton.style.opacity = currentActiveSlide === 0 ? '0' : '1';
    nextButton.style.opacity = currentActiveSlide === authors.length - 1 ? '0' : '1';
    const allLines = document.querySelectorAll('.main_container--game--slider--items--line');
    allLines.forEach((l, index) => {
        l.style.backgroundColor = index === currentActiveSlide ? '#797979' : '';
        l.style.width = index === currentActiveSlide ? '30px' : '';
    });
}

export function initSlider() {
    lines.innerHTML = ''; 
    authors.forEach((_, index) => {
        const newLine = document.createElement('div');
        newLine.classList.add('main_container--game--slider--items--line');
        lines.appendChild(newLine);
    });
    nextButton.addEventListener('click', () => {
        if (currentActiveSlide < authors.length - 1) {
            currentActiveSlide++;
            updateSlider();
        }
    });

    previousButton.addEventListener('click', () => {
        if (currentActiveSlide > 0) {
            currentActiveSlide--;
            updateSlider();
        }
    });

    updateSlider();
}