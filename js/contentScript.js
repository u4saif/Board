console.log("in content script");

var canvas = document.createElement("canvas");
canvas.setAttribute("id", "canvas");

document.body.appendChild(canvas);

var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

var drawing = false;

function startPosition(e) {
  drawing = true;
  draw(e);
}

function finishPosition() {
  drawing = false;
  ctx.beginPath();
}
function draw(e) {
  if (!drawing) return;
  ctx.lineCap = "round";
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
}

function changePenColor(color = black) {
 if(event.target.value) color= event.target.value;
  ctx.strokeStyle = color;
}

function changePenSize(size= 4){
    ctx.lineWidth = size;
}

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", finishPosition);

var navManu = document.createElement("div");
navManu.setAttribute("id", "navManu");

document.body.appendChild(navManu);

var colorContainer = document.createElement("div");
colorContainer.setAttribute("id", "colorContainer");
navManu.appendChild(colorContainer);

let colorItemsArr = [...Array(6).keys()];
colorItemsArr.forEach((i) => {
  if (i < 5) {
    var itemName = "colorItem" + i;
    var itemName = document.createElement("div");
    itemName.setAttribute("id", "colorItem" + i);
    let colorContainer = document.getElementById("colorContainer");
    colorContainer.appendChild(itemName);
  } else {
    var itemName = "colorItem" + i;
    var itemName = document.createElement("input");
    itemName.setAttribute("id", "colorItem" + i);
    itemName.setAttribute("type", "color"); 
    let colorContainer = document.getElementById("colorContainer");
    colorContainer.appendChild(itemName);
  }
});

document
  .getElementById("colorItem0")
  ?.addEventListener("click", changePenColor.bind(event, "yellow"));
document
  .getElementById("colorItem1")
  ?.addEventListener("click", changePenColor.bind(event, "#0686FD"));

document
  .getElementById("colorItem2")
  ?.addEventListener("click", changePenColor.bind(event, "#1EFF00"));

document
  .getElementById("colorItem3")
  ?.addEventListener("click", changePenColor.bind(event, "white"));

document
  .getElementById("colorItem4")
  ?.addEventListener("click", changePenColor.bind(event, "red"));

  document
  .getElementById("colorItem5")
  ?.addEventListener("input", changePenColor.bind(event));

var penContainer = document.createElement("div");
penContainer.setAttribute("id", "penContainer");
navManu.appendChild(penContainer);

  colorItemsArr.forEach((i)=>{
    var itemName = "penItem" + i;
    var itemName = document.createElement("div");
    itemName.setAttribute("id", "penItem" + i);
    let penContainer = document.getElementById("penContainer");
    penContainer.appendChild(itemName);
  });

  document
  .getElementById("penItem0")
  ?.addEventListener("click", changePenSize.bind(event, 3));

  
  document
  .getElementById("penItem1")
  ?.addEventListener("click", changePenSize.bind(event, 6));


  
  document
  .getElementById("penItem2")
  ?.addEventListener("click", changePenSize.bind(event, 8));


  
  document
  .getElementById("penItem3")
  ?.addEventListener("click", changePenSize.bind(event, 14));