import React from 'react'
import { useDispatch } from 'react-redux';
import {
    cellClicked,
    cellRightClick,
    checkCell,
    reduceMineLeft,
    increaseMineLeft,
} from '../../store/board/actions';
const MineButton = (props) => {
    const dispatch = useDispatch();
    const checkBtn = () => {
        if (!props.cell.open) {
            if (props.mark === 1) {
                return <i className="fa fa-flag" aria-hidden="true"></i>
            }
            else if (props.mark === 2)
                return <i className="fa fa-question" aria-hidden="true"></i>
            else
                return null

        }
        else {
            if (props.cell.value >= 15)
                return <i className="fa fa-bomb" aria-hidden="true"></i>;
            else if (props.cell.value === 0) {
                return null
            }
            else
                return props.cell.value
        }

    }

    const value = checkBtn()
    const style = {
        color: props.cell.value >= 15 && props.cell.open ? 'black' : props.cell.value === 1 && props.cell.open ? '#047933' : props.cell.value === 2 && props.cell.open ? '#0c0398' : props.cell.value === 3 && props.cell.open ? 'red' : !props.cell.open && props.cell.mark === 1 ? '#e50808' : !props.cell.open && props.cell.mark === 2 ? '#dbce23' : 'black',
        backgroundColor: props.cell.mine && props.cell.open ? 'red' : props.cell.open ? "#d1c8ffc9" : (!props.cell.open && props.cell.mark === 1) || props.cell.mark === 2 ? '#484362' : '#998fd0',
    }



    const mouseDown = (e) => {
        e.preventDefault();

        e = e || window.event;
        switch (window.event.which) {
            case 1: dispatch(cellClicked(props.cell.id));
                dispatch(checkCell(props.cell.id, props.board.board));
                break;

            case 3: dispatch(cellRightClick(props.cell.id));
                if (props.cell.mark === 1)
                    dispatch(reduceMineLeft());
                else if (props.cell.mark === 2) {
                    dispatch(increaseMineLeft());
                }
                break;
            default:
                return -1
        }
    }

    return (

        <button variant="contained" onMouseDown={mouseDown} disabled={props.cell.open} style={style}>{value}</button>

    )
}

export default MineButton
