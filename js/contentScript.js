console.log("in content script")

var canvas=document.createElement('canvas'); 
canvas.setAttribute("id", "canvas");

document.body.appendChild(canvas);

var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

var drawing=false;

function startPosition(e){
     drawing=true;
     draw(e);
}

function finishPosition(){
    drawing=false;
    ctx.beginPath();
}
function draw(e){
    if(!drawing) return ;
 
    ctx.lineWidth=5;
    ctx.lineCap="round";
    ctx.strokeStyle="#ffffff"
    ctx.lineTo(e.clientX,e.clientY);
    ctx.stroke();
}

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", finishPosition);

var navManu=document.createElement('div'); 
navManu.setAttribute("id", "navManu");

document.body.appendChild(navManu);
