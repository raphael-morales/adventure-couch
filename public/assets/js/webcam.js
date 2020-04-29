function gestionModalWebCam() {
    let imgObjTv = document.getElementById("tv");
    let modal = document.getElementById("modal-webcam");
    let modalClose = document.getElementById("close");
    console.log("___gestion modal webcam ___",imgObjTv);
    imgObjTv.addEventListener("focusin",() => {
        // modal set visible
        modal.style.display = "block";
    });

    imgObjTv.addEventListener("click",() => {
        // modal set visible
        modal.style.display = "block";


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



