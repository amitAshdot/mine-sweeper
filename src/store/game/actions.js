import { gameTypes } from './types';


//------------------GAME------------------------

export const time = () => {
    return {
        type: gameTypes.TIME,
    };
};

export const resetSettings = () => {
    return {
        type: gameTypes.RESTART_GAME,
    };
};

export const loading = () => {
    return {
        type: gameTypes.LOADING,
    };
};


export const pause = (pauseFlag) => {
    const pause = pauseFlag === 1 ? 0 : 1
    return {
        type: gameTypes.PAUSE,
        payload: pause
    };
};



export const changeSettings = (settingsFlag) => {
    const settings = settingsFlag === 1 ? 0 : 1
    return {
        type: gameTypes.SETTINGS,
        payload: settings
    };
};
