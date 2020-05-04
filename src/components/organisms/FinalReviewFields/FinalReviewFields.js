import React from 'react';

import LabelledField from '../../molecules/LabelledField';
import { profDetailsConfig } from '../../../constants/ProfessionalDetailsConfig';
import {persDetailsConfig} from '../../../constants/PersonalDetailsConfig';
import classes from './FinalReviewFields.module.css';

const finalReviewFields = ({profDetails,persDetails}) => {
    return(
        <div className={classes.FinalReviewFields}>
            {
                Object.keys(profDetailsConfig).map(formElement => {
                    const { labelName, type, options} = profDetailsConfig[formElement];
                    return (
                        <LabelledField
                            key={formElement}
                            labelName={labelName}
                            type={type}
                            options={options}
                            defaultValue={profDetails[formElement]}
                            disabled={true}
                        />
                    )
                })
            }
            {
                Object.keys(persDetailsConfig).map(formElement => {
                    const { labelName, type, options} = persDetailsConfig[formElement];
                    return (
                        <LabelledField
                            key={formElement}
                            labelName={labelName}
                            type={type}
                            options={options}
                            defaultValue={persDetails[formElement]}
                            disabled={true}
                        />
                    )
                })
            }
        </div>
    );
}

export default finalReviewFields;