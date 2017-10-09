var d, lienzo, lineas, button, inputText;
input = document.getElementById('inputText');
button = document.getElementById('button');


d = document.getElementById('dibujito');
var ancho = d.width

lienzo = d.getContext("2d");
button.addEventListener('click', addLines)

//funciones
function drawLine(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function addLines() {
  var lineas = parseInt(input.value);
  var espacio = ancho / lineas

  for (l = 0 ; l < lineas ; l++)
  {
  var yi =  espacio * l
  var xf =  espacio * (l+1)
  drawLine("#AAF", 0, yi, xf, ancho);
  }
}
