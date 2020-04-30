import {inputType} from './CommonConstants';

export const profDetailsConfig = {
    firstName: {
        labelName: 'First Name',
        type: inputType.TEXT,
        placeholder: 'Enter your first name',
        valid: true,
        // value: this.props.profDetails.firstName,
        // onChange: ''
    },
    lastName: {
        labelName: 'Last Name',
        type: inputType.TEXT,
        placeholder: 'Enter your last name',
        valid: true,
        // value: this.props.profDetails.lastName,
        // onChange: ''
    },
    company: {
        labelName: 'Company',
        type: inputType.TEXT,
        placeholder: 'Enter your company name',
        valid: true,
        // value: this.props.profDetails.company,
        // onChange: ''
    },
    residingState: {
        labelName: 'State',
        type: inputType.SELECT,
        options: [
            { value: 'Andhra Pradesh', displayValue: 'Andhra Pradesh' },
            { value: 'Telangana', displayValue: 'Telangana' }
        ],
        valid: true,
        // value: this.props.profDetails.residingState,
        // onChange: ''
    }
}