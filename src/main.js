import "./index.css";
import { inputEL, formEL, yearEL, taskListEL } from "./dom selection .js";
import Task from "./components/Task.js";
// Mark : dom selection
//IIFE

(function () {
  const year = new Date().getFullYear();

  yearEL.textContent = `${year}`;
})();

const tasks = [];

function renderTasks() {
  taskListEL.innerHTML = "";
  const fragment = document.createDocumentFragment();
  tasks.forEach((task) => {
    const taskEl = Task(task.value, task.isCompleted,task.id);
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
    isCompleted: true,
  });

  taskListEL.addEventListener("click", (e) => {
    if (e.target.targetName === "INPUT") {
      console.log(e.target.closest("label").id);  
      console.log("hiii");}
    });

  // console.log(tasks);
  renderTasks();
  inputEL.value = "";
});
