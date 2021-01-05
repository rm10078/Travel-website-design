//nav bar
var a=document.getElementById("but");
a.addEventListener("click",mobilenav);
function mobilenav() {
    var b=document.getElementById("resnav");
    if (b.style.display==="block") {
        b.style.display="none";
    } else {
        b.style.display="block";
    }
}
//image slider
var x=[
    "img/slide/img0.jpg",
    "img/slide/img1.jpg",
    "img/slide/img2.jpg",
    "img/slide/img3.jpg"

]
var i=0;
var a=document.getElementById("slideimg");
setInterval(myfunction,2000);
function myfunction() {
    if (i<x.length) {
        a.src=x[i];
        i++;
    } else {
        i=0;       
    }
}