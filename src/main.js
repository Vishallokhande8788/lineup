import "./index.css";
import { inputEL, formEL, yearEL, taskListEL } from "./dom selection .js";
import Task from "./components/Task.js";
import localforage, { setItem } from "localforage";
// Mark : dom selection
//IIFE

(function () {
  const year = new Date().getFullYear();

  yearEL.textContent = `${year}`;
})();

let state = [];

localforage.getItem("tasks").then((tasks) => {
  if (tasks) {
    state = tasks;
    console.log(state);
    renderTasks();
  }
});

// localStorage.setDriver(localforage.LOCALSTORAGE);

//IIFE
async () => {
  const data = await localforage.getItem("device");
  console.log(data);
};

// this toggles the isCompleted property of a task
//will be called when the user clicks on the checkbox
function toggleTask(id) {
  state = state.map((task) => {
    if (task.id === id) {
      return { ...task, isCompleted: !task.isCompleted };
    }
    return task;
  });
}
//show uncompleted state first
state.sort((a, b) => a.isCompleted - b.isCompleted);
localforage.setItem("tasks", state);

function renderTasks() {
  taskListEL.innerHTML = "";
  const fragment = document.createDocumentFragment();
  state.forEach((task) => {
    const taskEl = Task(task.value, task.isCompleted, task.id);

    fragment.appendChild(taskEl);

    taskListEL.appendChild(fragment);
  });
}

formEL.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!inputEL.value) {
    return;
  }

  state.unshift({
    id: crypto.randomUUID(),
    value: inputEL.value,
    isCompleted: false,
  });
  console.log(state);
  localforage.setItem("tasks", state);

  inputEL.value = "";

  taskListEL.addEventListener("click", (e) => {
    if (e.target.targetName === "INPUT") {
      console.log(e.target.closest("label").id);
      toggleTask(e.target.closest("label").id);
      renderTasks();
    }
  });

  toggleTask;
  // console.log(state);
  renderTasks();
  inputEL.value = "";
});
