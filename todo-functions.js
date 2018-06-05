// Read todos from localStorage
const getSavedTodos = function () {
  const todosJSON = localStorage.getItem('todos');

  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
};

// Save todos to localStorage
const saveTodos = function (todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// Generate the DOM structure for a todo
const generateTodoDOM = function (note) {
  const todoEl = document.createElement('p');
  todoEl.textContent = note.text;
  return todoEl;
};

const generateSummaryDOM = function (incompleteTodos) {
  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};

// Render todos
const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });

  document.querySelector('#todos').innerHTML = '';

  document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));

  filteredTodos.forEach(function (filteredTodo) {
    document.querySelector('#todos').appendChild(generateTodoDOM(filteredTodo));
  })
};