var list = document.querySelector('.list');
var input = document.querySelector('input');
var btnAdd = document.querySelector('.btnAdd');

var data = [];

btnAdd.addEventListener('click', () => {
  if(input.value != ""){
    data.push(input.value);
    input.value = '';
    makeList();
    addEvents();
  }
});
function makeList() {
  list.innerHTML = "";
  for(let i=0; i<data.length; i++) {
    list.innerHTML += "<li><h3>" + data[i] + "</h3></li>" + "<button class ='"+i+" btn btn-danger'><i class='far fa-trash-alt'></i></button><br>";
  }
}

function addEvents() {
  let tasks = document.querySelectorAll(".btn");
  tasks.forEach(task => {
    task.addEventListener("click", function() {
        console.log(this.classList);
        let index = this.classList;
        data.splice(index[0],1);
        makeList();
        addEvents();
    });
  });
}