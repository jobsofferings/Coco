import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';

// 增强函数 一步方法，执行两个函数
const composeEnhancers = compose;

// 中间件 
const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);

export default store;
