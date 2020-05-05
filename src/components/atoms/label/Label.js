import React from 'react';
import PropTypes from 'prop-types';

import classes from './Label.module.css';

const label = ({labelName}) => (
    <label className={classes.Label}>
        {labelName}
    </label>
);

label.propTypes = {
    labelName: PropTypes.string
}

export default label;