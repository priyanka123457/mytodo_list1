const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";

  const span = document.createElement("span");
  span.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "×";
  deleteBtn.className = "deleteBtn";

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";

  // Toggle completed class
  checkbox.addEventListener("change", function () {
    li.classList.toggle("completed");
  });

  // Delete task
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(li);
  });
});

// Pressing "Enter" adds task
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addBtn.click();
});
