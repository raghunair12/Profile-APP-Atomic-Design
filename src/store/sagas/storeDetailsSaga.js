import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import * as actions from '../actions/index';
import axios from '../../axios-base';

export function* storeDetailsSaga(action) {
    // yield put(actions.storeDetails());
    try {
        yield axios.post('/submit', action.body);
        // console.log(response);
        yield put(actions.resetProfessionalDetails());
        yield put(actions.resetPersonalDetails());
        yield put(push('/details'));
    } catch (err) {
        console.log(err);
    }
}