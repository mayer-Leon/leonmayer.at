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
    blur.style.webkitBackdropFilter = "blur(0px)";
    blur.style.pointerEvents = "none";
};




//Standard-Code Ende



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


function width() {
  let horizontals = document.querySelectorAll('horizontal');
  let verticals = document.querySelectorAll('vertical')
}






function createImageGallery() {
    const gallery = document.getElementById('gallery');
    const images = Array.from(gallery.getElementsByTagName('img'));
    const container = document.createElement('div');
    container.id = 'gallery-container';
    gallery.parentNode.insertBefore(container, gallery);

    function getImagesPerRow() {
        const width = window.innerWidth;
        if (width >= 1500) return 4; // Large monitors
        if (width >= 1100) return 3;  // Laptops
        if (width >= 1000) return 2;  // Tablets
        if (width >= 500) return 2;  // New breakpoint
        return 1; // Mobile
    }

    function createGroups() {
        container.innerHTML = ''; // Clear existing groups
        const imagesPerRow = getImagesPerRow();

        for (let i = 0; i < images.length; i += imagesPerRow) {
            const group = document.createElement('div');
            group.className = 'image-group';
            const groupImages = images.slice(i, i + imagesPerRow);
            
            groupImages.forEach(img => {
                const wrapper = document.createElement('div');
                wrapper.className = 'image-wrapper';
                const skeleton = document.createElement('div');
                skeleton.className = 'skeleton-animation';
                wrapper.appendChild(skeleton);
                const newImg = img.cloneNode(true);
                newImg.onload = () => {
                    wrapper.classList.add('loaded');
                    skeleton.remove();
                };
                wrapper.appendChild(newImg);
                group.appendChild(wrapper);
            });

            container.appendChild(group);
        }
    }

    function adjustLayout() {
        const imageGroups = container.getElementsByClassName('image-group');
        Array.from(imageGroups).forEach(group => {
            const wrappers = group.getElementsByClassName('image-wrapper');
            let aspectRatios = [];

            Array.from(wrappers).forEach((wrapper, index) => {
                const img = wrapper.getElementsByTagName('img')[0];
                const aspectRatio = img.naturalWidth / img.naturalHeight;
                aspectRatios[index] = aspectRatio;
            });

            const groupWidth = group.offsetWidth - (10 * (wrappers.length - 1)); // Account for 10px gaps
            const totalAspectRatio = aspectRatios.reduce((sum, ratio) => sum + ratio, 0);
            const height = groupWidth / totalAspectRatio;

            group.style.height = `${height}px`;

            Array.from(wrappers).forEach((wrapper, index) => {
                const aspectRatio = aspectRatios[index];
                wrapper.style.flexBasis = `${(aspectRatio / totalAspectRatio) * 100}%`;
            });
        });
    }

    function updateGallery() {
        createGroups();
        // Force a reflow before adjusting layout
        container.offsetHeight;
        adjustLayout();
    }

    // Initial gallery creation
    updateGallery();

    // Ensure all images are loaded and adjust layout
    Promise.all(images.map(img => {
        return new Promise(resolve => {
            if (img.complete) {
                resolve();
            } else {
                img.onload = resolve;
                img.onerror = resolve; // Handle any loading errors
            }
        });
    })).then(() => {
        adjustLayout();
    });

    // Update gallery on window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateGallery, 250);
    });

    // Remove the original gallery div
    gallery.remove();
}

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', createImageGallery);




function copyImagesWithClass() {
const sourceDiv = document.getElementById('gallery');
    const targetDiv = document.getElementById('fullScreen');

    // Get all images from the source div
    const images = sourceDiv.querySelectorAll(".galleryPhotos");

    // Loop through each image
    for (let i = 0; i < images.length; i++) {
        // Clone the image
        const clonedImage = images[i].cloneNode(true);
        
        // Add the "fullScreen" class to the cloned image
        clonedImage.classList.add('fullScreen');
        
        // Append the cloned image to the target div
        targetDiv.appendChild(clonedImage);
    }
}

// Call the function when the page loads
window.onload = copyImagesWithClass();



