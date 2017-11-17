
import { createAction, handleActions } from 'redux-actions' ;


export const APPEND_RESULT = 'APPEND_RESULT' ;
export const CLOSE_RESULT  = 'CLOSE_RESULT' ;

// 新添扫描结果
export const appendResult = createAction(
    APPEND_RESULT, (type, data) => ({type, data})) ;

// 关闭结果展示
export const closeResult = createAction(CLOSE_RESULT) ;


export const initState = {
    status  : 'scanning',
    result  : {type : '', data : ''},
    history : [],
} ;

export default handleActions({
    [APPEND_RESULT] : (state, {payload:{type, data}}) => {
        // 非扫描状态不接受新结果
        if ( 'scanning' != state.status ) { return state ; }

        return Object.assign({}, state, {
            status : 'result',     // 切换为结果显示状态
            result : {type, data}, // 设置当前结果
            // 添加扫描结果记录
            history : [{type, data}, ...state.history],
        }) ;
    },

    [CLOSE_RESULT] : (state, action) => Object.assign({}, state, {
        status : initState.status, result : initState.result,
    }),
}, initState) ;
