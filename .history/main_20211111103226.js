const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const LINE_THROUGH = "line-through";

const todoListElement = $(".todo-list");
const trashButton = $(".icon-trash");
const editElement = $(".edit");
const inputElement = $(".form-input input");
const sortElement = $(".sort");
const todoTi

let LIST = [];

function addToDo(toDo, done) {
  const DONE = done ? LINE_THROUGH : "";

  // const todoItem = `<li class="todo-item ">
  //   <p class="todo-name ${DONE}">
  //     ${toDo}
  //     <span class="icon-trash">
  //       <i class="fas fa-times"></i>
  //     </span>
  //   </p>
  //   <p class="edit">
  //       Edit
  //   </p>
  // </li>`;

  const todoItem = `<li class="todo-item">
  <p class="todo-name ${DONE}">
    <input type="text" class="todo-title" readonly value=${toDo} />
    <span class="icon-trash">
      <i class="fas fa-times"></i>
    </span>
  </p>

  <button class="edit">Edit</button>
</li>`;

  LIST.push(todoItem);

  todoListElement.innerHTML = LIST.join("");

  //   const position = "beforeend";
  //   todoListElement.insertAdjacentHTML(position, todoItem);
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
  const editElement = $(".edit");

  editElement.addEventListener("click", (e) => {
    if (editElement.innerText.toLowerCase() == "edit") {
      editElement.innerText = "Save";
      editElement.re
    }
  });
});

todoListElement.addEventListener("click", (e) => {
  const todoNameElement = e.target.closest(".todo-name");
  const todoItemElement = e.target.closest(".todo-item");
  const trashButton = e.target.closest(".icon-trash");

  if (!trashButton) {
    completeTodo(todoNameElement);
  } else {
    removeTodo(todoItemElement);
  }
});

sortElement.addEventListener("click", (e) => {
  LIST.sort((a, b) => a.length - b.length);
  todoListElement.innerHTML = LIST.join("");
});
