import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    buildBoard,
    cellClicked,
    cellRightClick,
    finish,
    // resetCounter,
} from '../../store/board/actions';
import {
    loading
    // resetCounter,
} from '../../store/game/actions';
import MineButton from '../buttons/MineButton';

const Board = props => {

    const board = useSelector(state => state.board);
    const settings = useSelector(state => state.setting);
    const dispatch = useDispatch();

    useEffect(() => {
        if (board.time === 0) {
            dispatch(loading());
            dispatch(buildBoard(board.size, board.lvl));
            dispatch(loading());
        }


        return () => null
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [board.lvl, board.size])

    useEffect(() => {
        if (board.amountOfMines === 0 || board.amountCellShouldBeOpen <= 1)
            dispatch(finish(board.board, board.size, board.amountOfMines));
    }, [board.amountOfMines])

    const boardTemplate = board.board.map((row, key) => {
        return (
            <div className="row" key={key}>
                {row.map((cell, key) =>
                    <div className="cell" key={key} id={cell.id}>
                        <MineButton board={board} value={cell.value} mark={cell.mark} cell={cell} clicked={() => dispatch(cellClicked(cell.id))} rightClicked={() => dispatch(cellRightClick(cell.id))} />
                    </div>
                )}
            </div>
        )
    })

    return (
        <div>
            <div className="board">
                {boardTemplate}
            </div>
        </div>

    );
};

export default Board;
