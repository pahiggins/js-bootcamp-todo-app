let todos = getSavedTodos();

const filters = {
  searchText: '',
  hideCompleted: false
};

renderTodos(todos, filters);

document.querySelector('#todo-filter').addEventListener('input', (e) => {
  filters.searchText = e.target.value;

  renderTodos(todos, filters);
});

document.querySelector('#create-todo').addEventListener('submit', (e) => {
  e.preventDefault();

  const todo = {
    id: uuidv4(),
    text: e.target.elements.todoName.value,
    completed: false
  };

  todos.push(todo);
  saveTodos(todos);
  renderTodos(todos, filters);
  e.target.elements.todoName.value = '';
});

document.querySelector('#todo-checkbox').addEventListener('change', (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});