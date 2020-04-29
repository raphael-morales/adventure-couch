const couch = document.getElementById('couch');
const question = document.getElementById('question')

// couch.parentElement.id = 'x-4_y-5';

if (couch.parentElement.id === question.parentElement.id){
    question.style.display = "none";
}