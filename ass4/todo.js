const taskTitleInput = document.getElementById('task-title');
const taskDatetimeInput = document.getElementById('task-datetime');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');


addTaskBtn.addEventListener('click', () => {
    const title = taskTitleInput.value.trim();
    const datetime = taskDatetimeInput.value;

    if (title === '' || datetime === '') {
        alert('Please provide both title and date/time.');
        return;
    }

    const task = {
        title: title,
        datetime: datetime,
        completed: false
    };

    addTaskToList(task);

    
    taskTitleInput.value = '';
    taskDatetimeInput.value = '';
});


function addTaskToList(task) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="${task.completed ? 'task-completed' : ''}">
            ${task.title} - ${new Date(task.datetime).toLocaleString()}
        </span>
        <div>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    const completeBtn = li.querySelector('.complete-btn');
    const deleteBtn = li.querySelector('.delete-btn');

   
    completeBtn.addEventListener('click', () => {
        task.completed = !task.completed;
        li.querySelector('span').classList.toggle('task-completed');
    });

    
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    taskList.appendChild(li);
}