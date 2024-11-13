import "./index.css";
import { inputEL, formEL, yearEL } from "./dom selection .js";
// Mark : dom selection
//IIFE

(function () {
  const year = new Date().getFullYear();

  yearEL.textContent = `${year}`;
})();

const tasks = [];
formEL.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!inputEL.value) {
    return;
  }

  tasks.push({
    title: inputEL.value,
    isCompleted: false,
    id: crypto.randomUUID(),
  });

  console.log(tasks);
  inputEL.value = "";
});
