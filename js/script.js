var presentIco = document.getElementById('presentation');
var frontEndIco = document.getElementById('front-end');
var extraIco = document.getElementById('extra');
var content = document.getElementById("content");
var winTitle = document.getElementById("windowTitle")


presentIco.addEventListener('click', presentPage)
frontEndIco.addEventListener('click', frontEndPage)
extraIco.addEventListener('click', extraPage)


//First CapitalLetter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//Presentation Page
function presentPage(x) {
  var title = this.id
  var titleName = capitalizeFirstLetter(title);
  winTitle.firstElementChild.innerHTML = titleName
  content.className = "presentPage";
  var data = new XMLHttpRequest();

   data.onreadystatechange = function (e) {
    if (data.readyState == 4 && data.status == 200) {
     content.innerHTML = data.responseText;
    }
   }

 data.open("GET", "presentation.html", true);
 data.setRequestHeader('Content-type', 'text/html');
 data.send();
}

//Front-end Page
function frontEndPage(){
  if (content.className !== "frontEndPage"){

    var title = this.id
    var titleName = capitalizeFirstLetter(title);
    winTitle.firstElementChild.innerHTML = titleName
    content.innerHTML = "";
    var data = new XMLHttpRequest();


    data.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

        var myArr = JSON.parse(this.responseText);
        for(var i = 0;i < myArr.length; i++){

          var div = document.createElement("DIV");
          div.className = "file";
          var li = document.createElement("LI");
          var img = document.createElement("IMG");
          var buttonNode = document.createElement("BUTTON")
          var buttonNodeTwo = document.createElement("BUTTON")

          img.alt = myArr[i].name
          img.addEventListener("click", goPage)
          img.src = "image/" + myArr[i].previewPic
          li.appendChild(img);
          div.appendChild(li);

          var p = document.createElement("P")
          p.innerText = myArr[i].description
          div.appendChild(p)

          buttonNode.className = "btnWindow";
          buttonNode.innerText = "Open in Window"
          div.appendChild(buttonNode);
          buttonNode.addEventListener("click",goPage)

          buttonNodeTwo.className = "btnTab";
          buttonNodeTwo.innerText = "Open in Tab"
          div.appendChild(buttonNodeTwo);
          buttonNodeTwo.addEventListener("click",goPage)

          content.appendChild(div)
          content.className = "frontEndPage"

        }
      }

    }

  } else if (content.className == "frontEndPage"){
    console.log("Same page")
  }
  data.open("GET",'json/front-end.json'+"?t=" + Math.random(), true);
  data.send();
}

//Front-end Buttons
function goPage(x){

  if (this.className === 'btnWindow'){

    var div = this.parentElement
    var img = div.childNodes[0].childNodes[0]
    var url = img.alt
    var newUrl = "front-end-examples/" + url + "/index.html";
    window.location.href = newUrl

  } else if (this.className === 'btnTab'){

    var div = this.parentElement
    var img = div.childNodes[0].childNodes[0]
    var url = img.alt
    var newUrl = "front-end-examples/" + url + "/index.html";
    window.open(newUrl);

  } else if (this.alt !== "" && this.alt !== "undefined"){

    var newUrl = this.alt
    window.location.href = "front-end-examples/" + newUrl + "/index.html";

  }
}

//Extra Page
function extraPage() {
  var title = this.id
  var titleName = capitalizeFirstLetter(title);
  winTitle.firstElementChild.innerHTML = titleName


  content.className = "extra"
  var data = new XMLHttpRequest();

   data.onreadystatechange = function (e) {
    if (data.readyState == 4 && data.status == 200) {
     content.innerHTML = data.responseText;
    }
   }

 data.open("GET", "extra.html", true);
 data.setRequestHeader('Content-type', 'text/html');
 data.send();
}

// Clock
function updateClock() {
  var date = new Date()
  var day = date.getDay();
  var daysWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;

  var strTime = daysWeek[day] + ' ' + hours + ':' + minutes + ' ' + ampm;
  document.getElementById('clock').innerHTML = strTime
  setTimeout(updateClock, 1000);
}
updateClock();
