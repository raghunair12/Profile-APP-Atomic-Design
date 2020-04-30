import {inputType} from './CommonConstants';

export const persDetailsConfig = {
    gender: {
        labelName: 'Gender',
        type: inputType.RADIO,
        options: [
            { value: 'male', displayValue: 'Male' },
            { value: 'female', displayValue: 'Female' }
        ],
        onChange: ''
    },
    favMovie: {
        labelName: 'Favourite Movie',
        type: inputType.TEXT,
        placeholder: 'Your Favourite Movie?',
        value: '',
        onChange: ''
    },
    phoneNo: {
        labelName: 'Phone Number',
        type: inputType.NUMBER,
        placeholder: 'Enter your Phone Number',
        value: '',
        onChange: ''
    },
    favApp: {
        labelName: 'Favourite App',
        type: inputType.CHECKBOX,
        options: [
            { value: 'whatsapp', displayValue: 'Whatsapp' },
            { value: 'facebook', displayValue: 'Facebook' }
        ],
        onChange: ''
    },
    weight: {
        labelName: 'Weight',
        type: inputType.NUMBER,
        placeholder: 'Enter your weight',
        value: '',
        onChange: ''
    }
}