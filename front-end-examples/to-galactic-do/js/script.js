var input ,li;
var form = document.getElementById('addInput');
var myul = document.getElementById('myul');

//function to select and add text on input + Delete Button
function inputText(){
input = document.getElementById('addInput').value;
  if (input === ''){alert('You must write something')} else {
    var li = document.createElement("LI");
    var text = document.createTextNode(input);
    li.appendChild(text);
    myul.appendChild(li);

    //create delete button
    var span = document.createElement("SPAN")
    span.className = 'dlt';
    span.innerHTML = '&times';
    li.appendChild(span);
  };
  //delete button function
  span.onclick = function() {
    this.parentElement.remove();
  }
  form.value = '';
};


//add text when press "Enter" key
function addTextKey(){
  if (event.keyCode === 13){
    inputText();
  }
}

//add text when press "html button"
function addTextBtn(){
  inputText();
}

//when click list toggle to checked
myul.addEventListener('click',checked)
function checked(event){
  if (event.target.tagName === "LI"){
    event.target.classList.toggle('checked');
  }
}
