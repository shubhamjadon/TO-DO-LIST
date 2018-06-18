var list = document.querySelector('.list');
var input = document.querySelector('input');
var btnAdd = document.querySelector('.btnAdd');

var data = [];

btnAdd.addEventListener('click', () => {
  if(input.value != ""){
    data.push(input.value);
    input.value = '';
    makeList();
  }
});

function makeList() {
  list.innerHTML = "";
  data.forEach(task => {
    list.innerHTML += "<li><h3>" + task + "</h3></li>"
  });
}