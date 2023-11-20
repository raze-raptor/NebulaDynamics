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
