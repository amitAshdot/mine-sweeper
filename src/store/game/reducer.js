import { gameTypes } from './types';

const initialState = {
    time: 0,
    pause: 0,
    restart: 0,
    success: 0,
    isLoading: 0,
    settings: 0,
};

const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        //------------------FLAGS------------------------
        case gameTypes.LOADING:
            const isLoading = !state.isLoading
            return { ...state, isLoading: isLoading }
        //------------------GAME------------------------

        case gameTypes.TIME:
            const newTime = state.time + 1
            return {
                ...state,
                time: newTime
            }

        case gameTypes.RESTART_GAME:
            return {
                ...state,
                time: 0,
                pause: 0,
                restart: 0,
                success: 0,
                isLoading: 0,
            }

        case gameTypes.PAUSE:
            const pause = action.payload
            return {
                ...state,
                pause: pause
            }

        case gameTypes.SETTINGS:
            const settings = action.payload
            return {
                ...state,
                settings: settings
            }



        default:
            return { ...state };
    }
};

export default boardReducer;