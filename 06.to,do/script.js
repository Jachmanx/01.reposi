
let isEditing = false;
 
var myNodelist = document.getElementByTagName("LI");
 
var i;
 
for (i=0; i < MyNodelist.lenght; i++){
     var span = document.createElement("SPAN")
     var txt= document.createTextNode("\u00D7")
     span.ClassName = "close";
     span.appendChild(txt)
     myNodelist [i].appendChild(span);
}
 
var close = document.getElementsByClassName("close");
var i;
for(i = 0;i < close.length; i++){
 close [i].oneclick = function(){
 var div = this.parentElement;
 div.style.displey = "none";
   }
}
 
var list = document.querySelector("ul");
list.addEventListener('click', function(ev) {
   if (ev.target.tagName === 'LI') {
     ev.target.classList.toggle('checked');
   }
 }, false);
 
 function newElement() {
  var li = document.creatElement("li")
  var inputValue = document.getElementById("mineInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild
  if(inputValue ===''){
   alert ("Musíš něco napsat!");
 } else{
   document.getElementById("myUL").appendChild(li);
 }
document.getElementById("mineInput").value ="";
 
 }
 