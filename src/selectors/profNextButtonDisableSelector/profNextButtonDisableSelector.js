import { createSelector } from 'reselect';
import values from 'lodash/values';
import { professionalInfoSelector } from '../professionalInfoSelector/professionalInfoSelector';

/**
 * Get the professional information details.
 *
 * @param {{}} state - the redux state
 * @returns {*} the professional Information data
 */
export const getProfNextButtonDisable = (state) => {
    const profDetails = professionalInfoSelector(state);
    return !values(profDetails).every((k) => k);
}

/**
 * This selector is used to memorize professionalInfo details
 */
export const profNextButtonDisableSelector = createSelector(
  getProfNextButtonDisable,
  profNextButtonDisable => profNextButtonDisable,
);
