const themeChangeContainer = document.querySelector('.header_container--content--themewrapper');
const lightThemeImage = document.querySelector('.light_theme');
const darkThemeImage = document.querySelector('.moon_theme');
const logo = document.querySelector('.header_logo');
const darklogo = document.querySelector('.header_darklogo');
const mainContainer = document.querySelector('.main_container');
const lines = document.querySelectorAll('.line', '.dashed_line');
const header = document.querySelector('.header');
const headerSelectArrowDown = document.querySelector('.header_container--nav--filter--svg');

const rockPaperScissors = document.querySelectorAll('.main_container--game--rps--wrapper--game--button');
const rockPaperScissorsImages = document.querySelectorAll('.main_container--game--rps--wrapper--game--button--image');
const rockPaperScissorsInvertedImages = document.querySelectorAll('.main_container--game--rps--wrapper--game--button--invertedimage');

const inputSubmitButtons = document.querySelectorAll('[id$="_submit"]');
const RockPaperScissorsComputersPickButton = document.querySelector('#rps-computerspick');

const calculatorOperators = document.querySelectorAll('.main_container--game--calculator--operators--operator');
const calculatorOperatorEquals = document.querySelector('.main_container--game--calculator--calculate');
const calculatorInputs = document.querySelectorAll('.main_container--game--calculator--input');
const gameInputs = document.querySelectorAll('.main_container--game--leapyear--input--itself, .main_container--game--guessthenumber--input--itself, .main_container--game--timecalc--input--itself');
const calculatorResultInput = document.querySelector('.main_container--game--calculator--result');

const footballField = document.querySelector('#football_field')

function changeTheme() {
    themeChangeContainer.classList.toggle('active');
    const isDark = themeChangeContainer.classList.contains('active');

    if (isDark) {
        header.style.backgroundColor = "#212121";
        header.style.borderBottom = '0.5px solid #0f0707';
        if (headerSelectArrowDown) headerSelectArrowDown.style.stroke = '#FFFFFF';
        
        lightThemeImage.style.display = 'none';
        darkThemeImage.style.display = 'block';
        logo.style.display = 'none';
        darklogo.style.display = 'block';

        lines.forEach(line => line.style.backgroundColor = '#F0F8FF');
        
        inputSubmitButtons.forEach(button => {
            button.style.backgroundColor = '#F0F8FF';
            const circle = button.querySelector('svg circle');
            const path = button.querySelector('svg path');
            if (circle) circle.style.stroke = '#000000';
            if (path) path.style.fill = '#212121';
        });

        rockPaperScissors.forEach(button => button.style.backgroundColor = '#F0F8FF');
        rockPaperScissorsImages.forEach(img => img.style.display = 'none');
        rockPaperScissorsInvertedImages.forEach(img => img.style.display = 'block');

        RockPaperScissorsComputersPickButton.style.backgroundColor = '#F0F8FF';
        RockPaperScissorsComputersPickButton.style.color = '#000000';

        calculatorInputs.forEach(input => input.style.backgroundColor = '#3F3F3F');
        calculatorOperators.forEach(op => {
            op.style.backgroundColor = '#F0F8FF';
            op.style.color = '#212121';
        });

        calculatorOperatorEquals.style.backgroundColor = '#F0F8FF';
        calculatorOperatorEquals.style.color = '#212121';
        
        gameInputs.forEach(input => input.style.backgroundColor = '#3F3F3F');
        calculatorResultInput.style.backgroundColor = '#3F3F3F';

        footballField.style.border = '2px solid #FFFFFF'

        document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a').forEach(el => {
            el.style.color = '#F0F8FF';
        });

        mainContainer.style.backgroundColor = '#212121';
        document.body.style.backgroundColor = '#212121';

    } else {
        header.style.backgroundColor = "";
        header.style.borderBottom = "";
        if (headerSelectArrowDown) headerSelectArrowDown.style.stroke = 'black';

        lightThemeImage.style.display = 'block';
        darkThemeImage.style.display = 'none';
        logo.style.display = 'block';
        darklogo.style.display = 'none';

        lines.forEach(line => line.style.backgroundColor = '');
        rockPaperScissors.forEach(button => button.style.backgroundColor = '');
        rockPaperScissorsImages.forEach(img => img.style.display = 'block');
        rockPaperScissorsInvertedImages.forEach(img => img.style.display = 'none');

        inputSubmitButtons.forEach(button => {
            button.style.backgroundColor = '';
            const circle = button.querySelector('svg circle');
            const path = button.querySelector('svg path');
            if (circle) circle.style.stroke = '';
            if (path) path.style.fill = '';
        });

        RockPaperScissorsComputersPickButton.style.backgroundColor = '';
        RockPaperScissorsComputersPickButton.style.color = '';

        calculatorInputs.forEach(input => input.style.backgroundColor = '');
        calculatorOperators.forEach(op => {
            op.style.backgroundColor = '';
            op.style.color = '';
        });

        calculatorOperatorEquals.style.backgroundColor = '';
        calculatorOperatorEquals.style.color = '';
        gameInputs.forEach(input => input.style.backgroundColor = '');
        calculatorResultInput.style.backgroundColor = '';

        footballField.style.border = ''

        document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a').forEach(el => {
            el.style.color = '';
        });

        mainContainer.style.backgroundColor = '';
        document.body.style.backgroundColor = '';
    }
}

export function initThemeChange() {
    if (themeChangeContainer) {
        themeChangeContainer.addEventListener('click', changeTheme);
    }
}