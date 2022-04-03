let tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

// змінні

const listItems = document.querySelector(".list");
const taskInput = document.querySelector(".task-input");
const submitBtn = document.querySelector(".create-task-btn");
let taskItem;

// функції
const renderItems = (array) => {
  array.map((item) => {
    return listItems.insertAdjacentHTML(
      "beforeend",
      `<li id="${item.text}" class="list__item ${
        item.done ? "list__item_done" : "list__item"
      }">
        <input class="list__item-checkbox" type="checkbox" ${
          item.done ? "checked" : false
        }>
        ${item.text}
        </li>`
    );
  });
};

const onChangeInput = (event) => {
  taskItem = {
    text: event.currentTarget.value,
    done: false,
  };
};

const createTask = () => {
  tasks.unshift(taskItem);
  localStorage.setItem("listTasks", JSON.stringify(tasks));
  listItems.insertAdjacentHTML(
    "afterbegin",
    `<li id="${taskItem.text}" class="list__item ${
      taskItem.done ? "list__item_done" : "list__item"
    }">
        <input class="list__item-checkbox" type="checkbox" ${
          taskItem.done ? "checked" : false
        }>
        ${taskItem.text}
        </li>`
  );
  checkboxes.map((item) => item.addEventListener("click", onChecked));
  taskInput.value = "";
};

const onChecked = (event) => {
  let checkedItem = tasks.find(
    (item) => item.text === event.currentTarget.parentNode.getAttribute("id")
  );
  checkedItem.done = !checkedItem.done;
  localStorage.setItem("listTasks", JSON.stringify(tasks));
  event.currentTarget.parentNode.classList.toggle("list__item_done");
};

// закінчення функцій

// виконання коду & змінні

if (JSON.parse(localStorage.getItem("listTasks"))) {
  tasks = JSON.parse(localStorage.getItem("listTasks"));
  renderItems(tasks);
} else {
  renderItems(tasks);
}

const checkboxes = [...document.querySelectorAll(".list__item-checkbox")];
taskInput.addEventListener("input", onChangeInput);
submitBtn.addEventListener("click", createTask);
checkboxes.map((item) => item.addEventListener("click", onChecked));
