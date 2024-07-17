// Get the add button, delete buttons, and task list
const addButton = document.querySelector('.add-btn');
const deleteButtons = document.querySelectorAll('.delete-btn');
const taskList = document.querySelector('.todo-list');
const filterInput = document.querySelector('.filter-input');

// Create an array to store the tasks
let tasks = [];

// Add an event listener to the add button
addButton.addEventListener('click', () => {
  const task = filterInput.value;

  // Add the task to the tasks array
  tasks.push(task);

  // Update the task list
  renderTasks();

  // Clear the input field
  filterInput.value = '';
});

// Function to render the tasks in the task list
function renderTasks() {
  // Clear the task list
  taskList.innerHTML = '';

  // Create new list items and add the tasks and delete buttons
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    const p = document.createElement('p');
    const deleteBtn = document.createElement('button');

    p.textContent = `${index + 1}. ${task}`;
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
      // Remove the task from the tasks array
      tasks = tasks.filter((_, i) => i !== index);

      // Update the task list
      renderTasks();
    });

    li.appendChild(p);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// Add event listeners to the delete buttons (not needed anymore)
// deleteButtons.forEach((button) => {
//   button.addEventListener('click', (e) => {
//     const li = e.target.parentElement;
//     li.remove();
//   });
// });