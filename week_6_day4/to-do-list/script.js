const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = [];


// Add a task
function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";

    displayTasks();
}


// Display the tasks
function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function(task) {

        const li = document.createElement("li");

        const text = document.createElement("span");

        text.textContent = task.text;

        text.className = "task-text";

        if (task.completed) {
            text.classList.add("completed");
        }

        text.onclick = function() {
            completeTask(task.id);
        };


        const buttons = document.createElement("div");


        const editButton = document.createElement("button");

        editButton.textContent = "Edit";

        editButton.className = "edit";

        editButton.onclick = function() {
            editTask(task.id);
        };


        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.className = "delete";

        deleteButton.onclick = function() {
            deleteTask(task.id);
        };


        buttons.appendChild(editButton);

        buttons.appendChild(deleteButton);


        li.appendChild(text);

        li.appendChild(buttons);


        taskList.appendChild(li);

    });
}


// Complete a task
function completeTask(id) {

    tasks.forEach(function(task) {

        if (task.id === id) {
            task.completed = !task.completed;
        }

    });

    displayTasks();
}


// Edit a task
function editTask(id) {

    const task = tasks.find(function(task) {
        return task.id === id;
    });

    const newText = prompt("Edit your task:", task.text);

    if (newText !== null && newText.trim() !== "") {

        task.text = newText.trim();

        displayTasks();
    }
}


// Delete a task
function deleteTask(id) {

    tasks = tasks.filter(function(task) {
        return task.id !== id;
    });

    displayTasks();
}