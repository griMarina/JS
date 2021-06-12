function createBoard() {
    const board = document.querySelector('.board');
    let n = 0; // нумерация строк
    const letList = 'ABCDEFGH'.split('');
    for (let j = 0; j < 9; j++) { // цикл создания строк с классом row
        let div = document.createElement('div');
        let row = board.appendChild(div);
        row.classList.add('row');
        for (let i = 0; i < 9; i++) { // цикл создания столбцов с классом  col
            div = document.createElement('div');
            let col = row.appendChild(div);
            col.classList.add('col');
            let colPrev = col.previousElementSibling; // предыдущая ячейка
            // заполняем ячейки 
            if (i === 0 && j === 0) {
                col.classList.add('col-num'); // нулевая пустая ячейка с классом col-num
            }
            else if (i >= 1 && j === 0) { // нулевая строка с нумерацией буквами c классом row-let
                col.classList.add('row-let');
                col.textContent = letList[n++];
            }
            else if (i === 0 && j > 0) { // нулевой стоблец с нумерацией числами с классом col-num
                col.classList.add('col-num');
                col.textContent = j;
            }
            // в строках с четным номером, если у предыдущей ячейки нет класса black, добавляем класс black
            else if (colPrev && (j % 2) === 0) {
                colPrev.classList.contains('black') ? 0 : col.classList.add('black');
            }
            // начиная со второго столбца в строках с нечетным номером, если у предыдущей ячейки нет класса black, добавляем класс black
            else if (i > 1 && colPrev && (j % 2) !== 0) {
                colPrev.classList.contains('black') ? 0 : col.classList.add('black');
            }
        }
    }
}

createBoard();