function black() {
    // Select all elements with the class "menuItem"
    let menuItems = document.querySelectorAll(".menuItem");
    let black = document.getElementById("black");

    // Loop through each menuItem and add the event listener
    menuItems.forEach((menuItem) => {
        menuItem.addEventListener("mouseover", () => {
            black.style.opacity = "1";
        });

        menuItem.addEventListener("mouseout", () => {
            black.style.opacity = "0";
        });
    });
};


function adjustContent() {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let horizontal = document.querySelectorAll(".horHor");
    let vertical = document.querySelectorAll(".verVer");
    let fullScreenButton = document.querySelectorAll(".fullScreen");
    let topic = document.querySelectorAll(".topic");
    let welcome = document.querySelectorAll(".welcome");
    let images = document.querySelectorAll('img');
    
document.addEventListener("keydown", function(event) {
    event.preventDefault();
    if (event.key === "ArrowLeft" || event.key === "a") {
        prev.click();
    }
    else if (event.key === "ArrowRight" || event.key === "d") {
        next.click();
    }
    else if (event.key === "Escape") {
        if (window.fullscreenElement) {
            window.exitFullscreen();
            closeGalerie();
        }
    }
});



window.onload = black();

changeContentForMobile();
window.onload = adjustContent;
window.onresize = adjustContent;

    if (windowWidth <= 480) {
        horizontal.forEach(element => {
            element.style.width = "95%";
            liege.style.width = "95%";
        });

        vertical.forEach(element => {
            element.style.width = "95%";
        });

        topic.forEach(element => {
            element.style.fontSize = "1.4rem";
        });
        images.forEach(element => {
            element.style.borderRadius = "6px";
        });
        
        horizontal.forEach(element => {
            abstand2.style.display = "none";
            abstand1.style.display = "none";
            abstand3.style.display = "none";
            abstand4.style.display = "none";
            abstand5.style.display = "none";
            abstand6.style.display = "none";
        });

    } else if (windowWidth > 480 && windowWidth <= 768) {
        horizontal.forEach(element => {
            element.style.width = "90%";
            liege.style.width = "90%";
        });

        vertical.forEach(element => {
            element.style.width = "90%";
        });

        topic.forEach(element => {
            element.style.fontSize = "1.4rem";
        });

        images.forEach(element => {
            element.style.borderRadius = "6px";
        });

        topic.style.marginTop = "0px";
        
        horizontal.forEach(element => {
            abstand2.style.display = "none";
            abstand1.style.display = "none";
            abstand3.style.display = "none";
            abstand4.style.display = "none";
            abstand5.style.display = "none";
            abstand6.style.display = "none";
        });


    } else if (windowWidth > 768 && windowWidth <= 1900) {
        horizontal.forEach(element => {
            element.style.width = "45%";
            referenceElementOne.parentElement.insertBefore(elementToMoveOne, referenceElementOne);
            referenceElementTwo.parentElement.insertBefore(elementToMoveTwo, referenceElementTwo);
        });

        welcome.forEach(element => {
            element.style.fontSize = "1.5rem";
        });
        
        horizontal.forEach(element => {
            abstand2.style.display = "none";
            abstand1.style.display = "none";
            abstand3.style.display = "none";
            abstand4.style.display = "none";
            abstand5.style.display = "none";
            abstand6.style.display = "none";
        });


    } else {
        horizontal.forEach(element => {
            element.style.width = "30%";
            liege.style.width = "calc(90% + 20px)";
            liege.style.maxWidth = "95vw";
            abstand2.style.display = "block";
            abstand1.style.display = "block";
            abstand3.style.display = "block";
            abstand4.style.display = "block";
            abstand5.style.display = "block";
            abstand6.style.display = "block";
        });

        vertical.forEach(element => {
            element.style.width = "calc(20% - 3px)";
        });

        welcome.forEach(element => {
            element.style.fontSize = "1.5rem";
        });
    
}}

changeContentForMobile();
window.onload = adjustContent;
window.onresize = adjustContent;

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }

function changeContentForMobile() {
    if (isMobileDevice()) {
      desktopMobile.style.color = "#ffffff";
    }
}

changeContentForMobile();
window.onload = adjustContent;
window.onresize = adjustContent;


function playAudio(url) {
    new Audio(url).play();
}


function deactivateHover() {
    document.querySelectorAll(".metaData").forEach(element => {
        element.style.backgroundColor = "transparent";
        element.style.color = "transparent";
    });

    document.querySelectorAll(".fullScreen").forEach(element => {
        element.style.backgroundColor = "#b5b5b5ea";
    });

    desktopMobile.style.display = "none";
    deactivateButton.style.display = "none";
    activateButton.style.display = "inline";
    desktopMovbileClick.style.marginTop = "16px";
}

function activateHover() {
    location.reload();
}

document.querySelectorAll('#toC a').forEach(anchor => {
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
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ) {
        scrollButton.style.opacity = "1";
        scrollButton.style.transition = "0.5s";
    } else {
        scrollButton.style.opacity = "0";
        scrollButton.style.transition = "0.5s";
    }
  };
  
function comingSoon() {
    alert("Diese Funktion ist bald verfügbar!");
}

function closeGalerie() {
    fullScreenGalerie.style.display = "none";
    window.onscroll = null;
    document.body.style.overflow = '';
    scrollToTopButton.style.display = "inline";
}

var slideIndex = 1;

function currentSlide(n) {


  showSlides(slideIndex = n);

  var fullScreenGalerie = document.getElementById('fullScreenGalerie');
  let slides = document.getElementsByClassName('mySlides');


  if (slides.length === 0) {
    console.error("No elements found with class 'mySlides'");
    return;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  if (n > slides.length) { n = 1; }
  if (n < 1) { n = slides.length; }

  slides[n - 1].style.display = "block";
  fullScreenGalerie.style.display = "inline";

  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function() {
    window.scrollTo(scrollLeft, scrollTop);
  };

  scrollButton.style.display = "none";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var fullScreenGalerie = document.getElementById('fullScreenGalerie');
  var slides = fullScreenGalerie.getElementsByClassName('mySlides');

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

let slides = document.getElementsByClassName('mySlides');