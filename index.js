const container = document.querySelector(".conatiner");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#inputTodo");
const todoButton = document.querySelector("#addTodoButton");

const todoLists = document.getElementById("lists");
const messageElement = document.getElementById("message");

// show message
const showMessage = (text, status) => {
    messageElement.textContent = text;
    messageElement.classList.add(`bg-${status}`);
    setTimeout(() => {
        messageElement.textContent = "";
        messageElement.classList.remove(`bg-${status}`);
    }, 1000);
};
// createTodo

const createTodo = (todoId, todoValue) => {
    const todoElement = document.createElement("li");
    todoElement.id = todoId;
    todoElement.classList.add("li-style");
    todoElement.innerHTML = `
    <span>${todoValue}</span>
    <span><button class="btn" id="deleteButton" ><i
    class="fa fa-trash"> </i> </button> </span>
    `;
    todoLists.appendChild(todoElement);
    const deleteButton = todoElement.querySelector("#deleteButton")
    deleteButton.addEventListener("click", deleteTodo)
};
// deleteTodo
const deleteTodo = (e) => {
    const selectedTodo = e.target.parentElement.parentElement.parentElement;

    todoLists.removeChild(selectedTodo);
}
// getTodosFromLocalStorage
const getTodosFromLocalStorage = () => {
    return localStorage.getItem("mytodos")
        ? JSON.parse(localStorage.getItem("mytodos")) : [];
}

// addTodo

const addTodo = (e) => {
    e.preventDefault();
    const todoValue = todoInput.value;

    // unique id
    const todoId = Date.now().toString();
    createTodo(todoId, todoValue);
    showMessage("todo is added", "success");

    // add todo to localStorage

    const todos = getTodosFromLocalStorage();
    todos.push({ todoId, todoValue });
    localStorage.setItem("mytodos", JSON.stringify(todos));

    todoInput.value = "";


};

// adding listeners
todoForm.addEventListener("submit", addTodo);
