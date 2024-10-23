const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
let todos = [];

// Add todo functionality
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text) {
        addTodo(text);
        input.value = '';
    }
});

function addTodo(text) {
    const todo = {
        id: Date.now(),
        text,
        completed: false
    };
    todos.push(todo);
    renderTodo(todo);
    saveTodos();
    updateStats();
}

function renderTodo(todo) {
    const li = document.createElement('li');
    li.dataset.id = todo.id;
    li.innerHTML = `
        <input type="checkbox" ${todo.completed ? 'checked' : ''}>
        <span class="${todo.completed ? 'completed' : ''}">${todo.text}</span>
        <button>Delete</button>
    `;
    todoList.appendChild(li);
}

// Complete and delete functionality
todoList.addEventListener('click', (e) => {
    if (e.target.type === 'checkbox') {
        const li = e.target.closest('li');
        const id = parseInt(li.dataset.id);
        toggleTodo(id);
    } else if (e.target.tagName === 'BUTTON') {
        const li = e.target.closest('li');
        const id = parseInt(li.dataset.id);
        deleteTodo(id);
    }
});

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    todo.completed = !todo.completed;
    const li = todoList.querySelector(`[data-id="${id}"]`);
    const span = li.querySelector('span');
    span.classList.toggle('completed');
    saveTodos();
    updateStats();
}

function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    const li = todoList.querySelector(`[data-id="${id}"]`);
    li.remove();
    saveTodos();
    updateStats();
}

// Local storage functionality
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        todos = JSON.parse(storedTodos);
        todos.forEach(renderTodo);
        updateStats();
    }
}

// Statistics functionality
function updateStats() {
    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => todo.completed).length;
    const statsElement = document.getElementById('stats');
    statsElement.textContent = `Total: ${totalTodos}, Completed: ${completedTodos}`;
}

// Load todos when the page loads
loadTodos();