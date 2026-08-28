function startScheduler() {

    console.log("Scheduler started");

    console.log("Task 1: Start immediately");

    setTimeout(function() {
        console.log("Task 2: Completed after 2 seconds");
    }, 2000);

    setTimeout(function() {
        console.log("Task 3: Completed after 4 seconds");
    }, 4000);

    document.getElementById("message").textContent =
        "Tasks have been scheduled!";
}