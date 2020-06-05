import React from 'react';

import Button from '../../atoms/button/Button';
import TableCell from '../../atoms/TableCell/TableCell';
import classes from './Table.module.css';

const table = ({ data, onDeleteHandler }) => {
    const headersArray = ['First Name', 'Last Name', 'Company', 'State', 'Gender',
        'Phone Number', 'Favourite Movie', 'Favourite App', 'Weight'];
    return (
        <div className={classes.table}>
            <div className={classes.header} >
                {headersArray.map((h, index) => (
                    <TableCell
                        key={index}
                        value={h} />
                ))}
            </div>
            {data.map((detail, index) => {
                const { id, firstName, lastName, company, residingState, gender, phoneNo, favMovie, favApp, weight } = detail;
                return (
                    <div className={classes.row} key={index} >
                        <TableCell value={firstName} />
                        <TableCell value={lastName} />
                        <TableCell value={company} />
                        <TableCell value={residingState} />
                        <TableCell value={gender} />
                        <TableCell value={phoneNo} />
                        <TableCell value={favMovie} />
                        <TableCell value={favApp.join()} />
                        <TableCell value={weight} />
                        <Button onClick={() => onDeleteHandler(id, firstName, lastName)} > Delete</Button>
                    </div>
                )
            })}
        </div>
    )
}

export default table;