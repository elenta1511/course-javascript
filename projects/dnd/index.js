/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');

function randomNum(from, to) {
  return parseInt(from + Math.random() * to - from);
}

let dd;
let coordY = 0;
let coordX = 0;

document.addEventListener('mousemove', (e) => {
  if (dd) {
    dd.style.top = e.clientY - coordY + 'px';
    dd.style.left = e.clientX - coordX + 'px';
  }
});

export function createDiv() {
  const div = document.createElement('div');
  const min = 100;
  const max = 100;
  const color = '0xffffff';

  div.className = 'draggable-div';
  div.style.top = randomNum(0, window.innerHeight) + 'px';
  div.style.left = randomNum(0, window.innerWidth) + 'px';
  div.style.width = randomNum(min, max) + 'px';
  div.style.height = randomNum(min, max) + 'px';
  div.style.background = '#' + randomNum(0, color).toString(16);

  div.addEventListener('mousedown', (e) => {
    dd = div;
    coordY = e.offsetY;
    coordX = e.offsetX;
  });
  div.addEventListener('mouseup', () => (dd = false));

  return div;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  const div = createDiv();
  homeworkContainer.appendChild(div);
});
