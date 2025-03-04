// function printNames(){
//     document.write("");
//     document.write("<br>");
//     setTimeout(function() {document.write("Ana");}, 3000)
//     document.write("Bob")
// }

// printNames(); 

var colors =["red" , "green" , "blue"  , "purpule"];
function changeBackground(){
    document.querySelector('body').style.background = colors[Math.floor(Math.random()*colors.length)];
}

var names = ["John","Bob","Ana","Mark"];
function changeNames(){
    document.querySelector("p").innerHTML = names[Math.floor(Math.random()*names.length)]
}

setInterval(changeBackground , 1000)
setInterval(changeNames , 1000)
