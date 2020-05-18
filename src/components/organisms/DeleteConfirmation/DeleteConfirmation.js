import React from 'react';

import Button from '../../atoms/button/Button';

const deleteConfirmation = ({ onCancel, onContinue,name }) => (
    <React.Fragment>
        <div style={{
            // "fontWeight":"bold",
            "color":"red"
        }}>
            This will delete <span style={{"fontWeight":"bold"}} >{name}</span> details permanently. Are you sure to Delete?
        </div>
        <Button onClick={onCancel} >Cancel</Button>
        <Button onClick={onContinue} >Delete</Button>
    </React.Fragment>
);

export default deleteConfirmation;