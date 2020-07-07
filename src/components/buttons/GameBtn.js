import React from 'react'
import Button from '@material-ui/core/Button';

const GameBtn = (props) => {

    return (
        <Button size="small" variant="contained" color="primary" className='settingBtn' onClick={props.onclick}>
            {props.text}
        </Button>
    )
}

export default GameBtn
