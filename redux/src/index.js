import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';
import countReducer from './store/reducer/counter';
import resultReducer from './store/reducer/results';
const rootReducer = combineReducers({
    ctr: countReducer,
    res: resultReducer
})
const store = createStore(rootReducer);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
