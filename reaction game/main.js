var circle = document.getElementById("circle");

function showCircle(){
    circle.style.display = "block"
    circle.style.top = Math.random() * 500 + "px";
    circle.style.left = Math.random() * 900 + "px";

}
circle.onclick = function(){
    circle.style.display = none;
    setTimeout(showCircle , 1000)
}