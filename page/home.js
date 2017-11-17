
import React, { Component } from 'react' ;
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native' ;

import Scanner from '../component/scanner' ;
import PageGrid from '../component/pageGrid' ;


export default class Home extends Component<{}> {

    render () {
        return (
            <View style={styles.container}>
                <Scanner />
                <PageGrid />
            </View>
        ) ;
    }
}

const styles = StyleSheet.create({
    container : {
        flex            : 1,
        justifyContent  : 'flex-start',
        alignItems      : 'center',
        backgroundColor : '#F5FCFF',
    },
}) ;
