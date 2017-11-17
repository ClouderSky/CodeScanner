/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react' ;
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native' ;
import { Provider } from 'react-redux' ;

import rootSaga from './saga' ;
import rootReducer from './reducer' ;
import createStore from './store' ;

import Home from './page/home' ;


const store = createStore(rootReducer, rootSaga) ;

export default class App extends Component<{}> {

    render () {
        return (
            <Provider store={ store }>
                <Home />
            </Provider>
        ) ;
    }
}
