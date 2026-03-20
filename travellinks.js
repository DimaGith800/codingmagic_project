
export function initTravelLinks() {
    document.addEventListener('DOMContentLoaded', function() {
        const scrollButton = document.querySelector('#our-team-link');
        const targetSection = document.getElementById('our_team');

        if (scrollButton && targetSection) {
            scrollButton.addEventListener('click', function(event) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
            });
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        const scrollButton = document.querySelector('#contacts-link');
        const targetSection = document.getElementById('footer');

        if (scrollButton && targetSection) {
            scrollButton.addEventListener('click', function(event) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
            });
        }
    });
}
