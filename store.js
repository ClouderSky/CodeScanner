
import { createStore, applyMiddleware, compose } from 'redux' ;
import { persistStore, persistReducer } from 'redux-persist' ;
import storage from 'redux-persist/es/storage' ;
import { createLogger } from 'redux-logger' ;
import createSagaMiddleware from 'redux-saga' ;

import { startup } from './reducer' ;


export default function (rootReducer, rootSaga) {
    // 创建saga中间件
    const sagaMiddleware = createSagaMiddleware() ;
    // saga中间件产生的不必打印日志的事件类型
    const SAGA_LOGGING_BLACKLIST =
        ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED'] ;

    // 创建logger中间件
    const loggerMiddleware = createLogger({
        predicate : (getState, {type}) => !SAGA_LOGGING_BLACKLIST.includes(type),
    }) ;

    // 根据运行环境创建中间件列表
    // const middleware = __DEV__ ?
    //     [sagaMiddleware, loggerMiddleware] :
    //     [sagaMiddleware] ;
    const middleware = [sagaMiddleware] ;

    // 使用persist包装rootReducer
    const reducer = persistReducer({storage, key : 'root'}, rootReducer) ;

    // 创建store并从persist中提取数据
    const store = createStore(reducer, applyMiddleware(...middleware)) ;
    persistStore(store, {}, () => store.dispatch(startup())) ;

    // 运行saga
    sagaMiddleware.run(rootSaga) ;

    return store ;
} ;
