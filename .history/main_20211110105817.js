const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const LINE_THROUGH = "line-through";

const todoListElement = $(".todo-list");
// const trashButton = $(".icon-trash");
const editElement = $(".edit");
const inputElement = $(".form-input input");

let LIST, id;

let data = localStorage.getItem("TODO");

if (data) {
  LIST = JSON.parse(data);
  id = LIST.length;
  loadList(LIST);
} else {
  LIST = [];
  id = 0;
}
function loadList(array) {
  array.forEach((item) => {
    addToDo(item.name, item.id, item.done, item.trash);
  });
}

function addToDo(toDo, id, done, trash) {
  if (trash) {
    return;
  }

  const DONE = done ? LINE_THROUGH : "";

  const todoItem = `<li class="todo-item ${DONE}" data-index = ${id}>
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
}

function completeTodo(element) {
  element.classList.toggle(LINE_THROUGH);
  LIST[element.dataset.index].done = LIST[element.dataset.index].done
    ? false
    : true;
}
function removeTodo(element) {
  element.parentNode.removeChild(element);
  LIST[element.dataset.index].trash = true;
//   LIST.splice(element.dataset.index, 1);
  LIST.filter(element => item.dataset.index !==)
}

document.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    const toDo = inputElement.value;

    if (toDo) {
      addToDo(toDo, id, false, false);

      LIST.push({
        name: toDo,
        id: id,
        done: false,
        trash: false,
      });

      localStorage.setItem("TODO", JSON.stringify(LIST));

      id++;
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

  localStorage.setItem("TODO", JSON.stringify(LIST));
});
