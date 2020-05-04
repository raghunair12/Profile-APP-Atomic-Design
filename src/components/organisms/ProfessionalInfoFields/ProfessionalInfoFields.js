import React from 'react';
import PropTypes from 'prop-types';

import LabelledField from '../../molecules/LabelledField';
import { profDetailsConfig } from '../../../constants/ProfessionalDetailsConfig';
import classes from './ProfessionalInfoFields.module.css';

const professionalInfoFields = ({ onStoreProfessionalDetails, profDetails }) => {
    const onChangeHandler = (event, id) => {
        profDetails = {
            [id]: event.target.value
        }
        onStoreProfessionalDetails(profDetails);
        // const profDetailsLength = (Object.values(profDetails).length - 1).toString()
        // for (let index in Object.values(profDetails)) {
        //     if (Object.values(profDetails)[index] !== '') {
        //         //continue
        //     }
        //     else {
        //         if (profDetails.nextDisabled === false) {
        //             profDetails = {
        //                 ...profDetails,
        //                 nextDisabled: true
        //             }
        //             onStoreProfessionalDetails(profDetails);
        //         }
        //         break;
        //     }
        //     if (index === profDetailsLength) {
        //         profDetails = {
        //             ...profDetails,
        //             nextDisabled: false
        //         }
        //         onStoreProfessionalDetails(profDetails);
        //     }
        // }
    }

    return (
        <div className={classes.ProfessionalInfoFields}>
            {
                Object.keys(profDetailsConfig).map(formElement => {
                    const id = formElement
                    const { labelName, type, placeholder, options, value } =
                        profDetailsConfig[formElement];

                    return (
                        <LabelledField
                            key={id}
                            labelName={labelName}
                            type={type}
                            placeholder={placeholder}
                            options={options}
                            value={value}
                            disabled= {false}
                            defaultValue={profDetails[id]}
                            onChange={(event) => onChangeHandler(event, id)} />
                    )
                })
            }
        </div>
    );
}

professionalInfoFields.propTypes = {
    onStoreProfessionalDetails: PropTypes.func.isRequired,
    profDetails: PropTypes.object.isRequired
}

export default professionalInfoFields;