const arrowUp = document.getElementById('arrowUp');
const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');
const arrowDown = document.getElementById('arrowDown');

const couch = document.getElementById('couch');
const question = document.getElementById('question');
const tv = document.getElementById('tv');
const mountain = document.getElementById('mountainImg');
const tree = document.getElementById('treeImg');


function move(arrow)
{
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
    if (destination.className.search('alpes') !== -1)
    {
        window.alert("Impossible de traverser les Alpes en canap'")
    }
    else {
        destination.appendChild(couch);
    }
    if (couch.parentElement.id === question.parentElement.id) {
        question.style.display = "none";
        $("#exampleModalCenter").modal("show");
        $("#exampleModalCenter").css("z-index", "1500");


    } else if (couch.parentElement.id === tv.parentElement.parentElement.id) {
        tv.parentElement.style.display = "none";
        $("#modal-webcam").modal("show");
        $("#modal-webcam").css("z-index", "1500");
    } else {
        question.parentElement.style.display = "";
        tv.parentElement.style.display = "";
        $("#modal-webcam").modal("hide");
        $("#exampleModalCenter").modal("hide");
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


function validAnswer1()
{
    window.open("/Home/level/2")
}

function validAnswer2()
{
    window.open("/Home/level/3")
}

function validAnswer3()
{
    window.alert("Vous avez gagné !")
}