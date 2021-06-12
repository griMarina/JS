const board = document.querySelector('.board');

function createLetRow() {
    let div = document.createElement('div');
    let row = board.appendChild(div)
    row.classList.add('row');
    let col;
    let n = 0;
    const letList = 'ABCDEFGH'.split('');
    for (let i = 0; i < 9; i++) {
        div = document.createElement('div');
        col = row.appendChild(div);
        col.classList.add('col');
        if (i < 1) {
            col.classList.add('col-num');
        } else {
            col.classList.add('row-let');
            col.textContent = letList[n++];
        }
    }
}

function createBoard() {
    createLetRow();
    for (let j = 1; j < 9; j++) {
        let div = document.createElement('div');
        let row = board.appendChild(div);
        row.classList.add('row');
        let col;
        let colNext;
        let n = 0;
        i: for (let i = 0; i < 9; i++) {
            div = document.createElement('div');
            col = row.appendChild(div);
            col.classList.add('col');
            colNext = col.previousElementSibling;
            if (i < 1) {
                col.classList.add('col-num');
                col.textContent = j;
            } else if (colNext && j % 2 == 0) {
                colNext.classList.contains('black') ? col.classList.add('white') : col.classList.add('black');
            }
            else if (i > 1 && colNext && j % 2 !== 0) {
                colNext.classList.contains('black') ? col.classList.add('white') : col.classList.add('black');
            }
            else {
                continue i;
            }
        }
    }
}

createBoard();