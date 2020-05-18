import React from 'react';
// import axios from 'axios';

import SubHeader from '../../atoms/headers/SubHeader/SubHeader';
import { FinalReviewFieldsContainer } from '../../../containers/organisms/FinalReviewFieldsContainer';
import Button from '../../atoms/button/Button';

const finalReviewPage = ({ profDetails,
    persDetails,
    onResetProfessionalDetails,
    onResetPersonalDetails,
    persNextButtonDisabled,
    onStoreDetails,
    history }) => {
    // const onClickSubmitHandler = async () => {
    //     // const response = await fetch('http://localhost:5000/api/details/submit',{
    //     //     method: 'POST',
    //     //     headers:{
    //     //         'Content-Type':'application/json'
    //     //     },
    //     //     body: JSON.stringify({
    //     //         firstName: profDetails.firstName,
    //     //         lastName: profDetails.lastName,
    //     //         company: profDetails.company,
    //     //         residingState: profDetails.residingState
    //     //     })
    //     // });
    //     // const responseData = await response.json();
    //     // console.log(responseData)
    //     let apps= [];
    //     Object.keys(persDetails.favApp).map(p => {
    //         if(persDetails.favApp[p]){
    //             apps.push(p)
    //         }
    //         return apps;
    //     })
    //     const headers = {
    //         'Content-Type': 'application/json'
    //     }
    //     const body = JSON.stringify({
    //         firstName: profDetails.firstName,
    //         lastName: profDetails.lastName,
    //         company: profDetails.company,
    //         residingState: profDetails.residingState,
    //         gender: persDetails.gender,
    //         favMovie: persDetails.favMovie,
    //         phoneNo: persDetails.phoneNo,
    //         favApp: apps,
    //         weight: persDetails.weight
    //     })
    //     try {
    //         const response = await axios.post('http://localhost:5000/api/details/submit', body, {
    //             headers: headers
    //         })
    //         console.log(response);
    //         onResetProfessionalDetails();
    //         onResetPersonalDetails();
    //         history.push('/details');
    //     } catch (err) {
    //         console.log(err);
    //     }
    //     // console.log(profDetails, persDetails);
    // }
    // //the above onClickSubmitHandler code is used before to SAGA

    const onClickSubmitHandler = async() => {
        let apps = [];
        Object.keys(persDetails.favApp).map(p => {
            if (persDetails.favApp[p]) {
                apps.push(p)
            }
            return apps;
        })
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
            favApp: apps,
            weight: persDetails.weight
        })
        console.log('start');
        await onStoreDetails(body, headers);
        console.log('end');
        history.push('/details');
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