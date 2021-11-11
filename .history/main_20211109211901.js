const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const LINE_THROUGH = "line-through";

const todoListElement = $(".todo-list");
const closeButton = $(".icon-close");
const editElement = $(".edit");

function addToDo(toDo,id,done,trash){
    if(trash){return;}

    const DONE = done ? LINE_THROUGH
}

