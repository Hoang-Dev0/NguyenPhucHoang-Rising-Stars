const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const LINE_THROUGH = "line-through";

const todoListElement = $(".todo-list");
const closeButton = $(".icon-close");
const editElement = $(".edit");
const inputElement = $(".form-input input");

let id = 0;

function addToDo(toDo, id, done, trash) {
  if (trash) {
    return;
  }

  const DONE = done ? LINE_THROUGH : "";

  const todoItem = `<li class="todo-item">
    <p class="todo-name">
      ${toDo}
      <span class="icon-close ">
        <i class="fas fa-times"></i>
      </span>
    </p>
    <p class="edit">
        Edit
    </p>
  </li>`;

  const position = 'beforeend';
  todoListElement.insertAdjacentHTML(position,todoItem)
}

document.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    const toDo = inputElement.value;

    if (toDo) {
      addToDo(toDo, id, true, false);
      id++;
    }
    inputElement.value = "";
  }
});
