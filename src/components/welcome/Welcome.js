import React from 'react'
import image from '../../images/transparent.png'; // with import
import background from '../../images/rsz_ogmodh0.png'
import Button from '@material-ui/core/Button';

const Welcome = (props) => {
    return (
        <div className="App" style={{ width: '100vw', height: '100vh', backgroundImage: `src=${background}` }}>
            <h1 className="welcome-title">Do you have what it takes to clean all the mines and stay alive? </h1>
            <img src={image} alt="army mine sweepers" className="welcome-img" />
            <Button size="medium" variant="contained" color="primary" className='settingBtn' onClick={props.close}>
                IM READY FOR SOME ACTION
            </Button>
            <a href='https://www.freepik.com/free-photos-vectors/technology'>Technology vector created by macrovector - www.freepik.com</a>

        </div>
    )
}

export default Welcome
