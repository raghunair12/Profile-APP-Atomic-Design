import {takeEvery, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {storeDetailsSaga} from './storeDetailsSaga';

export function* watchStoreDetails(){
    yield takeLatest(actionTypes.STORE_DETAILS, storeDetailsSaga);
}