let taskInput = document.getElementById('taskInput');
let taskList = document.getElementById('taskList');

// Fonction pour ajouter une tâche
function addTask() {
    if (taskInput.value.trim() !== "") {
        let taskItem = document.createElement('li');
        taskItem.classList.add('todo-item');
        taskItem.innerHTML = `
            <span onclick="toggleTask(this)">${taskInput.value}</span>
            <button onclick="deleteTask(this)">Supprimer</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

// Fonction pour marquer une tâche comme complétée
function toggleTask(task) {
    task.parentElement.classList.toggle('completed');
}

// Fonction pour supprimer une tâche
function deleteTask(button) {
    button.parentElement.remove();
}
