// You cannot access an arrow function before initialization unlike an ordinary function which you can access before initialization(this means creating)
// In other words, I can access an ordinary function before creating it.

let makeSound = (e) => {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0; //rewinds to start, before this line of code the audio plays only once in quick succession.
  audio.play();

  key.classList.add("playing");
};

window.addEventListener("keydown", makeSound);

// If you use an arrow function to write the removeTransition function, the THIS there refers to the Window object.
// However, if you write a normal function, the THIS will refer to the target key(the key the user is pressing on the keyboard).
function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip if it is not a CSS transform property

  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

// function makeSound(e) {
//      console.log(e);
// }
