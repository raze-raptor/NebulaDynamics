// Check for the secret command in the console
function checkConsoleCommand() {
  console.log("Psst... Try typing 'hello()' in the console!");
  window.addEventListener('message', function (e) {
    if (e.data === 'hello()') {
      redirectToSecretPage();
    }
  });
}

// Function to redirect to the secret.html page
function redirectToSecretPage() {
  window.location.href = "secret.html";
}

// Call the function to check the console command
checkConsoleCommand();

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
