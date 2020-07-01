import React, { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './App.css';
import Board from './components/board/Board';
import Settings from './components/game/Settings'
import Failed from './components/screen/Failed'

import { useSelector, useDispatch } from 'react-redux';
import {
  time,
  pause,
  resetSettings,
} from './store/game/actions';
function App() {
  const settings = useSelector(state => state.setting);
  const board = useSelector(state => state.board);

  const checkPage = () => {
    let page = null
    if (settings.pause === 1)
      page = <div><Settings />PAUSE </div>

    if (settings.pause === 0)
      page = <div><Settings /> <Board /> </div>

    if (settings.success === 1)
      page = <div>success </div>

    if (board.fail === 1)
      page = <Failed />

    return page
  }

  const gameOn = checkPage()

  const loading = (
    <div className='loading'>
      <CircularProgress />
    </div>
  )
  return (
    <div className="App">
      {settings.isLoading ? loading : gameOn}
    </div>
  );
}

export default App;
