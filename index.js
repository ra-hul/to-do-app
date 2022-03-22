const container = document.querySelector(".conatiner");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#inputTodo");
const todoButton = document.querySelector("#addTodoButton");

const todoLists = document.getElementById("lists");

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

}

// addTodo

const addTodo = (e) => {
    e.preventDefault();
    const todoValue = todoInput.value;

    // unique id
    const todoId = Date.now().toString();
    createTodo(todoId, todoValue);


};

// adding listeners
todoForm.addEventListener("submit", addTodo);
