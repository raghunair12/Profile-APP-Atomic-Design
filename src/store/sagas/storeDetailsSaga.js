import { put } from 'redux-saga/effects';

import * as actions from '../actions/index';
import axios from '../../axios-base';

export function* storeDetailsSaga(action) {
    // yield put(actions.storeDetails());
    try {
        const response = yield axios.post('/submit', action.body, {
            headers: action.headers
        });
        console.log(response);
        yield put(actions.resetProfessionalDetails());
        yield put(actions.resetPersonalDetails());
        console.log('actual end');
    } catch (err) {
        console.log(err);
    }
}