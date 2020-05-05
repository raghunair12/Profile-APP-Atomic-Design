import React from 'react';
import PropTypes from 'prop-types';

import classes from './Input.module.css';
import Label from '../label/Label';
import { inputType } from '../../../constants/CommonConstants';
import TextInputCell from '../TextInputCell/TextInputCell';


const input = ({ type, placeholder, options, name, value, defaultValue, onChange, disabled }) => {
    const inputClasses = [classes.InputElement];

    // if (props.invalid && props.shouldValidate && props.touched) {
    //     inputClasses.push(classes.Invalid);
    // }

    switch (type) {
        case (inputType.TEXT):
            return (
                <TextInputCell
                type={inputType.TEXT}
                placeholder={placeholder}
                onChange={onChange}
                // value={value}
                defaultValue={defaultValue} 
                disabled= {disabled}
                className={inputClasses.join(' ')} 
                />
            );

        case (inputType.SELECT):
            return (
                <select 
                defaultValue={defaultValue} 
                onChange={(event) => {onChange(event.target.value)} }
                disabled= {disabled}
                className={inputClasses.join(' ')}
                >
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );

        case (inputType.NUMBER):
            return (
               <TextInputCell
                type={inputType.NUMBER}
                placeholder={placeholder}
                onChange={onChange}
                // value={value}
                defaultValue={defaultValue} 
                disabled= {disabled}
                className={inputClasses.join(' ')} 
                />
            );

        case (inputType.RADIO):
            return (
                options.map(option => (
                    <React.Fragment key={option.value}>
                        <input type={inputType.RADIO} name={name} value={option.value} 
                        disabled= {disabled} checked={defaultValue === option.value?true: false}
                        onChange={(event) =>onChange(event.target.value)} className={inputClasses.join(' ')} />
                        <Label labelName={option.displayValue} />
                    </React.Fragment>
                )
                )
            );

        case (inputType.CHECKBOX):
            return (
                options.map(option => (
                    <React.Fragment key={option.value}>
                        <input
                        type={inputType.CHECKBOX}
                        name={name} value={option.value} 
                        disabled= {disabled} checked={defaultValue[option.value]}
                        onChange={(event) =>onChange(event.target.value)} 
                        className={inputClasses.join(' ')} 
                        />
                        <Label labelName={option.displayValue} />
                    </React.Fragment>
                )
                )
            );

        default: return null;
    }
}

input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    options: PropTypes.array,
    name: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
      ]),
    onChange: PropTypes.func
}

export default input;