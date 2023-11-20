// Check for the secret command in the console
function checkConsoleCommand() {
  console.log("Psst... Try typing 'hello' in the console!");
  window.addEventListener('message', function (e) {
    if (e.data === 'hello') {
      playIframe();
    }
  });
}

// Function to play the iframe
function playIframe() {
  var iframe = document.querySelector('iframe');
  if (iframe) {
    iframe.src = "https://d1tm91r4ytbt54.cloudfront.net/4a2bd50a-0f2f-45be-9e66-a2adf5849945/1680626121644/1v1-lol/index.html";
  }
}

// Call the function to check the console command
checkConsoleCommand();
