export default function task(content, checked ,id) {
  const label = document.createElement("label");
  label.id = id;
  label.addEventListener("click", (e) => {
    console.log("hii");
  });
  label.className =
    "label cursor-pointer " + (checked && "bg-zinc-300 rounded");
  const span = document.createElement("span");
  span.className = `label-text ${checked && "underline"}`; 
  span.textContent = content;

  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = checked;
  input.className = "checkbox checkbox-primary";

  label.appendChild(span);
  label.appendChild(input);
  return label;
}

{
  /* <label class="label cursor-pointer bg-zinc-300 rounded">
  <span class="label-text">Completed Task</span>
  <input 
   type="checkbox" checked
    class="checkbox checkbox-primary"
     />
</label>; */
}
