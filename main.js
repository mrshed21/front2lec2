const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo-btn");
const todoList = document.getElementById("todo-list");
const todoMessage = document.getElementById("todo-message");
let todos = [];
const MAX_TODOS = 5;

//----------- localStorage -----------//
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function loadTodos() {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
        todos = JSON.parse(savedTodos);
        renderTodoList();
    }
}
loadTodos();

//----------- Att göra-lista -----------//
addTodoBtn.addEventListener("click", function () {
  const todoText = todoInput.value.trim();

  if (todoText === "") {
    todoMessage.textContent = "Vänligen skriv in ett ärende.";
    todoMessage.className = "error";
    return;
  }

  if (todos.length >= MAX_TODOS) {
    todoMessage.textContent = "Maxgräns på 5 ärenden har uppnåtts!";
    todoMessage.className = "error";
    return;
  }

  todos.push(todoText);
  saveTodos();
  renderTodoList();
  todoInput.value = "";
  todoMessage.textContent = "";
});

//----------- renderTodoList -----------//
function renderTodoList() {
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
        const todoItem = document.createElement("div");
        todoItem.className = "todo-item";
        
        const todoText = document.createElement("span");
        todoText.textContent = todo;
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Radera";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", function () {
            todos.splice(index, 1);
            saveTodos();
            todoMessage.textContent = "";
      renderTodoList();
    });

    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem);
  });

  if (todos.length === 0) {
    todoList.innerHTML = "<p>Inga ärenden ännu. Lägg till något att göra!</p>";
  }
}


