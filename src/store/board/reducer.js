import { boardTypes } from './types';

const initialState = {
    board: [],
    amountOfMines: 5, // higher number than 0 for initial
    lvl: 1,
    size: 9,
    fail: 0,
    time: 0,
    pause: 0,
    finish: 0,
    settings: 0,
};

const boardReducer = (state = initialState, action) => {

    switch (action.type) {
        //------------------BUILD------------------------
        case boardTypes.BUILD:
            return {
                ...state,
                board: action.action,
                amountOfMines: action.amountOfMines,
                fail: 0
            };

        //------------------GENERAL ACTION------------------------

        case boardTypes.CLICKED: // when player click LEFT CLICK on cell
            let tempBoard = state.board
            const row = action.action[0]
            const collumn = action.action[1]
            let tempCell = state.board[row].filter(obj => { // filter and get the specific cell
                return obj.id === `${row}|${collumn}`
            })

            if (tempCell[0].mark !== 1) { // if the call is flag - dont change anything
                tempCell[0].open = true
                tempBoard[row][collumn] = { ...tempBoard[row][collumn], open: true }
                const newAmountOpen = state.amountCellShouldBeOpen - 1
                return { ...state, board: tempBoard, amountCellShouldBeOpen: newAmountOpen };
            }
            else
                return { ...state };
        case boardTypes.RIGHT_CLICKED: // when player click RIGHT CLICK on cell
            let tempDoubleBoard = state.board
            const rowRIGHT = action.action[0]
            const collumnRIGHT = action.action[1]
            let tempCellRIGHT = state.board[rowRIGHT].filter(obj => {
                return obj.id === `${rowRIGHT}|${collumnRIGHT}`
            })
            tempCellRIGHT[0].mark += 1; // 0 = null, 1 = flag, 2 = question mark
            if (tempCellRIGHT[0].mark > 2)
                tempCellRIGHT[0].mark = 0;

            tempDoubleBoard[rowRIGHT][collumnRIGHT] = { ...tempDoubleBoard[rowRIGHT][collumnRIGHT], mark: tempCellRIGHT[0].mark }
            return { ...state, board: tempDoubleBoard };

        case boardTypes.CHECK_CELL: //get new matrix and update state
            return { ...state, board: action.payload }

        case boardTypes.REDUCE_MINE_LEFT: // decrease amount of mine left in the game
            return { ...state, amountOfMines: state.amountOfMines - 1 }

        case boardTypes.INCREASE_MINE_LEFT:// increase amount of mine left in the game
            return { ...state, amountOfMines: state.amountOfMines + 1 }

        case boardTypes.SAVE_CHANGE:
            return {
                ...state,
                size: action.size,
                lvl: action.lvl
            }
        //------------------GAME------------------------
        case boardTypes.FAILED: // game end.
            const failed = 1
            return { ...state, fail: failed }

        case boardTypes.FINISH: // game end.
            const finished = 1
            return { ...state, finish: finished }

        case boardTypes.RESET: // game end.
            return { ...state, finish: 0 }
        default:
            return { ...state };
    }

};

export default boardReducer;
