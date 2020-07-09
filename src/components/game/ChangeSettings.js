import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Slider from '@material-ui/core/Slider';
import GamepadButton from '../buttons/GameBtn'
import { saveChange, resetBoard } from '../../store/board/actions';
import { pause, changeSettings, resetSettings } from '../../store/game/actions';

import junior from '../../images/Tbadge-junior.png'
import senior from '../../images/Tbadge-senior.png'
import expert from '../../images/Tbadge-expert.png'

const ChangeSettings = () => {
    const settings = useSelector(state => state.setting);
    const board = useSelector(state => state.board);
    const dispatch = useDispatch();

    const [state, setstate] = useState({ lvl: board.lvl, size: board.size })

    const saveChanges = () => {
        dispatch(saveChange(state.size, state.lvl))
        dispatch(pause(settings.pause))
        dispatch(changeSettings(settings.settings))
        dispatch(resetSettings())
        dispatch(resetBoard())
    }
    const valuetext = (value) => { return value === 1 ? "Junior" : value === 2 ? "Senior" : "Expert"; }

    const badge = () => { return state.lvl === 1 ? junior : state.lvl === 2 ? senior : expert; }

    const explanation = () => {
        const lvlName = state.lvl === 1 ? "Junior" : state.lvl === 2 ? "Senior" : "Expert";
        const precentage = state.lvl === 1 ? 12 : state.lvl === 2 ? 20 : 30;
        const noOfCells = state.size * state.size

        return (
            <div className="explanation">
                <h2 className="explanation-details">difficulty - {lvlName}: {precentage}% out of {noOfCells} cells (Round up)</h2>
                <h3 className="explanation-summary">total: {Math.ceil((precentage * state.size * state.size) / 100)} mines</h3>
            </div>
        )
    }

    const explanationHTML = explanation()
    return (
        <div className="settings">
            <div className="settingsItem">
                <h3 className="explanation-summary" id="top">size: {state.size}</h3>
                <Slider
                    defaultValue={board.size}
                    step={1}
                    marks
                    getAriaValueText={valuetext}

                    min={5}
                    max={13}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => { setstate({ ...state, size: newValue }) }}
                />
            </div>
            <div className="settingsItem">
                <div className="settingsItem-rank">
                    <h3 className="explanation-summary">difficulty: {state.lvl === 1 ? "Junior" : state.lvl === 2 ? "Senior" : "Expert"}</h3>
                    <img className="rank" src={badge()} alt="army mine sweepers" />
                </div>

                <Slider
                    defaultValue={board.lvl}
                    step={1}
                    marks
                    min={1}
                    max={3}
                    // valueLabelDisplay="auto"
                    onChange={(event, newValue) => { setstate({ ...state, lvl: newValue }) }}
                />

                {explanationHTML}
            </div>
            <div className="saveChanges-btn">
                <GamepadButton text={'Save'} onclick={saveChanges} />
            </div>
        </div>
    )
}

export default ChangeSettings
