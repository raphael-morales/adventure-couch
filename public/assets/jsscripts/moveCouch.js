const arrowUp = document.getElementById('arrowUp');
const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');
const arrowDown = document.getElementById('arrowDown');

const couch = document.getElementById('couch');

arrowDown.style.color = "#777";

arrowUp.addEventListener('click', function () {
    arrowUp.style.color = "#CD5C5C";
    // définir dynamiquement destination
    destination.appendChild(couch)

});
arrowLeft.addEventListener('click', function () {
    // définir dynamiquement destination
    destination.appendChild(couch)

});

