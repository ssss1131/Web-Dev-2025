document.getElementById("taskInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});


function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();
  if (taskText === "") return;

  let li = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onclick = function () {
    if (checkbox.checked) li.classList.add("checked");
    else li.classList.remove("checked");
  }
  let span = document.createElement("span");
  span.innerText = taskText;
  span.classList.add("task-text");
  let deleteButton = document.createElement("span");
  deleteButton.innerText = "🗑️";
  deleteButton.className = "delete-button";
  deleteButton.onclick = function () {
    li.remove();
  }

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteButton);
  document.getElementById("taskList").appendChild(li);
  document.getElementById("taskInput").value = "";
}
