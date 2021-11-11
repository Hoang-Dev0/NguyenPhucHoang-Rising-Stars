
window.addEventListener("load", () => {
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const LINE_THROUGH = "line-through";

  const todoList = $(".todo-list");
  const trashButton = $(".icon-trash");
  const editElement = $(".edit");
  const inputElement = $(".form-input input");
  const sortElement = $(".sort");
  const todoTitleElement = $(".todo-title");

  let LIST = [];

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
        const todoItem = document.createElement("li");
        todoItem.classList.add("todo-item");
        todoList.appendChild(todoItem);

        const todoName = document.createElement("p");
        todoName.classList.add("todo-name");
        todoItem.appendChild(todoName);

        const todoTitle = document.createElement("input");
        todoTitle.classList.add("todo-title");
        todoTitle.type = "text";
        todoTitle.value = toDo;
        todoTitle.setAttribute("readonly", "readonly");

        todoName.appendChild(todoTitle);

        const trashButton = document.createElement("span");
        trashButton.classList.add("icon-trash");
        todoName.appendChild(trashButton);

        const iconTrash = document.createElement("i");
        iconTrash.classList.add("fas", "fa-times");
        trashButton.appendChild(iconTrash);

        const editButton = document.createElement("button");
        editButton.classList.add("edit");
        editButton.innerText = "Edit";

        todoItem.appendChild(editButton);

        LIST.push(JSON.stringify(todoItem));

        editButton.addEventListener("click", (e) => {
          if (editButton.innerText.toLowerCase() == "edit") {
            editButton.innerText = "Save";
            todoTitle.removeAttribute("readonly");
            todoTitle.focus();
          } else {
            editButton.innerText = "Edit";
            todoTitle.setAttribute("readonly", "readonly");
          }
        });

        trashButton.addEventListener("click", (e) => {
          todoList.removeChild(todoItem);
        });

        todoItem.addEventListener("click", (e) => {
          todoItem.classList.toggle(LINE_THROUGH);
        });
      }
    }
  });

  sortElement.addEventListener("click", (e) => {
    LIST.sort((a, b) => a.length - b.length);
    todoList.innerHTML = "";
    todoList.innerHTML = LIST.join("");
  });
});
