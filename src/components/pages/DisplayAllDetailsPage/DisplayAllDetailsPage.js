import React, { useEffect, useReducer } from 'react';
// import axios from 'axios';

import SubHeader from '../../atoms/headers/SubHeader/SubHeader';
import Table from '../../molecules/Table/Table';
import Button from '../../atoms/button/Button';
import DeleteConfirmation from '../../organisms/DeleteConfirmation/DeleteConfirmation';
import Modal from '../../molecules/Modal/Modal';
import {reducer,initialState} from './localReducer';

const DisplayAllDetailsPage = ({ history, onFetchAllDetails, allDetails, onDeleteDetail }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        const getDetails = async () => {
            try {
                // const response = await axios.get('http://localhost:5000/api/details');
                onFetchAllDetails();
            } catch (err) {
                console.log(err);
            }
        }
        getDetails();
        console.log('uesEffect1 triggered');
    }, [onFetchAllDetails]);

    // useEffect(() => {
    //     console.log(allDetails);
    //     console.log('uesEffect2 triggered');
    //     dispatch({ type: 'SET_RESPONSE_DATA', allDetails });
    // }, [allDetails]);

    const gotoHomePage = () => {
        history.push('/');
    }
    const onDeleteHandler = async (detailId, firstName, lastName) => {
        dispatch({ type: 'ONDELETE_INIT', detailId, firstName, lastName });
    }

    const onDeleteContinueHandler = async () => {
        try {
            // await axios.delete('http://localhost:5000/api/details/' + state.deleteDetailId);
            onDeleteDetail(state.deleteDetailId);
            dispatch({ type: 'ONDELETE_CONTINUE' });
        } catch (err) {
            console.log(err);
        }
    }

    const onDeleteCancelHandler = () => {
        dispatch({ type: 'ONDELETE_CANCEL' });
    }

    return (
        <React.Fragment>
            {state.confirmDelete ?
                <Modal show={true}
                    modalClosed={onDeleteCancelHandler} >
                    <DeleteConfirmation show={true}
                        onContinue={onDeleteContinueHandler}
                        onCancel={onDeleteCancelHandler}
                        name={state.selectedName} />
                </Modal>
                : null}
            <SubHeader>All Details</SubHeader>
            {/* {details.map((detail, index) => (
                Object.keys(detail).map(d => (
                    <Table
                        key={index}
                        title={d}
                        value={detail[d]} />
                ))
            ))} */}
            {/* {
            allDetails ?<Table data={allDetails} onDeleteHandler={onDeleteHandler} />: console.log('test')
            } */}
            <Table data={allDetails} onDeleteHandler={onDeleteHandler} />
            <Button
                onClick={gotoHomePage}>Go To Home Page</Button>
        </React.Fragment>
    );
}

export default DisplayAllDetailsPage;