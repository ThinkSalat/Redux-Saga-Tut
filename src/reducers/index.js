import loadingReducer from './loadingReducer'
import imagesReducer from './imagesReducer'
import errorReducer from './errorReducer'

import {
    combinedReducers
} from 'redux';

const rootReducer = combinedReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorReducer,
});

export default rootReducer
