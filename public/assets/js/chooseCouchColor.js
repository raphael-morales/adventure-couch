const blueCouch = document.getElementById('blueCouch');
const pinkCouch = document.getElementById('pinkCouch');
const yellowCouch = document.getElementById('yellowCouch');
const blackCouch = document.getElementById('blackCouch');

function changeSrc($colorCouch) {
    let src = document.getElementById($colorCouch).src;
    console.log(src);
    document.getElementById('couchColor').src = src;
    console.log(document.getElementById('couchColor').src);
}

blueCouch.addEventListener('click', function () {
    changeSrc('blueCouch');
});

pinkCouch.addEventListener('click', function () {
    changeSrc('pinkCouch');
});

yellowCouch.addEventListener('click', function () {
    changeSrc('yellowCouch');
});

blackCouch.addEventListener('click', function () {
    changeSrc('blackCouch');
});
