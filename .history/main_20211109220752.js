const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const LINE_THROUGH = "line-through";

const todoListElement = $(".todo-list");
const trashButton = $(".icon-trash");
const editElement = $(".edit");
const inputElement = $(".form-input input");

let id = 0;

function addToDo(toDo, id, done, trash) {
  if (trash) {
    return;
  }

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
}

function completeTodo(element){
    element.classList.toggle(LINE_THROUGH);
}

document.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    const toDo = inputElement.value;

    if (toDo) {
      addToDo(toDo, id, false, false);
      id++;
    }
    inputElement.value = "";
  }
});

todoListElement.addEventListener('click',(e)=>{
    const element= e.target;
    console.log("🚀 ~ file: main.js ~ line 54 ~ todoListElement.addEventListener ~ element", element)
})






