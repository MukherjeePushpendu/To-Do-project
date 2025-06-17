function addTask() {
  const input = document.getElementById("todo-input");
  const task = input.value.trim();
  if (task !== "") {
    const list = document.getElementById("todo-list");
    const li = document.createElement("li");
    li.innerHTML = `${task} <button onclick="removeTask(this)">❌</button>`;
    list.appendChild(li);
    input.value = "";
  }
}

function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}
