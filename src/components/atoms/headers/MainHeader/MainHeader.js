import React from 'react';
import PropTypes from 'prop-types';

const mainHeader = ({children}) => (
    <h2>{children}</h2>
);

mainHeader.propTypes= {
    children: PropTypes.string.isRequired
}

export default mainHeader;