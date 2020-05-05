import values from 'lodash/values';
import isBoolean from 'lodash/isBoolean';

const enableNextButton = (details) => {
    const allFieldsUpdated = values(details).every((k) => 
    typeof(k) === "boolean"? isBoolean(k) : (k));
    if (details.nextDisabled === allFieldsUpdated) {
        return {
            nextDisabled: !allFieldsUpdated
        }
    }
}

export default enableNextButton;