const modal = document.querySelector('#subscribe-modal');
const close = document.querySelector(".footer_modal--container--close");
const openButton = document.querySelector('#subscribe-button');
const input = document.querySelector('#subscribe-input')

function openModal() {
    if (!input.value) {
        return;
    }
    else { modal.style.display = 'block' }
}

function onCloseButtonClick() {
    modal.style.display = 'none';
}

function onEscapePress(evt) {
    if (evt.key === 'Escape') {
        modal.style.display = 'none';
    }
}

function initSubscribeFormSubmit() {
    close.addEventListener('click', onCloseButtonClick);
    document.addEventListener('keydown', onEscapePress);
    modal.addEventListener('click', (evt) => {
        if (evt.target === modal) {
            modal.style.display = 'none';
        }
    });
    openButton.addEventListener('click', openModal);
}

export {initSubscribeFormSubmit};