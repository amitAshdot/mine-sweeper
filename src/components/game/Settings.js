import React, { useEffect } from 'react'
import GamepadButton from '../buttons/GameBtn'
import { useSelector, useDispatch } from 'react-redux';
import {
    time,
    loading,
    pause,
    resetSettings,
} from '../../store/game/actions';
import {
    buildBoard
} from '../../store/board/actions';
const Settings = () => {
    const settings = useSelector(state => state.setting);
    const board = useSelector(state => state.board);

    const dispatch = useDispatch();

    useEffect(() => {
        let interval = null;
        if (!settings.pause)
            // interval = setInterval(() => {
            //     dispatch(time());
            // }, 1000);
            return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [settings.pause])

    const restartAll = () => {
        dispatch(buildBoard(settings.size, settings.lvl));
        dispatch(resetSettings())
    }
    return (
        <div>
            <div className="stats" >
                <div className="stats-time">
                    {settings.time}

                </div>

                <div className="stats-minesLeft">
                    {board.amountOfMines}
                </div>
            </div>
            <GamepadButton text={'Pause'} onclick={() => dispatch(pause(settings.pause))} />
            <GamepadButton text={'start over'} onclick={() => restartAll()} />
            <GamepadButton text={'change level'} />
        </div>
    )
}

export default Settings
