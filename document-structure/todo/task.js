const taskForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const removeButton = document.getElementsByClassName('task__remove');

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if(taskInput.value) {
        createTask(taskInput.value);
        taskForm.reset();
    }
});

function createTask(taskText) {
    let newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.innerHTML = `<div class="task__title">${taskText}</div><a href="#" class="task__remove">&times;</a>`;
    tasksList.appendChild(newTask);

    newTask.querySelector('.task__remove').addEventListener('click', (event) => {
        event.preventDefault();
        newTask.remove();
    })
};