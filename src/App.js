import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './App.css';
import Board from './components/board/Board';
import Settings from './components/game/Settings'
import Failed from './components/screen/Failed'
import Success from './components/screen/Success';

import ChangeSettings from './components/game/ChangeSettings'
import { useSelector } from 'react-redux';
function App() {
  const settings = useSelector(state => state.setting);
  const board = useSelector(state => state.board);

  const checkPage = () => {
    let page = null
    if (board.fail === 1)
      page = <Failed />

    if (board.finish === 1)
      page = <Success />

    return page
  }

  const gameOn = checkPage()

  const loading = (
    <div className='loading'>
      <CircularProgress />
    </div>
  )

  const changeSettings = settings.settings ? <ChangeSettings /> : null
  return (
    <div className="App">
      {changeSettings}
      {settings.isLoading ? loading : gameOn}
      {settings.isLoading ? null : <div><Settings /><Board /> </div>}
    </div>
  );
}

export default App;
