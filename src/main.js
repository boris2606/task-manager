import './styles/main.scss';
import './bootstrap.js';
import $ from "jquery"; // бібліотека jquery

let ts_tit = document.querySelector('.ts_tit')
let ts_sec = document.querySelector('.ts_sec')
let box_ts = document.querySelector('.block_with_comp_ts')
let confirm_ts = document.querySelector('.confirm_ts')

let tasks = [];
const tasksTemp = localStorage.getItem('tasks');
if (tasksTemp && tasksTemp !== null) {
    try {
        tasks = JSON.parse(tasksTemp);
    } catch (error) {
        console.log(error);
    }
}

const remove = (id) => {
    document.getElementById(id).remove();
    tasks = tasks.filter(item => item?.id !== id);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

const doneUndone = (id) => {
    let done = document.getElementById(id).classList.contains('ts_content_remov');
    if (done) {
        document.getElementById(id).classList.remove('ts_content_remov');
    } else {
        document.getElementById(id).classList.add('ts_content_remov');
    }
    tasks = tasks.map(item => {
        if (item.id === id) {
            item.done = !done;
        }
        return item;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
};


window.remove = remove;
window.doneUndone = doneUndone;

const addHtml = ({ id = new Date().getTime(), title, desc, done = false }) => {
    box_ts.innerHTML += `
        <div class='ts_content${done ? ' ts_content_remov' : ''}' id='${id}'>
            <div class='coomp_ts_wrapp'>
                <p class='comp_ts_tit'>${title}</p>
                <p class='comp_ts_sec'>${desc}</p>
                <div class='ts_btn_wrapp'>
                    <button onclick='doneUndone(${id})' class='hide_comp_ts'>Виконано / Повернути</button>
                    <button onclick='remove(${id})' class='del_comp_ts'>X</button>
                </div>
            </div>
        </div>
        `
}

// при старті апп
for (let i = 0; i < tasks.length; i++) {
    addHtml(tasks[i]);
}

confirm_ts.onclick = () => {
    if (ts_tit.value == false || ts_sec.value == false) {
        alert('Заповніть будь-ласка назву та опис завдання')
    } else {
        const obj = {
            id: new Date().getTime(),
            title: ts_tit.value,
            desc: ts_sec.value,
            done: false
        };
        addHtml(obj);
        tasks.push(obj);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        ts_tit.value = ''
        ts_sec.value = ''
    }
}
