// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const LINE_THROUGH = "line-through";

// const todoListElement = $(".todo-list");
// const trashButton = $(".icon-trash");
// const editElement = $(".edit");
// const inputElement = $(".form-input input");
// const sortElement = $(".sort");
// const todoTitleElement = $(".todo-title");

// let LIST = [];

// function addToDo(toDo, done) {
//   const DONE = done ? LINE_THROUGH : "";

//   // const todoItem = `<li class="todo-item ">
//   //   <p class="todo-name ${DONE}">
//   //     ${toDo}
//   //     <span class="icon-trash">
//   //       <i class="fas fa-times"></i>
//   //     </span>
//   //   </p>
//   //   <p class="edit">
//   //       Edit
//   //   </p>
//   // </li>`;

//   const todoItem = `<li class="todo-item">
//   <p class="todo-name ${DONE}">
//     <input type="text" class="todo-title" readonly value=${toDo} />
//     <span class="icon-trash">
//       <i class="fas fa-times"></i>
//     </span>
//   </p>

//   <button class="edit">Edit</button>
// </li>`;

//   LIST.push(todoItem);

//   todoListElement.innerHTML = LIST.join("");

//   //   const position = "beforeend";
//   //   todoListElement.insertAdjacentHTML(position, todoItem);
// }

// function completeTodo(element) {
//   element.classList.toggle(LINE_THROUGH);
// }
// function removeTodo(element) {
//   element.parentNode.removeChild(element);
// }

// document.addEventListener("keyup", (e) => {
//   if (e.keyCode == 13) {
//     const toDo = inputElement.value;

//     if (toDo) {
//       addToDo(toDo, false);
//     }
//     inputElement.value = "";
//   }
//   const editElement = $(".edit");
// });

// todoListElement.addEventListener("click", (e) => {
//   const todoNameElement = e.target.closest(".todo-name");
//   const todoItemElement = e.target.closest(".todo-item");
//   const trashButton = e.target.closest(".icon-trash");

//   if (!trashButton) {
//     completeTodo(todoNameElement);
//   } else {
//     removeTodo(todoItemElement);
//   }
// });

// sortElement.addEventListener("click", (e) => {
//   LIST.sort((a, b) => a.length - b.length);
//   todoListElement.innerHTML = LIST.join("");
// });

// if (editElement && todoTitleElement) {
//   editElement.addEventListener("click", (e) => {
//     if (editElement.innerText.toLowerCase() == "edit") {
//       editElement.innerText = "Save";
//       todoTitleElement.removeAttribute("readonly");
//       todoTitleElement.focus();
//     } else {
//       editElement.innerText = "Edit";
//       todoTitleElement.setAttribute("readonly", "readonly");
//     }
//   });
// }

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

        inputElement.value = "";

        let LIST = 

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
  });
});
