const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

function handlePrevClick() {
    currentActive--;
    update();
}

function handleNextClick() {
    currentActive++;
    update();
}

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');
    const percent = ((actives.length - 1) / (circles.length - 1)) * 100;
    progress.style.width = `${percent}%`;
    prev.disabled = (actives.length < 2);
    next.disabled = (actives.length >= circles.length);
}