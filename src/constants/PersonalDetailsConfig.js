import {inputType} from './CommonConstants';

export const persDetailsConfig = {
    gender: {
        labelName: 'Gender',
        type: inputType.RADIO,
        options: [
            { value: 'male', displayValue: 'Male' },
            { value: 'female', displayValue: 'Female' }
        ]
    },
    favMovie: {
        labelName: 'Favourite Movie',
        type: inputType.TEXT,
        placeholder: 'Your Favourite Movie?'
    },
    phoneNo: {
        labelName: 'Phone Number',
        type: inputType.NUMBER,
        placeholder: 'Enter your Phone Number'
    },
    favApp: {
        labelName: 'Favourite App',
        type: inputType.CHECKBOX,
        options: [
            { value: 'whatsapp', displayValue: 'Whatsapp' },
            { value: 'facebook', displayValue: 'Facebook' }
        ]
    },
    weight: {
        labelName: 'Weight',
        type: inputType.NUMBER,
        placeholder: 'Enter your weight'
    }
}