const ball = document.querySelector('#football_ball');
const footballField = document.querySelector('#football_field');

let currentRotation = 0;

function makeBallFollowTheClick(x, y) {
    const radius = ball.offsetWidth / 2;
    const fieldWidth = footballField.clientWidth;
    const fieldHeight = footballField.clientHeight;
    const clampedX = Math.max(radius, Math.min(x, fieldWidth - radius));
    const clampedY = Math.max(radius, Math.min(y, fieldHeight - radius));

    currentRotation += 360; 

    ball.style.transform = `translate(${clampedX - radius}px, ${clampedY - radius}px) rotate(${currentRotation}deg)`;
    ball.style.transition = 'transform 0.6s ease-out';
}

export function initFootball() {
    footballField.addEventListener('click', (evt) => {
        const rect = footballField.getBoundingClientRect();
        const xCoordinate = evt.clientX - rect.left;
        const yCoordinate = evt.clientY - rect.top;

        makeBallFollowTheClick(xCoordinate, yCoordinate);
    });
}