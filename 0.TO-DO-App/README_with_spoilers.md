# Todo List Project Spoilers

This file contains more detailed hints and code snippets for the Todo List project. Only refer to these if you're stuck after attempting to solve the problems on your own.

## 1. HTML Structure

Here's a basic HTML structure you can use as a starting point:

```html
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Todo List</title>
   <link rel="stylesheet" href="/styles.css">
</head>
<body>
<h1>Todo List</h1>
<form id="todo-form">
   <input type="text" id="todo-input" placeholder="Enter a new todo" required>
   <button type="submit">Add</button>
</form>
<ul id="todo-list"></ul>
<div id="stats"></div>
<script src="/script.js"></script>
</body>
</html>
```

## 2. CSS Styling

Here's a basic CSS structure to get you started:

```css
body {
    font-family: Arial, sans-serif;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
}

#todo-form {
    display: flex;
    margin-bottom: 20px;
}

#todo-input {
    flex-grow: 1;
    padding: 5px;
}

button {
    padding: 5px 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.completed {
    text-decoration: line-through;
    color: #888;
}
```

## 3. Add Todo Functionality

Here's a basic implementation of adding todos:

```javascript
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
let todos = [];

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
}

function renderTodo(todo) {
    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" ${todo.completed ? 'checked' : ''}>
        <span>${todo.text}</span>
        <button>Delete</button>
    `;
    todoList.appendChild(li);
}
```

## 4. Complete and Delete Functionality

Here's how you can implement complete and delete functionality:

```javascript
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
    li.classList.toggle('completed');
    saveTodos();
}

function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    const li = todoList.querySelector(`[data-id="${id}"]`);
    li.remove();
    saveTodos();
}
```

## 5. Local Storage

Here's how to implement local storage:

```javascript
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        todos = JSON.parse(storedTodos);
        todos.forEach(renderTodo);
    }
}

// Call loadTodos() when the page loads
loadTodos();
```

## 6. Todo Statistics

Here's a simple implementation of todo statistics:

```javascript
function updateStats() {
    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => todo.completed).length;
    const statsElement = document.getElementById('stats');
    statsElement.textContent = `Total: ${totalTodos}, Completed: ${completedTodos}`;
}

// Call updateStats() whenever todos change (after add, toggle, delete)
```

## Bonus Features

1. Filtering todos:
    - Add buttons for "All", "Active", and "Completed"
    - Use `todos.filter()` to create filtered lists
    - Update the rendering function to use the current filter

2. Editing todos:
    - Add an edit button to each todo
    - When clicked, replace the todo text with an input field
    - Save the edited text when the input loses focus or Enter is pressed

3. Due dates:
    - Add a date input when creating a todo
    - Extend the todo object to include a `dueDate` property
    - Sort todos by due date and style overdue items

4. Categories:
    - Add a category input or dropdown when creating a todo
    - Extend the todo object to include a `category` property
    - Add category filtering options

Remember, these are just hints. Try to implement the features on your own before looking at these spoilers. Good luck!