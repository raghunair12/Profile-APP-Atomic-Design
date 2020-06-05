import {createSelector} from 'reselect';
import get from'lodash/get';

export const fetchAllDetails = (state) =>  get(state,'all.allDetails', {});

export const fetchAllDetailsSelector = createSelector(
    fetchAllDetails,
    allDetails => allDetails
);