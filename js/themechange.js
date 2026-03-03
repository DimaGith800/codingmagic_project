const themeChangeContainer = document.querySelector('.header_container--content--themewrapper');
const lightThemeImage = document.querySelector('.light_theme');
const darkThemeImage = document.querySelector('.moon_theme');
const logo = document.querySelector('.header_logo');
const darklogo = document.querySelector('.header_darklogo');
const mainContainer = document.querySelector('.main_container');
const lines = document.querySelectorAll('.line')
const header = document.querySelector('.header')
const headerSelectArrowDown = document.querySelector('.header_container--nav--filter--svg');
const rockPaperScissors = [document.querySelector('#rps-rock'), document.querySelector('#rps-paper'), document.querySelector('#rps-scissors')]
const rockPaperScissorsImages = document.querySelectorAll('.main_container--content--rps--wrapper--game--button--image');
const rockPaperScissorsInvertedImages = document.querySelectorAll('.main_container--content--rps--wrapper--game--button--invertedimage');
const inputSubmitButtons = document.querySelectorAll('.main_container--content--game--input--button');
const RockPaperScissorsComputersPickButton = document.querySelector('#rps-computerspick');
const calculatorOperators = document.querySelectorAll('.main_container--content--calculator--operators--operator');
const calculatorOperatorEquals = document.querySelector('.main_container--content--calculator--calculate');
const calculatorInputs = document.querySelectorAll('.main_container--content--calculator--input');
const gameInputs = document.querySelectorAll('.main_container--content--game--input--itself');
const calculatorResultInput = document.querySelector('.main_container--content--calculator--result');

function changeTheme() {
    themeChangeContainer.classList.toggle('active');
    const isDark = themeChangeContainer.classList.contains('active');

    if (isDark) {
        header.style.backgroundColor = "#212121"
        header.style.borderBottom = '0.5px solid #0f0707'
        headerSelectArrowDown.style.stroke = '#FFFFFF'
        lightThemeImage.style.display = 'none';
        darkThemeImage.style.display = 'block';
        logo.style.display = 'none';
        darklogo.style.display = 'block';
        lines.forEach((line) => {
            line.style.backgroundColor = '#F0F8FF';
        })
        inputSubmitButtons.forEach((button) => {
            button.style.backgroundColor = '#F0F8FF';

            const circle = button.querySelector('svg circle');
            const path = button.querySelector('svg path');

            if (circle) circle.style.stroke = '#000000';
            if (path) path.style.fill = '#212121';
        });
        rockPaperScissors.forEach((button) => {
            button.style.backgroundColor = '#F0F8FF';
        })
        rockPaperScissorsImages.forEach((image) => image.style.display = 'none');
        rockPaperScissorsInvertedImages.forEach((image) => image.style.display = 'block');
        RockPaperScissorsComputersPickButton.style.backgroundColor = '#F0F8FF';
        RockPaperScissorsComputersPickButton.style.color = '#000000';
        calculatorInputs.forEach((input) => input.style.backgroundColor = '#3F3F3F')

        calculatorOperators.forEach((operator) => {
            operator.style.backgroundColor = '#F0F8FF';
            operator.style.color = '#212121'
        })
        calculatorOperatorEquals.style.backgroundColor = '#F0F8FF';
        calculatorOperatorEquals.style.color = '#212121'
        gameInputs.forEach((input) => {
            input.style.backgroundColor = '#3F3F3F'
        })
        calculatorResultInput.style.backgroundColor = '#3F3F3F';

        document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a').forEach(el => {
            el.style.color = '#F0F8FF';
        });
        mainContainer.style.backgroundColor = '#212121';

        document.body.style.backgroundColor = '#212121';
    } else {
        header.style.backgroundColor = "";
        lightThemeImage.style.display = 'block';
        darkThemeImage.style.display = 'none';
        darklogo.style.display = 'none';
        logo.style.display = 'block';
        lines.forEach((line) => {
            line.style.backgroundColor = '#000000';
        })
        rockPaperScissors.forEach((button) => {
            button.style.backgroundColor = '#000000';
        })
        rockPaperScissorsImages.forEach((image) => image.style.display = 'block');
        rockPaperScissorsInvertedImages.forEach((image) => image.style.display = 'none');
        RockPaperScissorsComputersPickButton.style.backgroundColor = '#000000';
        RockPaperScissorsComputersPickButton.style.color = '#FFFFFF';
        document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a').forEach(el => {
            if (!el.closest('main_container')) {
                el.style.color = 'black';
            }
        });
        gameInputs.forEach((input) => {
            input.style.backgroundColor = ''
        })
        calculatorResultInput.style.backgroundColor = '';
        calculatorInputs.forEach((input) => input.style.backgroundColor = '')
        calculatorOperators.forEach((operator) => {
            operator.style.backgroundColor = '';
            operator.style.color = ''
        })
        calculatorOperatorEquals.style.backgroundColor = '';
        calculatorOperatorEquals.style.color = ''
        inputSubmitButtons.forEach((button) => {
            button.style.backgroundColor = '#000000';

            const circle = button.querySelector('svg circle');
            const path = button.querySelector('svg path');

            if (circle) circle.style.stroke = '#FFFFFF';
            if (path) path.style.fill = '#FFFFFF';
        });

        document.body.style.backgroundColor = '#FFFFFF';
        mainContainer.style.backgroundColor = '#FFFFFF';
    }
}

function initThemeChange() {
    themeChangeContainer.addEventListener('click', changeTheme);
}

export {initThemeChange};