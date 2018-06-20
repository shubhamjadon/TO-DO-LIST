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
    list.innerHTML += ("<li><h3>" + data[i] + "</h3></li>");
  }
}

function addEvents() {
  let tasks = document.querySelectorAll("li");
  tasks.forEach(task => {
    task.addEventListener("click", function() {
      if(this.classList[0] != "cross") {
        this.classList.add("cross");
      } else {
        let index = data.indexOf(this.textContent);
        data.splice(index,1);
        makeList();
        addEvents();
      }
    });
  });
}