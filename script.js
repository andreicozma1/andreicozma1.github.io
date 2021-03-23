var isOpen;

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    isOpen = false;
    console.log("Closed Nav");
}

window.addEventListener("resize", function (event) {
    if (isOpen === true) {
        openNavAction();
    }
});

function openNav() {
    $("#menuFallBackLink").attr("href", "#");
    openNavAction();
    isOpen = true;
    console.log("Opened nav");
    console.log(location.origin)
}

function openNavAction() {
    if (window.innerWidth / window.innerHeight < 1) {
        document.getElementById("mySidenav").style.width = "100%";
    } else if (window.innerWidth / window.innerHeight < 1.2) {
        document.getElementById("mySidenav").style.width = "50%";
    } else if (window.innerWidth / window.innerHeight < 1.7) {
        document.getElementById("mySidenav").style.width = "40%";
    } else {
        document.getElementById("mySidenav").style.width = "30%";
    }
}