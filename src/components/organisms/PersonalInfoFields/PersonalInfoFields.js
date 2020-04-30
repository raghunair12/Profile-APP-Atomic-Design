import React from 'react';

import LabelledField from '../../molecules/LabelledField';
import classes from './PersonalInfoFields.module.css';
import {persDetailsConfig} from '../../../constants/PersonalDetailsConfig';

const personalInfoFields = ({ onStorePersonalDetails, persDetails }) => {
    const onChangeHandler = (event, id) => {
        persDetails = {
            ...persDetails,
            [id]: event.target.value
        }
        onStorePersonalDetails(persDetails);
        const profDetailsLength = (Object.values(persDetails).length - 1).toString()
        for (let index in Object.values(persDetails)) {
            if (Object.values(persDetails)[index] !== '') {
                //continue
            }
            else {
                if (persDetails.nextDisabled === false) {
                    persDetails = {
                        ...persDetails,
                        nextDisabled: true
                    }
                    onStorePersonalDetails(persDetails);
                }
                break;
            }
            if (index === profDetailsLength) {
                persDetails = {
                    ...persDetails,
                    nextDisabled: false
                }
                onStorePersonalDetails(persDetails);
            }
        }
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
                            onChange={(event) => onChangeHandler(event, id)} />
                    )
                })
            }
        </div>
    );
}


export default personalInfoFields;