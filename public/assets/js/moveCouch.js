const arrowUp = document.getElementById('arrowUp');
const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');
const arrowDown = document.getElementById('arrowDown');

const couch = document.getElementById('couch');

arrowUp.addEventListener('click', function () {
    // Destination is defined relative to localisation
    // If arrowUp, then ord must be +1 relative of localisation
    // Split the Id of the
    let sourceId = couch.parentElement.id;
    const sourceArray = sourceId.split("");
    // add 1 to y (6th position of the array which is the value of y)
    if (sourceArray[6] <6) {
        sourceArray[6] ++;
    }
    const destinationId = sourceArray.join("");
    const destination = document.getElementById(destinationId);
    destination.appendChild(couch);
});

arrowDown.addEventListener('click', function () {
    // Destination is defined relative to localisation
    // If arrowUp, then ord must be +1 relative of localisation
    // Split the Id of the
    let sourceId = couch.parentElement.id;
    const sourceArray = sourceId.split("");
    // add 1 to y (6th position of the array which is the value of y)
    sourceArray[6] --;
    const destinationId = sourceArray.join("");
    const destination = document.getElementById(destinationId);
    destination.appendChild(couch);
});

arrowLeft.addEventListener('click', function () {
    // Destination is defined relative to localisation
    // If arrowLeft, then abs must be -1 relative of localisation
    // Split the Id of the
    let sourceId = couch.parentElement.id;
    const sourceArray = sourceId.split("");
    // -1 to y (2nd position of the array which is the value of x)
    sourceArray[2] --;
    const destinationId = sourceArray.join("");
    const destination = document.getElementById(destinationId);
    destination.appendChild(couch);
});

arrowRight.addEventListener('click', function () {
    // Destination is defined relative to localisation
    // If arrowLeft, then abs must be -1 relative of localisation
    // Split the Id of the
    let sourceId = couch.parentElement.id;
    const sourceArray = sourceId.split("");
    // add 1 to x (2nd position of the array which is the value of x)
    sourceArray[2] ++;
    const destinationId = sourceArray.join("");
    const destination = document.getElementById(destinationId);
    destination.appendChild(couch);
});


/* second attempt of refacto
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
    destination.appendChild(couch);
}

arrowUp.addEventListener('click', move(string arrowUp))
*/

/* first attempt of refacto
const arrows = ['arrowUp','arrowDown','arrowLeft','arrowRight'];
for (let i = 0; i < arrows.length ; i++ ) {
    arrows[i].addEventListener('click', function () {
        let sourceId = couch.parentElement.id;
        const sourceArray = sourceId.split("");

        if (arrows[i] === "arrowUp" && sourceArray[6] < 6) {
            sourceArray[6]++;
        } else if (arrows[i] === "arrowDown" && sourceArray[6] > 1) {
            sourceArray[6]--;
        } else if (arrows[i] === "arrowLeft" && sourceArray[2] > 1) {
            sourceArray[2]--;
        } else if (arrows[i] === "arrowRight" && sourceArray[2] < 6) {
            sourceArray[2]++;
        }

        const destinationId = sourceArray.join("");
        const destination = document.getElementById(destinationId);
        destination.appendChild(couch);
    })
}

*/