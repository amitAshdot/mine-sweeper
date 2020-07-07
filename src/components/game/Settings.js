import React, { useEffect, useState } from 'react'
import GamepadButton from '../buttons/GameBtn'
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

import {
    changeSettings,
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
    const [state, setstate] = useState({ close: 1 })
    useEffect(() => {
        let interval = null;
        if (!settings.pause)
            interval = setInterval(() => {
                dispatch(time());
            }, 1000);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [settings.pause])

    const restartAll = () => {
        dispatch(buildBoard(board.size, board.lvl));
        dispatch(resetSettings())
    }
    const settingsAndPause = () => {
        dispatch(pause(settings.pause));
    }
    const toggle = (
        settings.pause === 0 ?
            <div className='settings-toggle'>
                <Button size="medium" variant="contained" color="primary" className='settingBtn' onClick={settingsAndPause}>
                    Settings
            </Button>
            </div>
            :
            <div className="settings-btns">
                <GamepadButton text={'Start over'} onclick={() => restartAll()} />
                <GamepadButton text={'Change level'} onclick={() => dispatch(changeSettings(settings.settings))} />
                <Button size="small" variant="contained" color="primary" className='settingBtn' onClick={() => { dispatch(pause(settings.pause)); }}>
                    close
                </Button>
            </div >
    )
    return (
        <div>
            <div className="stats" >
                <div className="stats-time">
                    {settings.time}
                </div>

                <div className="stats-minesLeft">
                    {Math.ceil(board.amountOfMines)}
                </div>
            </div>
            {toggle}
        </div>
    )
}

export default Settings
