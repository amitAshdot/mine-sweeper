import { boardTypes } from './types';

const initialState = {
    board: [],
    amountOfMines: 0,
    lvl: 1,
    size: 20,
    fail: 0,
    // time: 0,
    // pause: 1,
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
            debugger
            if (tempCell[0].mark !== 1) { // if the call is flag - dont change anything
                tempCell[0].open = true
                tempBoard[row][collumn] = { ...tempBoard[row][collumn], open: true }

                return { ...state, board: tempBoard };
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
            tempCellRIGHT[0].mark += 1; // 0 = null , 1 = flag , 2 = question mark
            if (tempCellRIGHT[0].mark > 2)
                tempCellRIGHT[0].mark = 0;

            tempDoubleBoard[rowRIGHT][collumnRIGHT] = { ...tempDoubleBoard[rowRIGHT][collumnRIGHT], mark: tempCellRIGHT[0].mark }

            return { ...state, board: tempDoubleBoard };

        case boardTypes.CHECK_CELL:
            return { ...state, board: action.payload }

        case boardTypes.REDUCE_MINE_LEFT:
            return { ...state, amountOfMines: state.amountOfMines - 1 }

        case boardTypes.INCREASE_MINE_LEFT:
            return { ...state, amountOfMines: state.amountOfMines + 1 }


        //------------------GAME------------------------

        case boardTypes.TIME:
            const newTime = state.time + 1
            return { ...state, time: newTime }

        case boardTypes.RESTART_GAME:
            const reTime = 0
            return { ...state, time: reTime }

        case boardTypes.PAUSE:
            const pause = action.payload
            return { ...state, pause: pause }

        case boardTypes.FAILED:
            const failed = 1
            debugger
            return { ...state, fail: failed }



        default:
            return { ...state };
    }

};

export default boardReducer;
