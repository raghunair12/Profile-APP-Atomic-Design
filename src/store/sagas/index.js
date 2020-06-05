import {takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {storeDetailsSaga} from './storeDetailsSaga';
import { fetchAllDetailsSaga,deleteDetailSaga } from './FetchAllDetailsSaga';

export function* watchStoreDetails(){
    yield takeLatest(actionTypes.STORE_DETAILS, storeDetailsSaga);
}

export function* watchFetchDetails(){
    yield takeLatest(actionTypes.FETCH_ALL_DETAILS, fetchAllDetailsSaga);
    yield takeLatest(actionTypes.DELETE_DETAIL, deleteDetailSaga );
}