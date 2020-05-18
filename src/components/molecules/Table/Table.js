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
                {data.map((detail, index) => {
                    const {id,firstName,lastName,company,residingState,gender,phoneNo,favMovie,favApp,weight} = detail;
                    return(
                <div className={classes.row} key={index} >
                    <div className={classes.cell} > {firstName} </div>
                    <div className={classes.cell} > {lastName} </div>
                    <div className={classes.cell} > {company} </div>
                    <div className={classes.cell} > {residingState} </div>
                    <div className={classes.cell} > {gender} </div>
                    <div className={classes.cell} > {phoneNo} </div>
                    <div className={classes.cell} > {favMovie} </div>
                    {favApp.length > 1?
                        <div className={classes.cell} > {favApp[0]} , {favApp[1]} </div>
                        : <div className={classes.cell} > {favApp[0]} </div>
                    }
                    <div className={classes.cell} > {weight} </div>
                    <Button onClick={()=>onDeleteHandler(id,firstName,lastName)} > Delete</Button>
                </div>
                )})}
            </div>
    )
}

export default table;