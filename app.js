// VARIABLES
const todoList = document.querySelector('.todo-list');
const btn = document.querySelector('.todo-button');
const todoInput = document.querySelector('.todo-input');
const filterOption = document.querySelector('.filter-todo');

// EVENTS
btn.addEventListener('click', spawnTodoDiv);
todoList.addEventListener('click', checkDeleteButton);
filterOption.addEventListener('click', filterTodo);

// FUNCTIONS
function spawnTodoDiv(e) {
  e.preventDefault();
  
  // Todo Div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  // Todo Li
  const todoLi = document.createElement('li');
  todoLi.textContent = todoInput.value;
  todoLi.classList.add('todo-item');
  todoDiv.appendChild(todoLi);
  // Check button
  const btnCheck = document.createElement('button');
  btnCheck.innerHTML = '<i class="fa-solid fa-check"></i>';
  btnCheck.classList.add('complete-btn');
  todoDiv.appendChild(btnCheck);
  // Trash button
  const btnTrash = document.createElement('button');
  btnTrash.innerHTML = '<i class="fa-solid fa-trash"></i>';
  btnTrash.classList.add('trash-btn');
  todoDiv.appendChild(btnTrash); 

  todoList.appendChild(todoDiv);
  todoInput.value = '';
}

function checkDeleteButton(e) {
  const item = e.target
  
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function() {
      todo.remove();
    })
  } else if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
};

function filterTodo(e) {
  const todos = todoList.childNodes;
 
  todos.forEach(function() {
    
  })
  // todos.forEach(todo => {
  //   switch(e.target.value) {
  //     case "all":
  //       todo.style.display = 'flex';
  //       break;
  //     case "completed": 
  //       if (todo.classList.contains('completed')) {
  //         todo.style.display = 'flex';
  //     } else {
  //         todo.style.display = 'none';
  //     }
  //   }
  // })
};
