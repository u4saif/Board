
chrome.runtime.onMessage.addListener(showBoard);

function showBoard(msg, sender, sendres) {
  if (document.getElementById("canvas") == undefined) {
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

    function changePenColor(color = "black") {
      if (event.target.value) color = event.target.value;
      ctx.strokeStyle = color;
    }

    function changePenSize(size = 4) {
      ctx.lineWidth = size;
    }

    function changeBoardBg(color = "black") {
      if (color == "none") canvas.style.background = color;
      canvas.style.backgroundColor = color;
    }

    function clearScreen() {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.beginPath();
    }

    function hideBoard() {
      canvas.style.display = "none";
      document.getElementById("navManu").style.display = "none";
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

    colorItemsArr.forEach((i) => {
      if (i < 5) {
        var itemName = "penItem" + i;
        var itemName = document.createElement("div");
        itemName.setAttribute("id", "penItem" + i);
        let penContainer = document.getElementById("penContainer");
        penContainer.appendChild(itemName);
      }
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

    var bgContainer = document.createElement("div");
    bgContainer.setAttribute("id", "bgContainer");
    navManu.appendChild(bgContainer);

    colorItemsArr.forEach((i) => {
      if (i < 4) {
        var itemName = "bgItem" + i;
        var itemName = document.createElement("div");
        itemName.setAttribute("id", "bgItem" + i);
        let bgContainer = document.getElementById("bgContainer");
        bgContainer.appendChild(itemName);
      }
    });

    document
      .getElementById("bgItem0")
      ?.addEventListener("click", changeBoardBg.bind(event, "rgb(29, 27, 27)"));

    document
      .getElementById("bgItem1")
      ?.addEventListener("click", changeBoardBg.bind(event, "white"));

    document
      .getElementById("bgItem2")
      ?.addEventListener(
        "click",
        changeBoardBg.bind(event, "rgba(11, 139, 224, 0.294)")
      );

    document
      .getElementById("bgItem3")
      ?.addEventListener("click", changeBoardBg.bind(event, "none"));

    var buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("id", "buttonContainer");
    navManu.appendChild(buttonContainer);

    colorItemsArr.forEach((i) => {
      if (i < 2) {
        var itemName = "buttonItem" + i;
        var itemName = document.createElement("button");
        itemName.setAttribute("id", "buttonItem" + i);
        let buttonContainer = document.getElementById("buttonContainer");
        buttonContainer.appendChild(itemName);
        if (i == 0) itemName.innerText = "Clear All";
        if (i == 1) itemName.innerText = "Hide";
      }
    });

    document
      .getElementById("buttonItem0")
      ?.addEventListener("click", clearScreen);

    document
      .getElementById("buttonItem1")
      ?.addEventListener("click", hideBoard);
  }

  if (document.getElementById("canvas")?.style.display == "none") {
    var canvas = document.getElementById("canvas");
    canvas.style.display = "block";
    document.getElementById("navManu").style.display = "block";
  }
}
