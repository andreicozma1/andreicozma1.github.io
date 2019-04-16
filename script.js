
window.onload = function f(){
    console.log("Script Started")
    
    var bg = document.getElementById("bg");
    var imageNum = Math.floor(Math.random() * 22 + 1);
    console.log(imageNum);
    var url = "background/" + imageNum + ".JPG";
    bg.style.backgroundImage = "url(\"" + url + "\")";

 
   
};
var open = false;
var menu = document.getElementById("menu");
var header = document.getElementById("header");
menu.onclick = function(){
if(open){
    header.style.display = "flex";
} else{
    header.style.display = "none";
}

    open = !open;
}
