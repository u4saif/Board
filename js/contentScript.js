console.log("in content script")

var canvas=document.createElement('canvas'); 
canvas.setAttribute("id", "canvas");

document.body.appendChild(canvas);

var canvas = document.getElementById("canvas");
canvas.style.position='fixed';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.top='0';
canvas.style.left='0';
canvas.style.zIndex='1000';
// canvas.style.opacity='0.5';
// canvas.style.backgroundColor = 'lightblue';
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

    ctx.lineTo(e.clientX,e.clientY);
    ctx.stroke();
}

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", finishPosition);
