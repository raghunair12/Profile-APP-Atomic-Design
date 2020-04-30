import React from 'react';

import Label from '../atoms/label/Label';
import Select from '../atoms/select/Select';

const labelText = (labelName,options) => (
    <React.Fragment>
        <Label>{labelName}</Label>
        <Select options={options} />
    </React.Fragment>
);

export default labelText;