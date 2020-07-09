import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './App.css';
import Board from './components/board/Board';
import Settings from './components/game/Settings'
import Success from './components/screen/Success';
import Welcome from './components/welcome/Welcome';

import background from './images/rsz_ogmodh0.png'

import ChangeSettings from './components/game/ChangeSettings'
import { useSelector } from 'react-redux';
function App() {
  const settings = useSelector(state => state.setting);
  const board = useSelector(state => state.board);

  const checkPage = () => {
    let page = null
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

  const [showImage, setShowImage] = useState(true)

  useEffect(() => {
    // setTimeout(() => {
    //   setShowImage(false)
    // }, 3000);
    return () => {
    }
  }, [])

  const appView =
    (
      showImage === true ?
        <Welcome close={setShowImage} />
        :
        <div className="App" style={{ backgroundImage: `url(${background})`, overflow: 'hidden' }}>
          {changeSettings}
          {settings.isLoading ? loading : gameOn}
          {settings.isLoading ? null : <div className="game"><Settings /><Board /> </div>}
          <a href='https://www.freepik.com/free-photos-vectors/background'>Background photo created by jannoon028 - www.freepik.com</a>
        </div>
    )
  return (
    appView
  );
}

export default App;
