function addItem() {
  let list = document.getElementById('todolist');
  let todo = document.getElementById('item');
  let todoDate = document.getElementById('date');
  let listitem = document.createElement('li');
  let completeBtn = document.createElement('button');

  listitem.className = 'list-group-item list-group-item-action list-group-item-warning';

  completeBtn.className = 'close';
  completeBtn.innerHTML = '&times;';
  completeBtn.onclick = function(e) {
    let pnode = e.target.parentNode;
    list.removeChild(pnode);
  }

  listitem.innerText = todo.value + '\n' + '기한 : ' + todoDate.value;
  listitem.appendChild(completeBtn);
  list.appendChild(listitem);

  todo.value = '';
  todo.focus();
}