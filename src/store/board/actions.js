import { boardTypes } from './types';

//------------------GENERAL CELL ACTIONS------------------------
export const cellClicked = (cellId) => {
    const res = cellId.split("|");
    failed();
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
    if (mat[res[0]][res[1]].value === 0) {
        try {
            if (!tempMat[row - 1][col].open) { // UP
                tempMat[row - 1][col].open = true
                if (tempMat[row - 1][col].value === 0) {
                    recCheckCell(tempMat[row - 1][col], tempMat)
                }
            }
        } catch (error) {
            //out of board
        }
        try {
            if (!tempMat[row + 1][col].open) { // DOWN
                tempMat[row + 1][col].open = true
                if (tempMat[row + 1][col].value === 0) {
                    recCheckCell(tempMat[row + 1][col], tempMat)
                }
            }
        } catch (error) {
            //out of board
        }
        try {
            if (!tempMat[row][col - 1].open) { //LEFT
                tempMat[row][col - 1].open = true
                if (tempMat[row][col - 1].value === 0) {
                    recCheckCell(tempMat[row][col - 1], tempMat)
                }
            }
        } catch (error) {
            //out of board
        }
        try {
            if (!tempMat[row][col + 1].open) { //RIGHT
                tempMat[row][col + 1].open = true
                if (tempMat[row][col + 1].value === 0) {
                    recCheckCell(tempMat[row][col + 1], tempMat)
                }
            }
        } catch (error) {
            //out of board
        }
        try {
            if (!tempMat[row - 1][col - 1].open) { //UP LEFT
                tempMat[row - 1][col - 1].open = true
                if (tempMat[row - 1][col - 1].value === 0) {
                    recCheckCell(tempMat[row - 1][col - 1], tempMat)
                }
            }
        } catch (error) {
            //out of board
        }
        try {
            if (!tempMat[row - 1][col + 1].open) { //UP RIGHT
                tempMat[row - 1][col + 1].open = true
                if (tempMat[row - 1][col + 1].value === 0) {
                    recCheckCell(tempMat[row - 1][col + 1], tempMat)
                }
            }
        } catch (error) {
            //out of board
        }
        try {
            if (!tempMat[row + 1][col + 1].open) { //DOWN RIGHT
                tempMat[row + 1][col + 1].open = true
                if (tempMat[row + 1][col + 1].value === 0) {
                    recCheckCell(tempMat[row + 1][col + 1], tempMat)
                }
            }
        } catch (error) {
            //out of board
        }
        try {
            if (!tempMat[row + 1][col - 1].open) { //DOWN LEFT
                tempMat[row + 1][col - 1].open = true
                if (tempMat[row + 1][col - 1].value === 0) {
                    recCheckCell(tempMat[row + 1][col - 1], tempMat)
                }
            }
        } catch (error) {
            //out of board
        }
    }
    else if (mat[res[0]][res[1]].value >= 15) {
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
    //lvl = easy : 20% mines , medium : 50% , hard :80%
    // size = 9x9 , 5x5 , 12x12 , 20x20
    const amountOfMines = lvl === 1 ? 0.1 * size * size : lvl === 2 ? 0.5 * size * size : 0.8 * size * size
    let matrix = [], mineLeft = amountOfMines;

    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            matrix[i][j] = { id: `${i}|${j}`, mine: false, open: false, value: 0, mark: 0 };
        }
    }

    while (mineLeft) {
        let randomLine = Math.floor(Math.random() * size), randomCol = Math.floor(Math.random() * size)
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
                console.log(error, `row: ${i} , col: ${j}`, `object: ${mat[i][j - 1]}`)
            }
        }
    }

}

//------------------GAME------------------------

export const time = () => {
    return {
        type: boardTypes.TIME,
    };
};

export const resetSettings = () => {
    return {
        type: boardTypes.RESTART_GAME,
    };
};

export const pause = (pauseFlag) => {
    const pause = pauseFlag === 1 ? 0 : 1
    return {
        type: boardTypes.PAUSE,
        payload: pause
    };
};

export const failed = () => {
    return {
        type: boardTypes.FAILED,
    };
};