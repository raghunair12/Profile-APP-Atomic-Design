import React from 'react';
import PropTypes from 'prop-types';

import classes from './Input.module.css';
import Label from '../label/Label';
import { inputType } from '../../../constants/CommonConstants';

const input = ({ type, placeholder, options, name, value, defaultValue, onChange }) => {
    const inputClasses = [classes.InputElement];

    // if (props.invalid && props.shouldValidate && props.touched) {
    //     inputClasses.push(classes.Invalid);
    // }

    switch (type) {
        case (inputType.TEXT):
            return (
                <input type={inputType.TEXT} placeholder={placeholder}  defaultValue={defaultValue} onChange={onChange} className={inputClasses.join(' ')} />
            );

        case (inputType.SELECT):
            return (
                <select defaultValue={defaultValue} onChange={onChange} className={inputClasses.join(' ')}>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );

        case (inputType.NUMBER):
            return (
                <input type={inputType.NUMBER} placeholder={placeholder} defaultValue={defaultValue} onChange={onChange} className={inputClasses.join(' ')} />
            );

        case (inputType.RADIO):
            return (
                options.map(option => (
                    <React.Fragment key={option.value}>
                        <input type={inputType.RADIO} name={option.value} defaultValue={option.defaultValue} onChange={onChange} className={inputClasses.join(' ')} />
                        <Label>{option.displayValue}</Label>
                    </React.Fragment>
                )
                )
            );

        case (inputType.CHECKBOX):
            return (
                options.map(option => (
                    <React.Fragment key={option.value}>
                        <input type={inputType.CHECKBOX} name={option.value} defaultValue={option.displayValue} onChange={onChange} className={inputClasses.join(' ')} />
                        <Label>{option.displayValue}</Label>
                    </React.Fragment>
                )
                )
            );

        default: return null;
    }
}

input.propTypes = {
    type: PropTypes.string.isRequired, 
    placeholder: PropTypes.string , 
    options: PropTypes.array , 
    name: PropTypes.string , 
    value: PropTypes.string , 
    defaultValue: PropTypes.string, 
    onChange: PropTypes.func
}

export default input;