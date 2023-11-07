const todoList = [{
  name: 'study',
  dueDate: '2023-11-6',
}, {
  name: 'cooking',
  dueDate: '2023-11-6',
}];

renderTodoList();

function renderTodoList () {
  let todoListHtml = '';
 
  todoList.forEach((todoItem) => {
    const { name, dueDate } = todoItem;

    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-button js-delete-button">Delete</button>
    `;

    todoListHtml += html;
    console.log(todoList);
  });

  document.querySelector('.js-todoList').innerHTML = todoListHtml;

  document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    });
  });

}

document.querySelector('.js-addTodo-button').addEventListener('click', () => {
  addTodo();
});

function addTodo () {
  const name = document.querySelector('.js-inputTodo').value;
  const dueDate = document.querySelector('.js-inputDueDate').value;

  todoList.push({
    name,
    dueDate
  });
  console.log(todoList)

  document.querySelector('.js-inputTodo').value = '';
  document.querySelector('.js-inputDueDate').value = '';
  renderTodoList();

}