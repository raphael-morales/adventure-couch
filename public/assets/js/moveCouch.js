const arrowUp = document.getElementById('arrowUp');
const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');
const arrowDown = document.getElementById('arrowDown');

const couch = document.getElementById('couch');

function move(arrow) {
    let sourceId = couch.parentElement.id;
    const sourceArray = sourceId.split("");
    if (arrow === "arrowUp" && sourceArray[6] < 6) {
        sourceArray[6]++;
    } else if (arrow === "arrowDown" && sourceArray[6] > 1) {
        sourceArray[6]--;
    } else if (arrow === "arrowLeft" && sourceArray[2] > 1) {
        sourceArray[2]--;
    } else if (arrow === "arrowRight" && sourceArray[2] < 6) {
        sourceArray[2]++;
    }

    const destinationId = sourceArray.join("");

    const destination = document.getElementById(destinationId);
    console.log(destination.className);
    if (destination.className.search('alpes') !== -1)
    {
        window.alert("Impossible de traverser les Alpes en canap'")
    }
    else
    {
        destination.appendChild(couch);
    }
}

arrowUp.addEventListener('click', function () {
    move('arrowUp');
});
arrowDown.addEventListener('click', function () {
    move('arrowDown');
});
arrowLeft.addEventListener('click', function () {
    move('arrowLeft');
});
arrowRight.addEventListener('click', function () {
    move('arrowRight');
});
