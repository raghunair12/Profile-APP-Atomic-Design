import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SubHeader from '../../atoms/headers/SubHeader/SubHeader';
import Table from '../../molecules/Table/Table';
import Button from '../../atoms/button/Button';
import DeleteConfirmation from '../../organisms/DeleteConfirmation/DeleteConfirmation';
import Modal from '../../molecules/Modal/Modal';

const DisplayAllDetailsPage = ({ history }) => {
    const [resData, setResData] = useState([]);
    const [deleteDetailId, setDeleteDetailId] = useState('');
    const [selectedName, setSelectedName] = useState('');
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [deleteClicked, setDeleteClicked] = useState(false);
    useEffect(() => {
        const getDetails = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/details');
                // console.log(response.data.details);
                setResData(response.data.details);
            } catch (err) {
                console.log(err);
            }
        }
        getDetails();
        console.log('uesEffect triggered');
        setDeleteClicked(false);
    }, [deleteClicked]);

    const gotoHomePage = () => {
        history.push('/');
    }
    const onDeleteHandler = async (detailId,firstName,lastName) => {
        // console.log(detailId);
        setDeleteDetailId(detailId);
        setSelectedName(firstName+' '+lastName);
        setConfirmDelete(true);
        // try{
        //     await axios.delete('http://localhost:5000/api/details/'+detailId);
        //     setDeleteClicked(true);
        // }catch(err){
        //     console.log(err);
        // }
    }

    const onDeleteContinueHandler = async (detailId) => {
        // console.log(deleteDetailId);
        try {
            await axios.delete('http://localhost:5000/api/details/' + deleteDetailId);
            setDeleteClicked(true);
            setConfirmDelete(false);
        } catch (err) {
            console.log(err);
        }
    }

    const onDeleteCancelHandler = () => {
        setConfirmDelete(false);
    }

    return (
        <React.Fragment>
            {confirmDelete ?
                <Modal show={true}
                    modalClosed={onDeleteCancelHandler} >
                    <DeleteConfirmation show={true}
                        onContinue={onDeleteContinueHandler}
                        onCancel={onDeleteCancelHandler}
                        name={selectedName} />
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
            {/* {details.map((detail,index)=> (
                <Table 
                key={index}
                data={detail} />
            ))} */}
            <Table data={resData} onDeleteHandler={onDeleteHandler} />
            <Button
                onClick={gotoHomePage}>Go To Home Page</Button>
        </React.Fragment>
    );
}

export default DisplayAllDetailsPage;