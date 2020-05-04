import values from 'lodash/values';
// import isBoolean from 'lodash/isBoolean';

const enableNextButton = (details) => {
    const allFieldsUpdated = values(details).every((k) =>(k));
    if (details.nextDisabled === allFieldsUpdated) {
        const newState = {
            ...details,
            nextDisabled: !allFieldsUpdated
        }
        return newState;
    }
}

export default enableNextButton;