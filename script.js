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

// Create a function named luca() in the console
window.luca = function () {
  console.log('Executing luca() command...');

  // Redirect to the fnaf.html page
  window.location.href = 'fnaf.html';
};

console.log('Type "luca()" in the console to execute the command.');

// Drag and drop functionality
document.addEventListener('DOMContentLoaded', function () {
  const macWindow = document.querySelector('.mac-window');
  let isDragging = false;
  let offset = { x: 0, y: 0 };

  macWindow.addEventListener('mousedown', function (e) {
    isDragging = true;
    offset = {
      x: e.clientX - macWindow.getBoundingClientRect().left,
      y: e.clientY - macWindow.getBoundingClientRect().top,
    };
  });

  document.addEventListener('mousemove', function (e) {
    if (!isDragging) return;

    const x = e.clientX - offset.x;
    const y = e.clientY - offset.y;

    macWindow.style.left = `${x}px`;
    macWindow.style.top = `${y}px`;
  });

  document.addEventListener('mouseup', function () {
    isDragging = false;
  });
});
