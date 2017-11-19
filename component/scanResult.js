
import React, { Component } from 'react' ;
import PropTypes from 'prop-types' ;
import { Clipboard, Linking, Text } from 'react-native' ;

import { bindActionCreators } from 'redux' ;
import { connect } from 'react-redux' ;

import { Modal, Card, Button, WingBlank, WhiteSpace, Toast } from 'antd-mobile' ;

import { closeResult } from '../reducer/scanning' ;


const codeTypes = {
    QR_CODE : '二维码',
} ;


class ScanResult extends Component {

    handleClose = e => {
        const { closeResult } = this.props ;
        closeResult && closeResult() ;
    } ;

    componentWillMount () {
        setTimeout(this.handleClose, 3000) ;
    }

    async handleCopyClipboard (data) {
        try {
            await Clipboard.setString(data) ;

            const content = await Clipboard.getString() ;
            if ( content == data ) {
                Toast.info('已复制到剪贴板', 3) ;
            }
        } catch (err) {
            Toast.info('复制到剪贴板失败', 3) ;
            console.log('copy to Clipboard failed :', err) ;
        }
    }

    handleBrowserOpen (data) {
        const url = /^http/.test(data) ? data : ('http://' + data) ;
        Linking.openURL(url) ;
    }

    render () {
        const {Header, Body} = Card ;

        const {status, result:{type, data}} = this.props ;

        return (
            <Modal popup visible={ 'result' == status }
                maskClosable={ false } animationType="slide-up">
                <Card full>
                    <Header title={ codeTypes[type] || '未知类型' } />
                    <Body>
                        <WingBlank>
                            <Text>{ data }</Text>
                            <WhiteSpace />
                            <Button onClick={ e => this.handleCopyClipboard(data) }>
                                复制到剪贴板
                            </Button>
                            <WhiteSpace />
                            <Button onClick={ e => this.handleBrowserOpen(data) }>
                                使用默认浏览器打开
                            </Button>
                            <WhiteSpace />
                            <Button onClick={ this.handleClose }>关闭</Button>
                        </WingBlank>
                    </Body>
                </Card>
            </Modal>
        ) ;
    }

} ;

export default connect(
    ({scanning:{status, result}}) => ({status, result}),
    dispatch => bindActionCreators({
        closeResult,
    }, dispatch)
)(ScanResult)
