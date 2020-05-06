import { createSelector } from 'reselect';
import get from 'lodash/get';

/**
 * Get the professional information details.
 *
 * @param {{}} state - the redux state
 * @returns {*} the professional Information data
 */
export const getProfessionalInfo = (state) =>
  get(state, 'prof', {});
 

/**
 * This selector is used to memorize professionalInfo details
 */
export const professionalInfoSelector = createSelector(
  getProfessionalInfo,
  professionalInfo => professionalInfo,
);
