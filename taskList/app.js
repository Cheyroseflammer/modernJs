// DEFINE OUR UR VARS

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// LOAD ALL EVENT LISTENERS
loadEventListeners();

// LOAD ALL EVENT LISTENERS 2
function loadEventListeners() {
  // ADD TASK EVENT
  form.addEventListener("submit", addTask);
  // REMOVE TASK EVENT
  taskList.addEventListener("click", removeTask);
  // CLEAR TASK EVENT
  clearBtn.addEventListener("click", clearTasks);
  // Filter tasks event
  filter.addEventListener("keyup", filterTasks);
}

// ADD FUNCTION

function addTask(e) {
  if (taskInput.value === "") alert("Add a task first");
  // CREATE LI ELEMENT
  const li = document.createElement("li");
  // ADD CLASS
  li.className = "collection-item";
  // CTREATE TEXT NODE AND APPEND
  li.appendChild(document.createTextNode(taskInput.value));
  // CREATE NEW LINK ELEMENT
  const link = document.createElement("a");
  // ADD CLASS
  link.className = "delete-item secondary-content";
  // ICON HTML
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // APPEND LINK TO LI
  li.appendChild(link);
  // APPEND CHILD TO THE UI
  taskList.appendChild(li);
  // CLEAR INPUT
  taskInput.value = "";
  e.preventDefault();
}

// REMOVE ONE TASK FUNCTION

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// CLEAR TASKS

function clearTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// FILTER TASKS

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) !== -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
