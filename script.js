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

let photo = 0;

function nextOne() {
    photo++
    photoControl();
}

function prevOne() {
    photo--
    photoControl();
}

function photoControl() {

    const bannerFotos = document.getElementById("bannerFotos");

    let kanten = (bannerFotos.naturalWidth / bannerFotos.naturalHeight / 1.5) -1;

    let oneKanten = (kanten -1) / 2;
    let one30 = window.innerHeight * 1.3;
    let width = window.innerWidth;


    let percent = 100 / kanten * photo;
    let onePercent = 100 / oneKanten /2 * photo;


    document.getElementById("prevOne");

    if (width > one30) {
        bannerFotos.style.objectPosition = onePercent + "%";

    } else {
        bannerFotos.style.objectPosition = percent + "%";
    };

    if (bannerFotos.style.objectPosition == "0% center") {
        document.getElementById("prevOne").style.opacity = "0";   
        document.getElementById("prevOne").style.pointerEvents = "none";    
    } else if (bannerFotos.style.objectPosition == "100% center") {
        document.getElementById("nextOne").style.opacity = "0";
        document.getElementById("nextOne").style.pointerEvents = "none";
        
    } else {
        document.getElementById("prevOne").style.opacity = "1";
        document.getElementById("nextOne").style.opacity = "1";
        document.getElementById("prevOne").style.pointerEvents = "all";
        document.getElementById("nextOne").style.pointerEvents = "all";
    }
}

photoControl();



//Standard-Code Ende


function openLeonMayer() {
    location.reload();
};

function openAbout() {
  window.location = "über-mich/index.html";
}
  