const dialog = document.getElementById("menuDialog");

function showDialog() {
    dialog.showModal();
}

function closeDialog() {
    dialog.close();
}

function openLeonMayer() {
    location.reload();
}

var w = window.innerWidth;
var h = window.innerHeight;

widthText.innerHTML = w + " x " + h;

document.querySelectorAll('#toC1 a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default behavior of anchor tag
      const targetId = this.getAttribute('href').substring(1); // Get the id of the target section
      const targetElement = document.getElementById(targetId); // Find the target element
      if (targetElement) {
        // Scroll to the target element smoothly
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });