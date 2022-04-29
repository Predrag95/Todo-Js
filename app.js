//Consts
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');
const todoButton = document.querySelector('.todo-button');
const filterOption = document.querySelector('.filter-todo');

//Events
todoButton.addEventListener('click', generateTodoDiv);
todoList.addEventListener('click', checkRemoveTodo);
filterOption.addEventListener('click', filterTodo)
//Functions
function generateTodoDiv(e) {
  e.preventDefault();
  //Creating Div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //Creating Li
  const todoLi = document.createElement('li');
  todoLi.innerHTML = todoInput.value;
  todoLi.classList.add('todo-item')
  todoDiv.appendChild(todoLi);
  //Creating Complete Button
  const completeBtn = document.createElement('button');
  completeBtn.innerHTML = "<i class='fa-solid fa-check'></i>";
  completeBtn.classList.add('complete-btn');
  todoDiv.appendChild(completeBtn);
  //Creating Trash Button
  const trashBtn = document.createElement('button');
  trashBtn.innerHTML = "<i class='fa-solid fa-trash'></i>";
  trashBtn.classList.add('trash-btn');
  todoDiv.appendChild(trashBtn);
  //Appending Div to todo list
  todoList.appendChild(todoDiv);
  //Clear input value
  todoInput.value = "";
};


function checkRemoveTodo(e) {
  const item = e.target;
  //Delete 
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //Animation
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function() {
      todo.remove();
    })
  }

  //Check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}


function filterTodo(e) {
  const todos = todoList.childNodes;
  console.log(todos)
}
