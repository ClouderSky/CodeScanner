
import { combineReducers } from 'redux' ;
import { createAction } from 'redux-actions' ;

import scanningReducer from './scanning' ;


const rootReducer = combineReducers({
    scanning : scanningReducer,
}) ;

export default rootReducer ;


export const STARTUP = 'STARTUP' ;
export const startup = createAction(STARTUP) ;
