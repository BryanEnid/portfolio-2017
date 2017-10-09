var h1 = document.getElementById('text')
var canvas = document.getElementById('drawingCanvas');
var button = document.getElementById('reset');
var lienzo = canvas.getContext("2d");
var status = 0;                 //Status which turns on and off (0 & 1)
var x, y;                       //Save data in X and Y
var color = '#999999';             //Change color of the line




/* functions */
function drawLine(color, xi, yi, xf, yf, lienzo){
  lienzo.beginPath();           //Begin drawing
  lienzo.strokeStyle = color;   //Properties of the line (Color)
  lienzo.lineWidth = 2;         //Properties of the line (Width)
  lienzo.moveTo(xi, yi);        //First point between X & Y
  lienzo.lineTo(xf, yf);        //Last point between X & Y
  lienzo.stroke();              //Draw a line between the first point and the last
  lienzo.closePath();           //Finish drawing
}
/* */


canvas.addEventListener("mousedown", beginClick);
canvas.addEventListener("mousemove", whileClick);
canvas.addEventListener("mouseup", endClick);
canvas.addEventListener("mouseout", endClick);
button.addEventListener("click", resetCanvas);



function beginClick(event){
  status = 1;                   //Activate WhileClick Function
  x = event.offsetX;             //Actual position data in Layer X -->
  y = event.offsetY;             //and Y which the click started
}

function whileClick(event){
  if (status == 1){
    drawLine(color, x, y, event.offsetX, event.offsetY, lienzo);
    x = event.offsetX;
    y = event.offsetY;
  }
}

function endClick(event){
  status = 0;
  x = event.x;
  y = event.x;
}

function resetCanvas(){
  lienzo.clearRect(0, 0, canvas.width, canvas.height);
}




/* Jquery Effects */
$(document).ready(function(){

  $('canvas').on("mousedown", function(){
    $('#text').fadeTo(1500, 0.05);         //Fade Out effect to the H1 (#text)
  });


});






























/* Draw with keyboard


document.addEventListener("keydown",drawKey);
var canvas = document.getElementById('drawingCanvas');
var paper = canvas.getContext("2d");
var pX = 150;
var pY = 150;


var keys = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};


function drawKey(event)
{
  var movement = 10;
  if ( event.keyCode == keys.UP ){
    drawLine(color, pX, pY, pX, pY-movement, paper);
    pY -= movement
  } else if ( event.keyCode == keys.DOWN ){
    drawLine(color, pX, pY, pX, pY+movement, paper);
    pY += movement
  } else if ( event.keyCode == keys.LEFT ){
    drawLine(color, pX, pY, pX-movement, pY, paper);
    pX -= movement
  } else if ( event.keyCode == keys.RIGHT ){
    drawLine(color, pX, pY, pX+movement, pY, paper);
    pX += movement
  }
}

*/
