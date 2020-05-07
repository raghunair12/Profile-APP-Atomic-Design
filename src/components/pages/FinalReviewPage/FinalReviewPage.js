import React from 'react';

import SubHeader from '../../atoms/headers/SubHeader/SubHeader';
import { FinalReviewFieldsContainer } from '../../../containers/organisms/FinalReviewFieldsContainer';
import Button from '../../atoms/button/Button';

const finalReviewPage = ({ profDetails,persDetails,persNextButtonDisabled, history }) => {
    const onClickSubmitHandler = () =>{
        console.log(profDetails, persDetails);
    }
    const onClickPreviousHandler = () => {
        history.push('/pers');
    }
    return (
        <React.Fragment>
            <SubHeader>Final Review</SubHeader>
            <FinalReviewFieldsContainer />
            <Button
                onClick={onClickPreviousHandler}>Previous</Button>
            <Button
                disabled={persNextButtonDisabled}
                onClick={onClickSubmitHandler}>Submit</Button>
        </React.Fragment>
    );
}

export default finalReviewPage;