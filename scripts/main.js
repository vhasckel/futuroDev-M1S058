const input = document.getElementById("todo");
const listTodo = document.getElementById("todos-area");

console.log(listTodo);

const createTodo = (todo) => {
  const { uuid, content } = todo;

  //usando atributo para adicionar a tag "p"
  const pElement = document.createElement("p");
  pElement.textContent = content;
  pElement.setAttribute("id", `content-${uuid}`);

  return `
    <li id="${uuid}">
    ${pElement.outerHTML}
        <div class="btns">
            <button id="btn-delete" onclick="deleteTodo('${uuid}')">x</button>
            <button id="btn-check" class="teste" onclick="checkTodo('${uuid}')">v</button>
        </div>
    </li>
    `;
};

const publishTodo = () => {
  let content = input.value.trim();

  if (content !== "") {
    const uuid = self.crypto.randomUUID();
    const newTodo = { uuid, content };
    const createElement = createTodo(newTodo);
    listTodo.insertAdjacentHTML("afterbegin", createElement);
    input.value = "";
  }
};

const deleteTodo = (uuid) => {
  //removendo elemento
  const todoUUID = document.getElementById(uuid);
  if (todoUUID) {
    todoUUID.remove();
  } else {
    console.log("Todo not found");
  }
};

const checkTodo = (uuid) => {
  const todoToCheck = document.getElementById(uuid);

  //removendo e adicionando classe
  const removeClass = document.querySelector(".teste");
  if (todoToCheck) {
    todoToCheck.classList.add("completed");
    removeClass.classList.remove("teste");

    //removendo atributo id, que causará um bug ao deletar uma tarefa
    //todoToCheck.removeAttribute("id");
  } else {
    console.error("Todo not found");
  }
};
