document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const taskTime = document.getElementById('taskTime');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        const taskTimeValue = taskTime.value;
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                ${taskText} <br> Due: ${taskTimeValue}
                <button class="delete-btn">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
            taskTime.value = '';
            addDeleteEventListener(li);
        }
    });

    function addDeleteEventListener(li) {
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });
    }
});
