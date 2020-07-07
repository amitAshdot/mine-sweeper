import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

import {
    resetSettings,
} from '../../store/game/actions';
import {
    buildBoard, resetBoard
} from '../../store/board/actions';
const Success = () => {
    const board = useSelector(state => state.board);
    const dispatch = useDispatch();

    const restartAll = () => {
        dispatch(buildBoard(board.size, board.lvl));
        dispatch(resetSettings())
        dispatch(resetBoard())


    }
    return (
        <div className="success">
            <h1>you did it!! you stayed alive!</h1>
            <Button size="medium" variant="contained" color="primary" className="startOverBtn" onClick={restartAll}>
                Play Again
            </Button>
        </div>
    )
}

export default Success
