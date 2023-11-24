// Secret
let konamiCode = [];
const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];

document.addEventListener('keydown', (event) => {
  konamiCode.push(event.key);
  konamiCode = konamiCode.slice(-secretCode.length);


  
  if (JSON.stringify(konamiCode) === JSON.stringify(secretCode)) {
    // Activate the easter egg
    window.location.href = 'secret.html';
  }
});


// Create a function named mat() in the console
window.mat = function () {
  console.log('Executing mat() command...');
  
  // Redirect to the secret.html page
  window.location.href = 'secret.html';
};

console.log('Type "mat()" in the console to execute the command.');

// Create a function named mat() in the console
window.luca = function () {
  console.log('Executing luca() command...');
  
  // Redirect to the secret.html page
  window.location.href = 'fnaf.html';
};

console.log('Type "luca()" in the console to execute the command.');

