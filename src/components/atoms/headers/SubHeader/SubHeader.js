import React from 'react';
import PropTypes from 'prop-types';

import classes from './SubHeader.module.css';

const subHeader = ({children}) => (
    <h4 className={classes.SubHeader}>{children}</h4>
);

subHeader.propTypes={
    children: PropTypes.string.isRequired
}

export default subHeader;