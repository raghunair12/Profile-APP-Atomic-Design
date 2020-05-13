import React from 'react';
import axios from 'axios';

import SubHeader from '../../atoms/headers/SubHeader/SubHeader';
import { FinalReviewFieldsContainer } from '../../../containers/organisms/FinalReviewFieldsContainer';
import Button from '../../atoms/button/Button';

const finalReviewPage = ({ profDetails,
                         persDetails,
                         onResetProfessionalDetails,
                         onResetPersonalDetails, 
                         persNextButtonDisabled, 
                         history }) => {
    const onClickSubmitHandler = async () => {
        // const response = await fetch('http://localhost:5000/api/details/submit',{
        //     method: 'POST',
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     body: JSON.stringify({
        //         firstName: profDetails.firstName,
        //         lastName: profDetails.lastName,
        //         company: profDetails.company,
        //         residingState: profDetails.residingState
        //     })
        // });
        // const responseData = await response.json();
        // console.log(responseData)
        const headers = {
            'Content-Type': 'application/json'
        }
        const body = JSON.stringify({
            firstName: profDetails.firstName,
            lastName: profDetails.lastName,
            company: profDetails.company,
            residingState: profDetails.residingState,
            gender: persDetails.gender,
            favMovie: persDetails.favMovie,
            phoneNo: persDetails.phoneNo,
            favApp: persDetails.favApp,
            weight: persDetails.weight
        })
        try {
            const response = await axios.post('http://localhost:5000/api/details/submit', body, {
                headers: headers
            })
            console.log(response);
            onResetProfessionalDetails();
            onResetPersonalDetails();
            history.push('/');
        } catch (err) {
            console.log(err);
        }
        // console.log(profDetails, persDetails);
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