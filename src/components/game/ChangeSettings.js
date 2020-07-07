import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Slider from '@material-ui/core/Slider';
import GamepadButton from '../buttons/GameBtn'
import {
    buildBoard,
    cellClicked,
    cellRightClick,
    finish,
    saveChange,
    // resetCounter,
} from '../../store/board/actions';
import {
    pause,
    changeSettings
    // resetCounter,
} from '../../store/game/actions';
const ChangeSettings = () => {
    const settings = useSelector(state => state.setting);
    const board = useSelector(state => state.board);
    const dispatch = useDispatch();

    const [state, setstate] = useState({ lvl: board.lvl, size: board.size })

    const saveChanges = () => {
        dispatch(saveChange(state.size, state.lvl))
        dispatch(pause(settings.pause))
        dispatch(changeSettings(settings.settings))

    }
    return (
        <div className="settings">
            <div className="settingsItem">
                size: {state.size}
                <Slider
                    defaultValue={board.size}
                    step={1}
                    marks
                    min={5}
                    max={20}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => { setstate({ ...state, size: newValue }) }}
                />
            </div>
            <div className="settingsItem">
                lvl: {state.lvl}
                <Slider
                    defaultValue={board.lvl}
                    step={1}
                    marks
                    min={1}
                    max={3}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => { setstate({ ...state, lvl: newValue }) }}
                />
            </div>
            <div className="saveChanges-btn">
                <GamepadButton text={'Save'} onclick={saveChanges} />
            </div>
        </div>
    )
}

export default ChangeSettings
