window.addEventListener('scroll', function() {
    // Berechne die Parallax-Geschwindigkeit, z.B. 0.5 bedeutet, dass das Bild halb so schnell scrollt wie der Inhalt
    var scrollPosition = window.scrollY;
    var parallaxSpeed = 0.5;
    
    // Setze die neue Hintergrundposition basierend auf dem Scrollwert
    document.querySelector('.bannerFotos').style.top = -(scrollPosition * parallaxSpeed) + 'px';
});

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
  
  let scrollButton = document.getElementById("scrollToTopButton");

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
        scrollButton.style.opacity = "0";
        scrollButton.style.transition = "0.5s";
    } else {
        scrollButton.style.opacity = "1";
        scrollButton.style.transition = "0.5s";
    }
  };

  function hideScrollButton() {
    let vw62 = window.innerWidth*0.62;

    if (window.innerHeight > vw62) {
        scrollButton.style.display = "none";
    }
  }

  hideScrollButton();