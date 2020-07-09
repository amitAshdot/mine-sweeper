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
    const settings = useSelector(state => state.setting);

    const dispatch = useDispatch();

    const restartAll = () => {
        dispatch(buildBoard(board.size, board.lvl));
        dispatch(resetSettings())
        dispatch(resetBoard())


    }
    const minutes = Math.floor(settings.time / 60);
    const seconds = settings.time - minutes * 60;

    const timeText = (
        minutes === 0 ?
            <h2 className="sec-text">WOW! it took you only {seconds} seconds to finish! impresive! </h2>
            :
            <h2 className="sec-text">It took you {minutes} minutes and {seconds} seconds  to finish</h2>
    )
    return (
        <div className="success">
            <h1>Well Done!</h1>
            <h2 className="sec-text">You did it! You stayed alive!</h2>
            {timeText}

            <Button size="medium" variant="contained" color="primary" className="startOverBtn" onClick={restartAll}>
                Play Again
            </Button>
        </div>
    )
}

export default Success
