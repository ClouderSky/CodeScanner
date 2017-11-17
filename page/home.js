
import React, { Component } from 'react' ;
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native' ;

import { bindActionCreators } from 'redux' ;
import { connect } from 'react-redux' ;

import { appendResult } from '../reducer/scanning' ;

import Scanner from '../component/scanner' ;
import PageGrid from '../component/pageGrid' ;
import ScanResult from '../component/scanResult' ;


class Home extends Component<{}> {

    handleCodeRead = (type, data) => {
        if ( ['QR_CODE'].includes(type) ) {
            const {appendResult} = this.props ;
            appendResult(type, data) ;
        }
    } ;

    render () {
        return (
            <View style={styles.container}>
                <Scanner onCodeRead={ this.handleCodeRead } />
                <ScanResult />
            </View>
        ) ;
    }
} ;

export default connect(
    state => ({}),
    dispatch => bindActionCreators({
        appendResult,
    }, dispatch)
)(Home) ;


const styles = StyleSheet.create({
    container : {
        flex            : 1,
        justifyContent  : 'flex-start',
        alignItems      : 'center',
        backgroundColor : '#F5FCFF',
    },
}) ;
