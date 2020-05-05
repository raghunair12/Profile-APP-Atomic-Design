import React from 'react';
import PropTypes from 'prop-types';

import Label from '../atoms/label/Label';
import Input from '../atoms/input/Input';


const labelledField = ({ labelName, type, placeholder, options, name, value, defaultValue, onChange, disabled }) => {
    // const {labelName,type,placeholder,options} = props
    return (
        <React.Fragment>
            <Label labelName={labelName}/>
            <Input type={type}
                    placeholder={placeholder}
                    options={options}
                    name={name}
                    value={value}
                    disabled={disabled}
                    defaultValue={defaultValue}
                    onChange={onChange} /> 
        </React.Fragment>
    )
};

labelledField.propTypes = {
    labelName: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}

labelledField.defaultProps = {
    labelName: '',
    type: '',
    placeholder: 'Please enter'
}

export default labelledField;