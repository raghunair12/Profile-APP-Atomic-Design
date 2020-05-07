import {createSelector} from 'reselect';
import get from 'lodash/get';

export const getPersonalInfo = state => 
get(state, 'pers', {})

export const personalInfoSelector = createSelector(
    getPersonalInfo,
    personalInfo => personalInfo
);
