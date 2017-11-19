
import { put } from 'redux-saga/effects' ;

import { closeResult } from '../reducer/scanning' ;


export function* startup (action) {
    try {
        yield put(closeResult()) ;
    } catch (err) {
        console.error('startup failed :', err) ;
    }
} ;
