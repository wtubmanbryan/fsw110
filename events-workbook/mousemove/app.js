const redBox = document.getElementsByClassName("red-box")
redBox[0].addEventListener('mousemove', showCoords)


function showCoords(e) {
    var x = e.screenX;
    var y = e.screenY;
    var coords = "X coords: " + x + ", Y coords: " + y
    redBox[0].innerHTML = coords;
  }