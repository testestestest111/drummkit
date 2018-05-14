window.addEventListener('keydown', playing);

function playing(e){
let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
if (!audio){
  return;
}

audio.play();
audio.currentTime = 0;

key.classList.add('play');
function addRemoveClass(){
  key.classList.remove('play');
}

setTimeout(addRemoveClass, 70);
}
