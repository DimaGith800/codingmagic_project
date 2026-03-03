const modal = document.querySelector('.modal');
const close = document.querySelector(".modal_container--close");
const submit = document.querySelector('.modal_container--submit');
const modalInput = document.querySelector('.modal_container--input');
const user = document.querySelector('.greet_username')
const greet = document.querySelector('.header_container--content--greet')

function onUserFormSubmit(event) {
    event.preventDefault();
    greet.style.display = 'block';
    modalInput.value.trim() ? user.textContent = modalInput.value : user.textContent = 'User'
    modal.style.display = 'none';
}

function onCloseButtonClick() {
    user.textContent = 'User';
    greet.style.display = 'block';
    modal.style.display = 'none';
}

function initUserFormSubmit() {
    submit.addEventListener('click', onUserFormSubmit);
    close.addEventListener('click', onCloseButtonClick);
}

export {initUserFormSubmit};