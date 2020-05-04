import React from 'react';

import LabelledField from '../../molecules/LabelledField';
import classes from './PersonalInfoFields.module.css';
import { persDetailsConfig } from '../../../constants/PersonalDetailsConfig';

const personalInfoFields = ({ onStorePersonalDetails, persDetails }) => {
    const onChangeHandler = (event, id) => {
        const idValue = event.target.value
        // console.log(persDetails[id][idValue])
        // const currentValue = persDetails.id.idValue
        id === 'favApp'? persDetails = {
            [id]:{
                ...persDetails[id],
                [idValue]: !persDetails[id][idValue]
            }
        } :
        persDetails = {
            [id]: idValue
        }
        onStorePersonalDetails(persDetails);
    }

    return (
        <div className={classes.PersonalInfoFields} > {
            Object.keys(persDetailsConfig).map(formElement => {
                const id = formElement
                const { labelName, type, placeholder, options, value } =
                    persDetailsConfig[formElement];
                return (
                    <LabelledField key={id}
                        labelName={labelName}
                        type={type}
                        placeholder={placeholder}
                        options={options}
                        name={id}
                        value={value}
                        disabled={false}
                        defaultValue= {persDetails[id]}
                        onChange={(event) => onChangeHandler(event, id)}
                    />
                )
            })
        } </div>
    );
}


export default personalInfoFields;