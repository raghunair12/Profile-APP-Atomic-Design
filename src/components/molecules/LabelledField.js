import React from 'react';
import PropTypes from 'prop-types';

import Label from '../atoms/label/Label';
import Input from '../atoms/input/Input';


const labelText = ({labelName, type, placeholder, options, name, value, defaultValue, onChange }) => {
    // const {labelName,type,placeholder,options} = props
    return (
        <React.Fragment>
            <Label>{labelName}</Label>
            <Input type={type} placeholder={placeholder} options={options} name={name} value={value} defaultValue={defaultValue} onChange={onChange} />
        </React.Fragment>
    )
};

labelText.propTypes = {
    labelName: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}

labelText.defaultProps = {
    labelName: '',
    type: '',
    placeholder: 'Please enter'
}

export default labelText;