document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('fullScreen');
    const images = container.getElementsByTagName('img');

    Array.from(images).reverse().forEach(img => {
        const wrapper = document.createElement('div');
        wrapper.className = 'imageContainer';
        img.parentNode.insertBefore(wrapper, img);
        wrapper.appendChild(img);
    });
});


function closeFullScreen() {
    fullScreen.style.display = "none";
    window.onscroll = null;
    

    expandButton.style.backgroundColor = "#0f0f0f7a";
    expandButton.style.color = "white";
    
    expandButton.addEventListener('mouseover', function() {
        expandButton.style.backgroundColor = '#ffffff';
        expandButton.style.color = '#000000';
    });

    expandButton.addEventListener('mouseout', function() {
        expandButton.style.backgroundColor = '#0f0f0f7a';
        expandButton.style.color = 'white';
    });
    
    clickCounter = 0;
    menu.style.display = "flex";
    document.documentElement.style.setProperty('--menuHeight', originalHeight);

    if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
}

}

var slideIndex = 1;

function currentSlide(n) {


  showSlides(slideIndex = n);

  var fullScreenGalerie = document.getElementById('fullScreen');
  var slides = fullScreenGalerie.getElementsByClassName('imageContainer');

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  if (n > slides.length) { n = 1; }
  if (n < 1) { n = slides.length; }

  slides[n - 1].style.display = "flex";
  fullScreenGalerie.style.display = "inline";

  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function() {
    window.scrollTo(scrollLeft, scrollTop);
  };
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var fullScreenGalerie = document.getElementById('fullScreen');
  var slides = fullScreenGalerie.getElementsByClassName('imageContainer');

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
  fullScreen.style.display = "block";
}

var clickCounter = 0;
let expandButton = document.getElementById("expand");
let menu = document.getElementById("menu");

function isMobileDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check for common mobile user agents
    return /android|avantgo|blackberry|bada|iemobile|iphone|ipod|opera mini|opera mobi|ipad|windows phone|webos/i.test(userAgent);
}

if (isMobileDevice()) {
    expandButton.style.display = "none";
    document.getElementById("prev").style.backgroundColor = "#0f0f0f7a"
    document.getElementById("prev").style.color = "#ffffff"
    document.getElementById("next").style.backgroundColor = "#0f0f0f7a"
    document.getElementById("next").style.color = "#ffffff"
}

let originalHeight;

function getHeight() {
    return getComputedStyle(document.documentElement).getPropertyValue('--menuHeight').trim();
}

window.onload = function() {
    originalHeight = getHeight();
};

function expand() {
    clickCounter++;

    if (clickCounter == 0) {
        expandButton.addEventListener('mouseover', function() {
            expandButton.style.backgroundColor = '#ffffff';
            expandButton.style.color = '#000000';
        });

        expandButton.addEventListener('mouseout', function() {
            expandButton.style.backgroundColor = '#0f0f0f7a';
            expandButton.style.color = 'white';
        });
    } else if (clickCounter == 1) {
        expandButton.style.backgroundColor = "#ffffff50";
        expandButton.style.color = "white";

        
        expandButton.addEventListener('mouseover', function() {
            expandButton.style.backgroundColor = '#ffffff';
            expandButton.style.color = '#000000';
        });

        expandButton.addEventListener('mouseout', function() {
            expandButton.style.backgroundColor = '#ffffff50';
            expandButton.style.color = 'white';
        });

        menu.style.display = "none";
        document.documentElement.style.setProperty('--menuHeight', "0px");
        var elem = document.documentElement;

        if (elem.requestFullscreen) {
            elem.requestFullscreen();
          } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
          } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
          }


    } else {
        expandButton.style.backgroundColor = "#0f0f0f7a";
        expandButton.style.color = "white";
        
        expandButton.addEventListener('mouseover', function() {
            expandButton.style.backgroundColor = '#ffffff';
            expandButton.style.color = '#000000';
        });

        expandButton.addEventListener('mouseout', function() {
            expandButton.style.backgroundColor = '#0f0f0f7a';
            expandButton.style.color = 'white';
        });
        
        clickCounter = 0;
        menu.style.display = "flex";
        document.documentElement.style.setProperty('--menuHeight', originalHeight);

        if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
          }
    }

}