const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const LINE_THROUGH = "line-through";

const todoListElement = $(".todo-list");
const trashButton = $(".icon-trash");
const editElement = $(".edit");
const inputElement = $(".form-input input");
const sortElement = $(".sort");

let LIST;

function addToDo(toDo, done) {
  const DONE = done ? LINE_THROUGH : "";

  const todoItem = `<li class="todo-item ${DONE}">
    <p class="todo-name ">
      ${toDo}
      <span class="icon-trash">
        <i class="fas fa-times"></i>
      </span>
    </p>
    <p class="edit">
        Edit
    </p>
  </li>`;

  const position = "beforeend";
  todoListElement.insertAdjacentHTML(position, todoItem);
    LIST
}

function completeTodo(element) {
  element.classList.toggle(LINE_THROUGH);
}
function removeTodo(element) {
  element.parentNode.removeChild(element);
}

document.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    const toDo = inputElement.value;

    if (toDo) {
      addToDo(toDo, false);
    }
    inputElement.value = "";
  }
});

todoListElement.addEventListener("click", (e) => {
  const element = e.target.closest(".todo-item");
  const trashButton = e.target.closest(".icon-trash");

  if (!trashButton) {
    completeTodo(element);
  } else {
    removeTodo(element);
  }
});

sortElement.addEventListener("click", (e) => {
    
});
