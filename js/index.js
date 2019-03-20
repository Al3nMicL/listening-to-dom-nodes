// using this file is optional
// you can also load the code snippets in using your browser's console

// Demonstrate Listening to Events on a DOM Node with addEventListener()
const main = document.getElementById('main');

main.addEventListener('click', event => {
  alert('I was clicked!');
});

// Demonstrate Triggering Events Listeners on DOM Nodes
const input = document.querySelector('input');

input.addEventListener('keydown', e => {
  console.log(e.key);
  // Demonstrate Preventing the Default Behavior for DOM Nodes
  // e.key === "g" ? e.preventDefault() : console.log(e.key);
});

// Explain the Difference Between Bubbling and Capturing Events
let divs = document.querySelectorAll('div');
// Bubbling
function bubble(e) {
  // e.stopPropagation(); // stops other events from firing
  console.log(`${this.firstChild.nodeValue.trim()} bubbled`);
}

divs.forEach((i) => {
  i.addEventListener('click', bubble);
});
// Capturing
function capture(e) {
  console.log(`${this.firstChild.nodeValue.trim()} captured`);
}

// divs.forEach((i) => {
//   i.addEventListener('click', capture, true);
// });
