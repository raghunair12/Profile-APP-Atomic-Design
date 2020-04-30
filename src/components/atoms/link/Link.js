import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import classes from './Link.module.css';

const link = ({to,children,profDetails}) => (
    
    <ul className={classes.LinkItems} >
        <Link
            to={to}
            className={profDetails.nextDisabled?classes.disabledLink:classes.enabledLink} >
                {children}
        </Link>
    </ul>
);

link.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.string,
    profDetails: PropTypes.object
}

export default link;