import { put } from 'redux-saga/effects';

import * as actions from '../actions/index';
import axios from '../../axios-base';

export function* fetchAllDetailsSaga (){
    try{
        const response = yield axios.get('/');
        yield put(actions.fetchedDetails(response.data.details));
    }catch(err){
        console.log(err);
    }
}

export function* deleteDetailSaga (action){
    try{
        yield axios.delete('/'+action.detailId);
        // yield put(actions.updateState(action.detailId));
        yield put(actions.fetchAllDetails());
    }catch(err){
        console.log(err);
    }
}