let photo = 0;
let end = calculateEnd();

photoControl();

function calculateEnd() {
    const bannerFotos = document.getElementById("bannerFotos");
    const width = window.innerWidth;
    const one30 = window.innerHeight * 1.3;

    let childCount = bannerFotos.childElementCount;
    if (width > one30) {
        childCount = bannerFotos.childElementCount / 2;
    }
    
    return (childCount - 1) * (-100) + "%";
}

function nextOne() {
    photo++;
    photoControl();
}

function prevOne() {
    photo--;
    photoControl();
}

function showDialog() {
    menuDialog.style.opacity = "1";
    menuDialog.style.pointerEvents = "all";
    const blur = document.getElementById("blur");
    blur.style.backgroundColor = "#0000006a";
    blur.style.backdropFilter = "blur(5px)";
    blur.style.webkitBackdropFilter = "blur(5px)";
    blur.style.pointerEvents = "all";
}

function closeDialog() {
    menuDialog.style.opacity = "0";
    menuDialog.style.pointerEvents = "none";
    const blur = document.getElementById("blur");
    blur.style.backgroundColor = "#00000000";
    blur.style.backdropFilter = "blur(0px)";
    blur.style.webkitBackdropFilter = "blur(0px)";
    blur.style.pointerEvents = "none";
}

function photoControl() {
    const bannerFotos = document.getElementById("bannerFotos");
    const width = window.innerWidth;
    const one30 = window.innerHeight * 1.3;
    let childCount = bannerFotos.childElementCount;

    if (width > one30) {
        bannerFotos.style.left = -1 * photo * 50 + "%";
        childCount = bannerFotos.childElementCount / 2;
    } else {
        bannerFotos.style.left = -1 * photo * 100 + "%";
    }

    if (bannerFotos.style.left === "0%") {
        document.getElementById("prevOne").style.opacity = "0";   
        document.getElementById("nextOne").style.opacity = "1";
        document.getElementById("prevOne").style.pointerEvents = "none";
        document.getElementById("nextOne").style.pointerEvents = "all";
    } else if (bannerFotos.style.left === end) {
        document.getElementById("nextOne").style.opacity = "0";
        document.getElementById("nextOne").style.pointerEvents = "none";
        document.getElementById("fotoOne").style.opacity = "1";
        document.getElementById("fotoOne").style.pointerEvents = "all";
    } else {
        document.getElementById("prevOne").style.opacity = "1";
        document.getElementById("nextOne").style.opacity = "1";
        document.getElementById("prevOne").style.pointerEvents = "all";
        document.getElementById("nextOne").style.pointerEvents = "all";
    }
}

window.addEventListener("resize", function(event) {
    end = calculateEnd();
    photoControl();
})

document.addEventListener("keydown", function(event) {
    event.preventDefault();
    if (event.key === "ArrowLeft" || event.key === "a") {
        if (bannerFotos.style.left != "0%") {
            prevOne();
        }
    }
    else if (event.key === "ArrowRight" || event.key === "d") {
        if (bannerFotos.style.left != end) {
            nextOne();
        }
    }
});





//Standard-Code Ende


function openLeonMayer() {
    location.reload();
};

function openAbout() {
  window.location = "über-mich/index.html";
}

function openFotogalerie() {
    window.location = "fotogalerie/index.html"
}
  