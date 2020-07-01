import React from 'react'

const GameBtn = (props) => {

    return (
        <button className="settingBtn" onClick={props.onclick} >{props.text}</button>
    )
}

export default GameBtn
