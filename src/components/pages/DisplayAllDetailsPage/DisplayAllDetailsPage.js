import React,{useState,useEffect} from 'react';
import axios from 'axios';

import SubHeader from '../../atoms/headers/SubHeader/SubHeader';
import Table from '../../molecules/Table/Table';
import Button from '../../atoms/button/Button';

const DisplayAllDetailsPage = ({history}) => {
    const [resData, setResData] = useState([]);
    const [deleteClicked, setDeleteClicked] = useState(false);
    useEffect(() => {
        const getDetails = async() => {
            try{
                const response = await axios.get('http://localhost:5000/api/details');
                // console.log(response.data.details);
                setResData(response.data.details);
            }catch(err){
                console.log(err);
            }
        }
        getDetails();
        setDeleteClicked(false);
    },[deleteClicked]);
    const gotoHomePage = () => {
        history.push('/');
    }
    const onDeleteHandler = async (detailId) => {
        // console.log(detailId);
        try{
            await axios.delete('http://localhost:5000/api/details/'+detailId);
            setDeleteClicked(true);
        }catch(err){
            console.log(err);
        }
    }
    return (
        <React.Fragment>
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
            <Table data ={resData} onDeleteHandler={onDeleteHandler} />
            <Button
                onClick={gotoHomePage}>Go To Home Page</Button>
        </React.Fragment>
    );
}

export default DisplayAllDetailsPage;