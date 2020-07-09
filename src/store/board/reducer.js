import { boardTypes } from './types';

const initialState = {
    board: [],
    amountOfMines: 5, // higher number than 0 for initial
    amountCellShouldBeOpen: 78,
    lvl: 1,
    size: 9,
    fail: 0,
    time: 0,
    pause: 0,
    finish: 0,
    settings: 0,
    flagOnly: 0
};

const getCell = (state, row, col) => {
    let cell = state.board[row].filter(obj => {
        return obj.id === `${row}|${col}`
    })
    return cell
}
const boardReducer = (state = initialState, action) => {

    switch (action.type) {
        //------------------BUILD------------------------
        case boardTypes.BUILD:
            return {
                ...state,
                board: action.action,
                amountOfMines: action.amountOfMines,
                amountCellShouldBeOpen: action.amountOfCellToBeOpen,
                fail: 0
            };

        //------------------GENERAL ACTION------------------------

        case boardTypes.CLICKED: // LEFT CLICK 
            let tempBoard = state.board
            const row = action.action[0]
            const collumn = action.action[1]
            let tempCell = getCell(state, action.action[0], action.action[1])// filter and get the specific cell
            if (tempCell[0].mark !== 1) { // if the cell is flag - dont change anything
                tempCell[0].open = true
                tempBoard[row][collumn] = { ...tempBoard[row][collumn], open: true }
                const newAmountOpen = state.amountCellShouldBeOpen - 1
                return { ...state, board: tempBoard, amountCellShouldBeOpen: newAmountOpen };
            }
            else
                return { ...state };

        case boardTypes.RIGHT_CLICKED: // RIGHT CLICK
            let tempDoubleBoard = state.board
            const rowRIGHT = action.action[0]
            const collumnRIGHT = action.action[1]
            let tempCellRIGHT = getCell(state, rowRIGHT, collumnRIGHT)
            if (!tempCellRIGHT[0].open) {
                tempCellRIGHT[0].mark += 1; // 0 = null, 1 = flag, 2 = question mark
                if (tempCellRIGHT[0].mark > 2)
                    tempCellRIGHT[0].mark = 0;

                tempDoubleBoard[rowRIGHT][collumnRIGHT] = { ...tempDoubleBoard[rowRIGHT][collumnRIGHT], mark: tempCellRIGHT[0].mark }
                return { ...state, board: tempDoubleBoard };
            }
            break;

        case boardTypes.CHECK_CELL: //get new matrix and update state
            return { ...state, board: action.payload }

        case boardTypes.REDUCE_MINE_LEFT: // decrease amount of mine left in the game
            return { ...state, amountOfMines: state.amountOfMines - 1 }

        case boardTypes.INCREASE_MINE_LEFT:// increase amount of mine left in the game
            return { ...state, amountOfMines: state.amountOfMines + 1 }

        case boardTypes.FLAG_TOGGLE:// toggle flag actions
            debugger
            return { ...state, flagOnly: action.flag, board: action.tempMat }

        //------------------GAME------------------------
        case boardTypes.SAVE_CHANGE://change game settings
            return { ...state, size: action.size, lvl: action.lvl }

        case boardTypes.FAILED: // game end.
            return { ...state, board: action.tempMat, pause: 1, fail: 1 }

        case boardTypes.FINISH: // game end.
            const finished = 1
            return { ...state, finish: finished, pause: 1 }

        case boardTypes.RESET: // game end.
            return { ...state, finish: 0, pause: 0 }
        default:
            return { ...state };
    }

};

export default boardReducer;
