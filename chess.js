'use strict'

function createChessBoard() {
    const board = document.querySelector('.board');
    const letList = 'ABCDEFGH'.split('');
    for (let j = 0; j < 10; j++) { // цикл создания строк с классом row
        let div = document.createElement('div');
        let row = board.appendChild(div);
        row.classList.add('row');
        let n = 0; // нумерация строк
        for (let i = 0; i < 10; i++) { // цикл создания столбцов с классом  col
            div = document.createElement('div');
            let col = row.appendChild(div);
            col.classList.add('col');
            // заполняем ячейки 
            if ((i === 0 && j === 0) || (i === 0 && j === 9)) {
                col.classList.add('col-num'); // пустые ячейки с классом col-num
            }
            else if ((i >= 1 && j === 0) || (i >= 1 && j === 9)) { // нулевая и последняя строки с нумерацией буквами c классом row-let
                col.classList.add('row-let');
                col.textContent = letList[n++];
            }
            else if ((i === 0 && j < 9) || (i === 9 && j < 9)) { // нулевой и последний столбцы с нумерацией числами с классом col-num
                col.classList.add('col-num');
                col.textContent = j;
            }
            else if ((i % 2) !== 0 && (j % 2) === 0) { // в строках с четным номером, у стоблцов с нечетным номером добавляем класс black  
                col.classList.add('black');
            }
            else if ((i % 2) === 0 && (j % 2) !== 0) { // в строках с нечетным номером, у стоблцов с четным номером добавляем класс black
                col.classList.add('black');
            }
        }
    }
}

createChessBoard();