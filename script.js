let animation = document.querySelector('.animation');
let btn = document.querySelector('.eye');

btn.onclick = function() {
    animation.classList.toggle('dark');
    animation.classList.toggle('light');
};