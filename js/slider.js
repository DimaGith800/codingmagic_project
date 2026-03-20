const previousButton = document.querySelector('#slider_previous');
const nextButton = document.querySelector('#slider_next');
const sliderTrack = document.querySelector('#slider_track');
const linesContainer = document.querySelector('#slider_items');

const authors = [
    { name: 'Олійниченко Дмитро', contribution: 'Виконав весь проєкт', photo: '../img/mee.png' },
    { name: 'Акула', contribution: 'Відповідальний за нагляд', photo: '../img/drill-sergeant.png' },
    { name: 'Тварини', contribution: 'Очільники департаменту якості', photo: '../img/chicken-and-duck.png' },
    { name: 'Дракон', contribution: 'Нагляд за чистотою коду', photo: '../img/dragon.png' },
    { name: 'wayou', contribution: 'Код динозаврика', photo: '../img/cat-in-glasses.jpg' },
    { name: 'amoga', contribution: 'waxba ma sameynin', photo: '../img/dino.png' },
    { name: 'Цікавий кіт', contribution: 'Тімлід', photo: '../img/cat-from-temu.png' }
];

let currentActiveSlide = 0;

function updateSlider() {
    sliderTrack.style.transform = `translateX(-${currentActiveSlide * 100}%)`;

    previousButton.style.opacity = currentActiveSlide === 0 ? '0.2' : '1';
    nextButton.style.opacity = currentActiveSlide === authors.length - 1 ? '0.2' : '1';

    const allLines = document.querySelectorAll('.main_container--game--slider--items--line');
    allLines.forEach((l, index) => {
        l.classList.toggle('active_line', index === currentActiveSlide);
        l.style.backgroundColor = index === currentActiveSlide ? '#797979' : '';
        l.style.width = index === currentActiveSlide ? '30px' : '';
    });
}

export function initSlider() {
    while (sliderTrack.firstChild) sliderTrack.removeChild(sliderTrack.firstChild);
    while (linesContainer.firstChild) linesContainer.removeChild(linesContainer.firstChild);

    authors.forEach((author, index) => {
        const slide = document.createElement('div');
        slide.style.minWidth = '100%';
        slide.style.display = 'flex';
        slide.style.flexDirection = 'column';
        slide.style.alignPosition = 'center';
        slide.style.alignItems = 'center';

        const img = document.createElement('img');
        img.classList.add('main_container--game--slider--itself--photo');
        img.src = author.photo;
        img.alt = author.name;

        const h3 = document.createElement('h3');
        h3.classList.add('main_container--game--slider--authorname');
        h3.textContent = author.name;

        const p = document.createElement('p');
        p.classList.add('main_container--game--slider--contribution');
        p.textContent = author.contribution;

        slide.append(img, h3, p);
        sliderTrack.appendChild(slide);

        const line = document.createElement('div');
        line.classList.add('main_container--game--slider--items--line');
        linesContainer.appendChild(line);
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