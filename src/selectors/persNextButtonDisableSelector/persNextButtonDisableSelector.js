import { createSelector } from 'reselect';
import values from 'lodash/values';
import { personalInfoSelector } from '../personalInfoSelector/personalInfoSelector';

export const getPersNextButtonDisable = (state) => {
    const persDetails= personalInfoSelector(state);
    return !values(persDetails).every((k)=> k);
}

export const persNextButtonDisableSelector = createSelector(
    getPersNextButtonDisable,
    persNextButtonDisable => persNextButtonDisable
);