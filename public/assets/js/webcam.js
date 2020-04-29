function gestionModalWebCam() {
    let imgObjTv = document.getElementById("tv");
    let modal = document.getElementById("modal-webcam");
    let modalClose = document.getElementById("close");
    console.log("___gestion modal webcam ___",imgObjTv);
    imgObjTv.addEventListener("focusin",() => {
        // modal set visible
        console.log("_____ Detection  de click sur la TV by focus in  ____" );
        modal.style.display = "block";

    });

    imgObjTv.addEventListener("click",() => {
        // modal set visible
        console.log("_____ Detection  de click sur la TV by click ____" );
        modal.style.display = "block";
        getVideoStream();

    });

    modalClose.addEventListener("click",() => {
        // modal set visible
        console.log("_____ detection close nodal ____" );
        modal.style.display = "none";
    });

    document.addEventListener('click', function (e) {
        if(e.target.className === 'modal'){
            modal.style.display = "none";
        }
    }, false);



}

function getVideoStream(){
    var video = document.querySelector("#videoElement");

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (err0r) {
                console.log("Something went wrong!");
            });
    }
}

function stop(e) {
    var stream = video.srcObject;
    var tracks = stream.getTracks();

    for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        track.stop();
    }

    video.srcObject = null;
}


// When the user clicks on <span> (x), close the modal
/*span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

*/



