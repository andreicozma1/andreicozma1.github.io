let isOpen;

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    isOpen = false;
    console.log("Closed Nav");
}

window.addEventListener("resize", function () {
    if (isOpen === true) {
        openNavAction();
    }
});

function openNav() {
    let fallback = document.getElementById("menuFallBackLink");
    fallback.href = "#";
    openNavAction();
    isOpen = true;
    console.log("Opened nav");
    console.log(location.origin)
}

function openNavAction() {
    if (window.innerWidth / window.innerHeight < .75) {
        document.getElementById("mySidenav").style.width = "100%";
    } else if (window.innerWidth / window.innerHeight < 1) {
        document.getElementById("mySidenav").style.width = "50%";
    } else if (window.innerWidth / window.innerHeight < 1.25) {
        document.getElementById("mySidenav").style.width = "40%";
    } else {
        document.getElementById("mySidenav").style.width = "30%";
    }
}

particlesJS.load('particles-js', '/particles.json', function () {
    console.log('callback - particles.js config loaded');
});