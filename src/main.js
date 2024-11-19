import "./index.css";
import { inputEL, formEL, yearEL, taskListEL } from "./dom selection .js";
import Task from "./components/Task.js";
// Mark : dom selection
//IIFE

(function () {
  const year = new Date().getFullYear();

  yearEL.textContent = `${year}`;
})();

let tasks = [];
// this toggles the isCompleted property of a task
//will be called when the user clicks on the checkbox
function toggleTask(id) {
  tasks= tasks.map((task) => {
    if (task.id === id) {
      return { ...task, isCompleted: !task.isCompleted };
    }
    return task;
    
  });
}
//show uncompleted tasks first
tasks.sort((a, b) => a.isCompleted - b.isCompleted);

function renderTasks() {
  taskListEL.innerHTML = "";
  const fragment = document.createDocumentFragment();
  tasks.forEach((task) => {
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

  tasks.unshift({
    id: crypto.randomUUID(),
    value: inputEL.value,
    isCompleted: false,
  });
  console.log(tasks);
  inputEL.value = "";

  taskListEL.addEventListener("click", (e) => {
    if (e.target.targetName === "INPUT") {
      console.log(e.target.closest("label").id);
      toggleTask()
     renderTasks();
    }
  });

  toggleTask
  // console.log(tasks);
  renderTasks();
  inputEL.value = "";
});
