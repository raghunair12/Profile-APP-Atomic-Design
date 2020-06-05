import React from 'react';
import ReactDOM from 'react-dom';
import { Router  } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'react-router-redux';
import { createStore,applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import professionalInfoReducer from './store/reducers/professionalInfoReducer/professionalInfoReducer';
import personalInfoReducer from './store/reducers/personalInfoReducer/personalInfoReducer';
import FetchAllDetailsReducer from './store/reducers/FetchAllDetailsReducer/FetchAllDetailsReducer';
import {watchStoreDetails,watchFetchDetails} from './store/sagas/index';

const composeEnhancers = process.env.NODE_ENV==='development'? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const history = createBrowserHistory();

const rootReducer = combineReducers({
	prof: professionalInfoReducer,
    pers: personalInfoReducer,
    all: FetchAllDetailsReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,composeEnhancers(
		applyMiddleware(thunk,sagaMiddleware,routerMiddleware(history))
    ));
    
sagaMiddleware.run(watchStoreDetails);
sagaMiddleware.run(watchFetchDetails);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} >
            <App />
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
