var presentIco = document.getElementById('presentation');
var frontEndIco = document.getElementById('front-end');
var extraIco = document.getElementById('extra');
var contentWindow = document.getElementById("content");

if (contentWindow.innerHTML !== "") {
  contentWindow.innerHTML = ""
  presentPage();
}

presentIco.addEventListener('click', presentPage)
frontEndIco.addEventListener('click', frontEndPage)
extraIco.addEventListener('click', load_page)


//Change the page with the Navigator's buttons and Folders Icon
function load_page() {
  var con = document.getElementById('content')
  con.className = "extra"
  var data = new XMLHttpRequest();

   data.onreadystatechange = function (e) {
    if (data.readyState == 4 && data.status == 200) {
     con.innerHTML = data.responseText;
    }
   }

 data.open("GET", "extra.html", true);
 data.setRequestHeader('Content-type', 'text/html');
 data.send();
}

//Function for load page in #container with the "presentation page" information
function presentPage(e) {
  var con = document.getElementById('content')
  con.className = "presentPage"
  var data = new XMLHttpRequest();

   data.onreadystatechange = function (e) {
    if (data.readyState == 4 && data.status == 200) {
     con.innerHTML = data.responseText;
    }
   }

 data.open("GET", "presentation.html", true);
 data.setRequestHeader('Content-type', 'text/html');
 data.send();
}


//Function for load page in #container with the Front End Database
function frontEndPage(){
  if (contentWindow.className !== "frontEndPage"){
    document.getElementById('content').innerHTML = ""
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

          var content = document.querySelector('#content');
          content.appendChild(div)
          content.className = "frontEndPage"

        }
      }

    }

  } else if (contentWindow.className == "frontEndPage"){
    return
  }

  data.open("GET",'json/front-end.json'/*+"?t=" + Math.random()*/, true);
  data.send();

}



//redirection URL
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
