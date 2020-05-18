import React from 'react';

import Button from '../../atoms/button/Button';
import classes from './Table.module.css';

const table = ({ data, onDeleteHandler }) => {
    return (
            <div className={classes.table}>
                <div className={classes.header} >
                    <div className={classes.cell} > First Name </div>
                    <div className={classes.cell} > Last Name </div>
                    <div className={classes.cell} > Company </div>
                    <div className={classes.cell} > State </div>
                    <div className={classes.cell} > Gender </div>
                    <div className={classes.cell} > Phone Number </div>
                    <div className={classes.cell} > Favourite Movie </div>
                    <div className={classes.cell} > Favourite App </div>
                    <div className={classes.cell} > Weight </div>
                </div>
                {data.map((detail, index) => (
                <div className={classes.row} key={index} >
                    <div className={classes.cell} > {detail.firstName} </div>
                    <div className={classes.cell} > {detail.lastName} </div>
                    <div className={classes.cell} > {detail.company} </div>
                    <div className={classes.cell} > {detail.residingState} </div>
                    <div className={classes.cell} > {detail.gender} </div>
                    <div className={classes.cell} > {detail.phoneNo} </div>
                    <div className={classes.cell} > {detail.favMovie} </div>
                    {detail.favApp.length > 1?
                        <div className={classes.cell} > {detail.favApp[0]} , {detail.favApp[1]} </div>
                        : <div className={classes.cell} > {detail.favApp[0]} </div>
                    }
                    <div className={classes.cell} > {detail.weight} </div>
                    <Button onClick={()=>onDeleteHandler(detail.id)} > Delete</Button>
                </div>
                ))}
            </div>
    )
}

export default table;