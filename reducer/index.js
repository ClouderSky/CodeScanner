
import { combineReducers } from 'redux' ;

import scanningReducer from './scanning' ;


const rootReducer = combineReducers({
    scanning : scanningReducer,
}) ;

export default rootReducer ;
