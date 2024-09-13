window.addEventListener('scroll', function() {
    // Berechne die Parallax-Geschwindigkeit, z.B. 0.5 bedeutet, dass das Bild halb so schnell scrollt wie der Inhalt
    var scrollPosition = window.scrollY;
    var parallaxSpeed = 0.4;

    let iHeight = window.innerHeight - 80;
    let percentage = (window.scrollY / iHeight) -0.2;
    
    // Setze die neue Hintergrundposition basierend auf dem Scrollwert
    document.querySelector('.bannerFotos').style.top = -(scrollPosition * parallaxSpeed) + 'px';
    document.getElementById("parallax").style.opacity = percentage;
});

const dialog = document.getElementById("menuDialog");

function showDialog() {
    menuDialog.style.opacity = "1";
    menuDialog.style.pointerEvents = "all";
    let blur = document.getElementById("blur");
    blur.style.backgroundColor = "#0000006a";
    blur.style.backdropFilter = "blur(5px)";
    blur.style.webkitBackdropFilter = "blur(5px)";
    blur.style.pointerEvents = "all";
};

function closeDialog() {
    menuDialog.style.opacity = "0";
    menuDialog.style.pointerEvents = "none";
    let blur = document.getElementById("blur");
    blur.style.backgroundColor = "#00000000";
    blur.style.backdropFilter = "blur(0px)";
    blur.style.webkitBackdropFilter = "blur(5px)";
    blur.style.pointerEvents = "none";
};

function openLeonMayer() {
    location.reload();
};

function openAbout() {
  window.location = "über-mich/index.html";
}

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

  const photoPreview = document.getElementById('photoPreview');
  const scrollRightButton = document.getElementById('scrollRight'); // Only the right button remains
  
  // Function to clone images to create a seamless loop effect
  function cloneImages() {
      const images = Array.from(photoPreview.children);
      images.forEach((image) => {
          const clone = image.cloneNode(true);
          clone.classList.add('cloned');
          photoPreview.appendChild(clone);
      });
  }
  
  // Clone images initially to simulate an infinite loop
  cloneImages();
  
  // Calculate the scroll amount based on one image width plus the gap
  function getScrollAmount() {
      const firstImage = photoPreview.querySelector('.previewPhotos');
      const gap = parseInt(getComputedStyle(photoPreview).gap);
      return firstImage.offsetWidth + gap;
  }
  
  // Smoothly scroll to the right by a given amount with animation
  function smoothScrollBy(amount) {
      const startPosition = photoPreview.scrollLeft;
      const endPosition = startPosition + amount;
      const duration = 300; // Duration of the scroll animation in milliseconds
      let startTime = null;
  
      function animateScroll(currentTime) {
          if (!startTime) startTime = currentTime;
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          const ease = 0.5 * (1 - Math.cos(Math.PI * progress)); // Ease-in-out formula
          photoPreview.scrollLeft = startPosition + (endPosition - startPosition) * ease;
  
          if (progress < 1) {
              requestAnimationFrame(animateScroll);
          } else {
              adjustScrollPosition(); // Adjust position after scroll completes
          }
      }
  
      requestAnimationFrame(animateScroll);
  }
  
  // Adjust the scroll position to maintain a seamless loop without visible resets
  function adjustScrollPosition() {
      const originalWidth = photoPreview.scrollWidth / 2; // Half of the scroll width
  
      // Adjust the scroll position when it reaches the boundaries of the cloned images
      if (photoPreview.scrollLeft >= originalWidth) {
          // Reset back to the equivalent start without visible jump
          photoPreview.scrollLeft = photoPreview.scrollLeft - originalWidth;
      } else if (photoPreview.scrollLeft < 0) {
          // Handle case if scrolling goes beyond the left edge (though left scroll is disabled)
          photoPreview.scrollLeft = 0;
      }
  }
  
  // Set initial scroll position to create a 3px gap at the start
  function initializeScrollPosition() {
      const firstImage = photoPreview.querySelector('.previewPhotos');
      const gap = 3; // Desired gap in pixels
      photoPreview.scrollLeft = firstImage.offsetWidth + gap;
  }
  
  // Initialize scroll position on page load
  initializeScrollPosition();
  
  // Event listener for the right scroll button
  scrollRightButton.addEventListener('click', () => {
      smoothScrollBy(getScrollAmount());
  });
  
  // Ensure scroll adjustments happen correctly on resize
  window.addEventListener('resize', () => {
      // Recalculate and adjust position
      adjustScrollPosition();
  });
  