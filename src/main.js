import './styles/main.scss';
import './bootstrap.js';
import $ from "jquery"; // бібліотека jquery

let ts_tit = document.querySelector('.ts_tit')
let ts_sec = document.querySelector('.ts_sec')
let box_ts = document.querySelector('.block_with_comp_ts')
let confirm_ts = document.querySelector('.confirm_ts')


confirm_ts.onclick =()=>{
    if (ts_tit.value == false || ts_sec.value == false) {
        alert('Заповніть будь-ласка назву та опис завдання')
    } else {
        box_ts.innerHTML += `
        <div class='ts_content'>
            <div class='coomp_ts_wrapp'>
                <p class='comp_ts_tit'>${ts_tit.value}</p>
                <p class='comp_ts_sec'>${ts_sec.value}</p>
                <div class='ts_btn_wrapp'>
                    <button class='hide_comp_ts'>Виконано</button>
                    <button class='del_comp_ts'>X</button>
                </div>
            </div>
        </div>
    `
    }
    ts_tit.value = ''
    ts_sec.value = ''
}
box_ts.addEventListener('click', function(e) {
  if (e.target.closest('.hide_comp_ts'))
  e.target.closest('.ts_content').classList.add('ts_content_remov');
  if (e.target.closest('.del_comp_ts'))
  e.target.closest('.ts_content').remove();
});