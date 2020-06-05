import React from 'react';

import classes from './TableCell.module.css';

const tableCell =({value}) => (
    <div className={classes.cell} > {value} </div>
);

export default tableCell;