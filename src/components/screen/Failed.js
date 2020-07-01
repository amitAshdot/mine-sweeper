import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
    time,
    loading,
    pause,
    resetSettings,
} from '../../store/game/actions';
import {
    buildBoard, failed
} from '../../store/board/actions';
const Failed = () => {
    const settings = useSelector(state => state.setting);
    const board = useSelector(state => state.board);
    const dispatch = useDispatch();

    const restartAll = () => {
        dispatch(buildBoard(settings.size, settings.lvl));
        dispatch(resetSettings())
    }
    return (
        <div className="failed">
            <h2>YOU SUCK... AND DEAD!</h2>
            <h3>game over! start over?</h3>
            <button className="startOverBtn" onClick={restartAll}>Play Again</button>
        </div>
    )
}

export default Failed
