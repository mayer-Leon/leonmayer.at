window.onload = function() {
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

const dialog = document.getElementById("menuDialog");

function showDialog() {
    dialog.showModal();
}

function closeDialog() {
    dialog.close();
}

var w = window.innerWidth;
var h = window.innerHeight;

widthText.innerHTML = w + " x " + h;