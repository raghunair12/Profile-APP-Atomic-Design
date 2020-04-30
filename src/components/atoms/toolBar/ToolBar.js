import React from 'react';
import classes from './ToolBar.module.css';

const toolBar = (props) =>(
    <header className={classes.ToolBar}>
        {props.children}
    </header>
);

export default toolBar;