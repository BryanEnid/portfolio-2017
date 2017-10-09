
var canvas = document.getElementById('canvas');
var paper = canvas.getContext('2d');
var x, y, result, i, ramdomVar;
ramdomVar = randomNum(1,5)

var backg = {
  url: 'tile.png',
  loadOK: false
}

var pig = {
  url: 'cerdo.png',
  loadOK: false
}

var cow = {
  url: 'vaca.png',
  loadOK: false
}

var chk = {
  url: 'pollo.png',
  loadOK: false
}

backg.image = new Image();
backg.image.src = backg.url;
backg.image.addEventListener("load", backgLoad);

pig.image = new Image();
pig.image.src = pig.url;
pig.image.addEventListener("load", pigLoad);

cow.image = new Image();
cow.image.src = cow.url;
cow.image.addEventListener("load", cowLoad);

chk.image = new Image();
chk.image.src = chk.url;
chk.image.addEventListener("load", chkLoad);


function backgLoad(){
  backg.loadOK = true;
  drawing();
}

function pigLoad(){
  pig.loadOK = true;
  drawing();
}

function cowLoad(){
  cow.loadOK = true;
  drawing();
}

function chkLoad(){
  chk.loadOK = true;
  drawing();
}




function drawing(name){
  if (backg.loadOK){
    paper.drawImage(backg.image, 0, 0)
  }
  if (pig.loadOK){
    for (i=0;i<ramdomVar;i++){
      x = randomNum(0,7);
      y = randomNum(0,7);
      x *= 60
      y *= 60
      paper.drawImage(pig.image, x, y)
    }
  }
  if (cow.loadOK){
    for (i=0;i<ramdomVar;i++){
      x = randomNum(0,7);
      y = randomNum(0,7);
      x *= 60
      y *= 60
      paper.drawImage(cow.image, x, y)
    }
  }
  if (chk.loadOK){
    for (i=0;i<ramdomVar;i++){
      x = randomNum(0,7);
      y = randomNum(0,7);
      x *= 60
      y *= 60
      paper.drawImage(chk.image, x, y)
    }
  }
}

  console.log(ramdomVar)


function randomNum(min, max)
{
  var result;
  result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}
