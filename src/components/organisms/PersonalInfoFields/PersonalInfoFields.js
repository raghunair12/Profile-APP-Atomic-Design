import React from 'react';

import LabelledField from '../../molecules/LabelledField';
import classes from './PersonalInfoFields.module.css';
import { persDetailsConfig } from '../../../constants/PersonalDetailsConfig';

const personalInfoFields = ({ onStorePersonalDetails, persDetails }) => {
    const onChangeHandler = (updatedValue, id) => {
        persDetails = {
            ...persDetails,
            [id]: updatedValue
        }
        onStorePersonalDetails(persDetails);
    }

    return (
        <div className={classes.PersonalInfoFields}>
            {
                Object.keys(persDetailsConfig).map(formElement => {
                    const id = formElement
                    const { labelName, type, placeholder, options, value } =
                        persDetailsConfig[formElement];
                    return (
                        <LabelledField
                            key={id}
                            labelName={labelName}
                            type={type}
                            placeholder={placeholder}
                            options={options}
                            value={value}
                            onChange={(updatedValue) => onChangeHandler(updatedValue, id)} />
                    )
                })
            }
        </div>
    );
}


export default personalInfoFields;