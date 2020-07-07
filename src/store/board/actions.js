import { boardTypes } from './types';

//------------------GENERAL CELL ACTIONS------------------------
export const cellClicked = (cellId) => {
    const res = cellId.split("|");

    return {
        type: boardTypes.CLICKED,
        action: res
    };
};
export const cellRightClick = (cellId) => {
    const res = cellId.split("|");

    return {
        type: boardTypes.RIGHT_CLICKED,
        action: res
    }
};
export const reduceMineLeft = () => {
    return {
        type: boardTypes.REDUCE_MINE_LEFT,

    };
};
export const increaseMineLeft = () => {
    return {
        type: boardTypes.INCREASE_MINE_LEFT,

    };
};

export const markCell = () => {
    return {
        type: boardTypes.DECREASE,
    };
};

const recCheckCell = (cellId, mat) => {
    checkCell(cellId.id, mat)
}
export const checkCell = (cellId, mat) => {
    const res = cellId.split("|");
    const row = parseInt(res[0]), col = parseInt(res[1])
    let tempMat = mat;
    if (mat[res[0]][res[1]].value === 0 && mat[res[0]][res[1]].mark !== 1) {
        try {
            if (!tempMat[row - 1][col].open && tempMat[row - 1][col].mark !== 1) { // UP
                tempMat[row - 1][col].open = true
                if (tempMat[row - 1][col].value === 0) {
                    recCheckCell(tempMat[row - 1][col], tempMat)
                }
            }
        } catch (error) {
            //out of board
        }
        try {
            if (!tempMat[row + 1][col].open && tempMat[row + 1][col].mark !== 1) { // DOWN
                tempMat[row + 1][col].open = true
                if (tempMat[row + 1][col].value === 0) {
                    recCheckCell(tempMat[row + 1][col], tempMat)
                }
            }
        } catch (error) {
            //out of board
        }
        try {
            if (!tempMat[row][col - 1].open && tempMat[row][col - 1].mark !== 1) { //LEFT
                tempMat[row][col - 1].open = true
                if (tempMat[row][col - 1].value === 0) {
                    recCheckCell(tempMat[row][col - 1], tempMat)
                }
            }
        } catch (error) {
            //out of board
        }
        try {
            if (!tempMat[row][col + 1].open && tempMat[row][col + 1].mark !== 1) { //RIGHT
                tempMat[row][col + 1].open = true
                if (tempMat[row][col + 1].value === 0) {
                    recCheckCell(tempMat[row][col + 1], tempMat)
                }
            }
        } catch (error) {
            //out of board
        }
        try {
            if (!tempMat[row - 1][col - 1].open && tempMat[row - 1][col - 1].mark !== 1) { //UP LEFT
                tempMat[row - 1][col - 1].open = true
                if (tempMat[row - 1][col - 1].value === 0) {
                    recCheckCell(tempMat[row - 1][col - 1], tempMat)
                }
            }
        } catch (error) {
            //out of board
        }
        try {
            if (!tempMat[row - 1][col + 1].open && tempMat[row - 1][col + 1].mark !== 1) { //UP RIGHT
                tempMat[row - 1][col + 1].open = true
                if (tempMat[row - 1][col + 1].value === 0) {
                    recCheckCell(tempMat[row - 1][col + 1], tempMat)
                }
            }
        } catch (error) {
            //out of board
        }
        try {
            if (!tempMat[row + 1][col + 1].open && tempMat[row + 1][col + 1].mark !== 1) { //DOWN RIGHT
                tempMat[row + 1][col + 1].open = true
                if (tempMat[row + 1][col + 1].value === 0) {
                    recCheckCell(tempMat[row + 1][col + 1], tempMat)
                }
            }
        } catch (error) {
            //out of board
        }
        try {
            if (!tempMat[row + 1][col - 1].open && tempMat[row + 1][col - 1].mark !== 1) { //DOWN LEFT
                tempMat[row + 1][col - 1].open = true
                if (tempMat[row + 1][col - 1].value === 0) {
                    recCheckCell(tempMat[row + 1][col - 1], tempMat)
                }
            }
        } catch (error) {
            //out of board
        }
    }

    else if (mat[res[0]][res[1]].value >= 15 && mat[res[0]][res[1]].mark !== 1) {
        return {
            type: boardTypes.FAILED,
        };
    }

    return {
        type: boardTypes.CHECK_CELL,
        payload: tempMat
    };
};

