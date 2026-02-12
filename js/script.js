let todos = [];

function addTodo() { 
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');

// Simple validation check if inputs are filled (both of them)
    if (todoInput.value.trim() === '' || todoDate.value === '')  {
        alert('Please enter both a todo item and a due date.');
        return;
    } else {
        // Create a new todo object
        const newTodo = {
            todo: todoInput.value.trim(),
            date: todoDate.value
        };
        todos.push(newTodo);
    
        todoInput.value = '';
        todoDate.value = '';

        renderTodos();

    }
}

/// Function to render todo items to the DOM
function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    if (todos.length === 0) {
        todoList.innerHTML = '<li>No todos available</li>';
        return;
    }

    todos.forEach((item) => {
        todoList.innerHTML += `
        <li>
            <p class="text-2xl">
                ${item.todo}
                <span class="text-sm text-gray-500"> (${item.date})</span>
            </p>
            <hr />
        </li>
        `;
    });
}


function deleteAllTodos() {
     todos = [];
     renderTodos();
}

function filterTodos() {


}