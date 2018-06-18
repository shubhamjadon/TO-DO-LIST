var mybutton = document.getElementById("mybtn");
var myid = document.getElementById("textadd");
var data = document.getElementById("textentered");
data.addEventListener("change",function(){datae = data.value});
mybutton.addEventListener("click",function(){
myid.innerHTML += "<li>" + datae +"</li>";  
});