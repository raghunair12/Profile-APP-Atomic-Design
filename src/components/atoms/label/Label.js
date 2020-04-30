import React from 'react';
import PropTypes from 'prop-types';

import classes from './Label.module.css';

const label = ({children}) => (
    <label className={classes.Label}>
        {children}
    </label>
);

label.propTypes = {
    children: PropTypes.string.isRequired
}

export default label;