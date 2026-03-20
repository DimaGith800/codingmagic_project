const openSelectContainer = document.querySelector('#select_open');
const selectContainer = document.querySelector('#select_filter');
const icon = document.querySelector('#select_svg')
const choices = document.querySelectorAll('.header_container--nav--filter--list--button');

function toggleSelectList() {
    const isOpen = selectContainer.style.display === 'block';

    if (isOpen) {
        selectContainer.style.display = 'none';
        icon.style.transform = 'rotate(0deg)';
    } else {
        selectContainer.style.display = 'block';
        icon.style.transform = 'rotate(180deg)';
    }
    icon.style.transition = '0.3s ease';
}

function initChoiceFromList() {
    const choices = document.querySelectorAll('.header_container--nav--filter--list--button');
    const items = document.querySelectorAll('.numerical, .game, .acquaintance');

    choices.forEach((choice) => {
        choice.addEventListener('click', (evt) => {
            const category = evt.currentTarget.id; 

            items.forEach((item) => {
                if (item.classList.contains(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

function initSelectFilterList() {
    openSelectContainer.addEventListener('click', toggleSelectList);
    initChoiceFromList();
}

export {initSelectFilterList}