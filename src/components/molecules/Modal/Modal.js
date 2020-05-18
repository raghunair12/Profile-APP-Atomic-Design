import React from 'react';

import classes from './Modal.module.css';
import Backdrop from '../../atoms/Backdrop/Backdrop';

const modal = ({show,children,modalClosed}) => (
    <React.Fragment>
        <Backdrop show={show}
            clicked={modalClosed} />
        <div className={classes.Modal} >
            {children}
        </div>
    </React.Fragment>
);

export default modal;