
import React, { Component } from 'react' ;

import { Grid } from 'antd-mobile' ;


const pageList = [
    {text : '历史纪录'},
] ;


export default class PageGrid extends Component {

    render () {
        return (
            <Grid data={ pageList } columnNum={ 3 } />
        ) ;
    }

} ;
