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
    list.innerHTML += "<li><span><i class='" + i + " far fa-trash-alt'></i></span>" + data[i] +"</li>";
  }
}

function addEvents() {
  let tasks = document.querySelectorAll("i");
  tasks.forEach(task => {
    task.addEventListener("click", function() {
        let index = this.classList;
        data.splice(index[0],1);
        makeList();
        addEvents();
    });
  });
}