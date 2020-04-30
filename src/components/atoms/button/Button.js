import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.css';

const button = ({disabled,onClick,btnType,children}) => (
    <button disabled={disabled} onClick={onClick} className={[classes.Button,classes[btnType]].join(' ')}>
        {children}
    </button>
);

button.propTypes={
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    btnType: PropTypes.string,
    children: PropTypes.string
}

export default button;