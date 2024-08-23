window.addEventListener('scroll', function() {
    // Berechne die Parallax-Geschwindigkeit, z.B. 0.5 bedeutet, dass das Bild halb so schnell scrollt wie der Inhalt
    var scrollPosition = window.scrollY;
    var parallaxSpeed = 0.5;

    let iHeight = window.innerHeight - 80;
    let percentage = (window.scrollY / iHeight) -0.2;
    
    // Setze die neue Hintergrundposition basierend auf dem Scrollwert
    document.querySelector('.bannerFotos').style.top = -(scrollPosition * parallaxSpeed) + 'px';
    document.getElementById("parallax").style.opacity = percentage;
});

const dialog = document.getElementById("menuDialog");

function showDialog() {
    dialog.showModal();
};

function closeDialog() {
    dialog.close();
};

function openLeonMayer() {
    location.reload();
};

function isMobile() {
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
};

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