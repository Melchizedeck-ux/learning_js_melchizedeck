function scheduleTask() {

    const taskInput = document.getElementById("taskInput");
    const timeInput = document.getElementById("timeInput");
    const taskList = document.getElementById("taskList");

    const taskName = taskInput.value.trim();
    const seconds = Number(timeInput.value);

    if (taskName === "" || seconds <= 0) {
        alert("Please enter a task and a valid time.");
        return;
    }

    const task = document.createElement("div");

    task.className = "task";

    task.innerHTML = `
        <strong>${taskName}</strong>
        <p>Waiting... ${seconds} seconds</p>
    `;

    taskList.appendChild(task);

    taskInput.value = "";
    timeInput.value = "";

    setTimeout(function() {

        task.className = "task completed";

        task.innerHTML = `
            <strong>✓ ${taskName}</strong>
            <p>Task completed!</p>
        `;

        console.log(`Task completed: ${taskName}`);

    }, seconds * 1000);
}