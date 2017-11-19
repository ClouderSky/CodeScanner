
import { takeLatest, takeEvery, all } from 'redux-saga/effects' ;

import { STARTUP } from '../reducer' ;

import { startup } from './startup' ;


export default function* rootSata () {
    yield all([
        takeLatest(STARTUP, startup),
    ]) ;
} ;
