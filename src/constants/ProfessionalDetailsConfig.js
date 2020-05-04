import {inputType} from './CommonConstants';

export const profDetailsConfig = {
    firstName: {
        labelName: 'First Name',
        type: inputType.TEXT,
        placeholder: 'Enter your first name'
    },
    lastName: {
        labelName: 'Last Name',
        type: inputType.TEXT,
        placeholder: 'Enter your last name'
    },
    company: {
        labelName: 'Company',
        type: inputType.TEXT,
        placeholder: 'Enter your company name'
    },
    residingState: {
        labelName: 'State',
        type: inputType.SELECT,
        options: [
            { value: 'Andhra Pradesh', displayValue: 'Andhra Pradesh' },
            { value: 'Telangana', displayValue: 'Telangana' }
        ]
    }
}