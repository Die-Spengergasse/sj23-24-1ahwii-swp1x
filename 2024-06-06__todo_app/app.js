// 1. APPLICATION STATE
// - Holds the entire state of the application

// - Each todo item will have an id, text, and completed property
// - The filterWord will be used to filter the todos
// - The id will be used to identify the todo item
const state = loadOrdummyState();

function loadOrdummyState() {
    const loaded = localStorage.getItem('state');
    if (!loaded) {
        return {
            todos: [{ id: 1, text: 'German', completed: false }],
            filterWord: '',
            nextId: 2 // Start this at 2 because we already have one todo
        };
    }
    return JSON.parse(loaded);
}

// 2. STATE ACCESSORS/MUTATORS FN'S
// - Functions that allow us to get and set the state
// Returns a new array with the filtered todos plus information where the filter word is found
function getFilteredTodos() {
    const filterWord = state.filterWord.toLowerCase();
    const filteredTodos = [];
    for (const todo of state.todos) {
        const text = todo.text.toLowerCase();
        const startMatch = text.indexOf(filterWord);
        if (startMatch !== -1) {
            const endMatch = startMatch + filterWord.length;
            filteredTodos.push({ ...todo, startMatch, endMatch });
        }
    }
    return filteredTodos;
}

function setFilterWord(filterWord) {
    state.filterWord = filterWord;
}

function addTodo(text) {
    state.todos.push({ id: state.nextId, text: text, completed: false });
    state.nextId++; // Increment the Id counter
}

function removeTodo(id) {
    const index = state.todos.findIndex(t => t.id == id);
    state.todos.splice(index, 1);
}

function toggleTodoCompleted(id) {
    const todo = state.todos.find(t => t.id == id);
    todo.completed = !todo.completed;
}

// 3. DOM Node Refs
// - Static references to DOM nodes needed after the start of the application
const todoAdd$ = document.querySelector('#todo-add');
const todoInput$ = document.querySelector('#todo-input');
const todoList$ = document.querySelector('#todo-list');
const todoFilter$ = document.querySelector('#todo-filter');
const todoSave$ = document.getElementById('todo-save');
const todoListDone$ = document.getElementById("todo-list-erledigt");
// 4. DOM Node Creation Fn's
// - Dynamic creation of DOM nodes needed upon user interaction
// - Here we will create a function that will create a todo item

// Version: DOM Template Strings
function createTodoItem(todo) {
    const { id, text, completed, startMatch, endMatch } = todo;
    const highlightedText = highlightMatch(text, startMatch, endMatch);
    return `
    <li class="${completed ? 'completed' : ''}">
      ${highlightedText}
      ${createTodoCheckBox(id, completed)}
      ${createTodoRemoveButton(id)}
    </li>
    `;
}

function highlightMatch(text, startMatch, endMatch) {
    const beforeMatch = text.slice(0, startMatch);
    const matchText = text.slice(startMatch, endMatch);
    const afterMatch = text.slice(endMatch);
    return `${beforeMatch}<mark>${matchText}</mark>${afterMatch}`;
}

function createTodoCheckBox(id, completed) {
    return `
    <input type="checkbox" ${completed ? 'checked' : ''}
      onclick="onToggleTodoCompleted(${id})">
    `;
}

function createTodoRemoveButton(id) {
    return `<button onclick="onRemoveTodo(${id})">delete</button>`;
}

// 5. RENDER FN
// - These functions will render the application state to the DOM
// - Here we will use a very naive but simple approach to re-render the list
// - IMPORTANT TAKEAWAY: The state drives the UI, any state change should trigger a re-render of the UI

// Version for: DOM Template Strings
function render() {
    todoList$.innerHTML = getFilteredTodos()
        .filter(todo => todo.completed == false)
        .map(createTodoItem)
        .join('');
    todoListDone$.innerHTML = getFilteredTodos()
        .filter(todo => todo.completed == true)
        .map(createTodoItem)
        .join('');
}

// 6. EVENT HANDLERS
// - These functions handle user interaction e.g. button clicks, key presses etc.
// - These functions will call the state mutators and then call the render function
// - The naming convention for the event handlers is `on<Event>`
// - Here we will create a function that will handle the add button click
function onAddTodo() {
    addTodo(todoInput$.value);
    console.log('state', state);
    render();
}

function onRemoveTodo(id) {
    removeTodo(id);
    console.log('state', state);
    render();
}

function onToggleTodoCompleted(id) {
    toggleTodoCompleted(id); // update state
    render(); // update ui
    console.log('state', state);
}

function onFilterTodos() {
    setFilterWord(todoFilter$.value); // update state
    render(); // update ui
    console.log('state', state);
}
function onSaveState() {
    console.log('saving ...');
    localStorage.setItem('state', JSON.stringify(state));
    alert('Saved');
}

// 7. INIT BINDINGS
// - These are the initial bindings of the event handlers
todoAdd$.addEventListener('click', function (event) {
    onAddTodo();
});

todoInput$.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        onAddTodo();
    }
});

todoFilter$.addEventListener('keyup', function (event) {
    onFilterTodos();
});
todoSave$.addEventListener('click', onSaveState);

// 8. INITIAL RENDER
// - Here will call the render function to render the initial state of the application
render();
console.log('state', state);