//------------------BUILD------------------------
export const buildBoard = (size, lvl) => {
    //lvl = easy : 12% mines , medium : 20% , hard :30%
    // size = 9x9 , 5x5 , 12x12 , 20x20
    const amountOfMines = lvl === 1 ? Math.ceil(0.12 * size * size)
        : lvl === 2 ? Math.ceil(0.2 * size * size)
            : Math.ceil(0.30 * size * size)
    let matrix = [], mineLeft = amountOfMines;
    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            matrix[i][j] = { id: `${i}|${j}`, mine: false, open: false, value: 0, mark: 0 };
        }
    }
    while (!(mineLeft === 0)) {
        let randomLine = Math.ceil(Math.random() * size - 1), randomCol = Math.ceil(Math.random() * size - 1)
        if (!matrix[randomLine][randomCol].mine) { //if the cell is mine - find a new cell
            matrix[randomLine][randomCol] = { id: `${randomLine}|${randomCol}`, mine: true, open: false, value: 15, mark: 0 };
            mineLeft--
        }
    }

    checkAndSetCloseToMine(matrix, size)
    return {
        type: boardTypes.BUILD,
        action: matrix,
        amountOfMines,
    };
};

const checkAndSetCloseToMine = (mat, size) => {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            try {
                if (mat[i][j].mine) {//incase mine detect
                    if (i === 0) { // if first row
                        if (j === 0) { // top left corner
                            mat[i][j + 1].value += 1;
                            mat[i + 1][j].value += 1;
                            mat[i + 1][j + 1].value += 1;
                        }
                        else if (j === mat.length - 1) { // top right corner
                            mat[i][j - 1].value += 1
                            mat[i + 1][j].value += 1
                            mat[i + 1][j - 1].value += 1
                        }
                        else {
                            mat[i][j - 1].value += 1
                            mat[i][j + 1].value += 1
                            mat[i + 1][j].value += 1
                            mat[i + 1][j - 1].value += 1
                            mat[i + 1][j + 1].value += 1
                        }
                    }
                    else if (i === mat.length - 1) { // if last row
                        if (j === 0) { // buttom left corner
                            mat[i][j + 1].value += 1;
                            mat[i - 1][j].value += 1;
                            mat[i - 1][j + 1].value += 1;
                        }
                        else if (j === mat.length - 1) {
                            mat[i][j - 1].value += 1; // add 1 value to near by cell
                            mat[i - 1][j].value += 1;
                            mat[i - 1][j - 1].value += 1;
                        }
                        else {
                            mat[i][j - 1].value += 1;
                            mat[i][j + 1].value += 1;
                            mat[i - 1][j].value += 1;
                            mat[i - 1][j - 1].value += 1;
                            mat[i - 1][j + 1].value += 1;
                        }
                    }
                    else if (j === 0) { // left column
                        mat[i - 1][j].value += 1
                        mat[i + 1][j].value += 1
                        mat[i][j + 1].value += 1
                        mat[i - 1][j + 1].value += 1
                        mat[i + 1][j + 1].value += 1
                    }
                    else if (j === mat.length - 1) { //right column
                        mat[i - 1][j].value += 1
                        mat[i + 1][j].value += 1
                        mat[i][j - 1].value += 1
                        mat[i - 1][j - 1].value += 1
                        mat[i + 1][j - 1].value += 1
                    }// middle matrix
                    else {
                        mat[i - 1][j + 1].value += 1
                        mat[i - 1][j].value += 1
                        mat[i - 1][j - 1].value += 1
                        mat[i + 1][j + 1].value += 1
                        mat[i + 1][j].value += 1
                        mat[i + 1][j - 1].value += 1
                        mat[i][j + 1].value += 1
                        mat[i][j - 1].value += 1
                    }
                }
            } catch (error) {
                //
            }
        }
    }

}

//------------------GAME------------------------
export const failed = () => {
    return {
        type: boardTypes.FAILED,
    };
};
export const resetBoard = () => {
    return {
        type: boardTypes.RESET,
    };
};
export const finish = (mat, boardSize, amountOfMines) => {
    let notFinish = 0, amountOfOpenCells = 0, amountOfCells = boardSize * boardSize
    const intvalue = Math.ceil(amountOfMines);

    mat.map(row => {
        row.map(cell => {
            if (cell.mine) {
                if (!cell.mark == 1)
                    notFinish = 1
            }
            else if (cell.open)
                amountOfOpenCells++
        })
    })
    amountOfOpenCells = amountOfCells - amountOfOpenCells
    if (!notFinish || intvalue === amountOfOpenCells) { // user put flag on all mines OR reviled all empty cells
        return {
            type: boardTypes.FINISH,
        };
    }
    return {
        type: boardTypes.EMPTY,
    };
};

//------------------GENERAL------------------------

export const saveChange = (size, lvl) => {
    return {
        type: boardTypes.SAVE_CHANGE,
        size,
        lvl
    };
};
