const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

const listItems = document.querySelector('.list');

const renderItems = (array) => {
    array.map(item => {
        return listItems.insertAdjacentHTML("beforeend", `<li class="list__item ${item.done ? "list__item_done" : "list__item"}">
        <input type="checkbox" ${item.done ? "checked" : false}>
        ${item.text}
        </li>`);                                                                                                                                                                 
    })
};

renderItems(tasks);