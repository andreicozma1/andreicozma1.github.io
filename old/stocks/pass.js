function checkPass() {
    const pass = prompt("Enter access code");
    if (pass === "qwerty") {
        setInterval(refresh, 300000)
    } else {
        checkPass();
    }
}

function refresh() {
    const date = new Date()
    console.log("Refreshing Data Studio view " + date.getHours() + ":" + date.getMinutes())

    const stocks1 = document.getElementById("stocks");
    const stocks2 = document.getElementById("stocks1");
    stocks1.style.width = window.innerWidth.toString();
    stocks1.style.height = window.innerHeight.toString();
    stocks2.style.width = window.innerWidth.toString();
    stocks2.style.height = window.innerHeight.toString();

    if (stocks1.style.zIndex === "0") {
        console.log("1 is hidden")
        stocks1.src = "https://datastudio.google.com/embed/reporting/229c6fc3-2808-4343-9c40-df0ec5b65686/"
        stocks1.onload = function () {
            setTimeout(function () {
                console.log("Displaying 1")
                stocks1.style.zIndex = "1";
                stocks2.style.zIndex = "0";

            }, 10000)
        }
    } else {
        console.log("2 is hidden")
        stocks2.src = "https://datastudio.google.com/embed/reporting/229c6fc3-2808-4343-9c40-df0ec5b65686/"
        stocks2.onload = function () {
            setTimeout(function () {
                console.log("Displaying 2")
                stocks1.style.zIndex = "0";
                stocks2.style.zIndex = "1";
            }, 10000)
        }
    }


}

checkPass();