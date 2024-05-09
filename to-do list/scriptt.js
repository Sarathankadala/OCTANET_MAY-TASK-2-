function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value;
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(taskText));
    li.onclick = function() {
        li.classList.toggle("completed");
    };
    ul.appendChild(li);
    input.value = "";
}
