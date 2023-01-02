import { useEffect,useState} from 'react';



import {Table,TableHead,TableRow,TableCell, TableBody,styled,Button} from '@mui/material';
import { getUsers } from '../services/api.js';

import {Link } from 'react-router-dom';


const StyledTable=styled(Table)`
width:90%;
margin:50px auto 0 auto;

`

const Thead=styled(TableRow)`
background:#000000;
& > th{
    color:#fff;
    font-size:20px;
}

`;

const Tbody=styled(TableRow)`
& > td{
    font-size:20px;
}`
const ViewComplaint=()=>{


    const[complaints,setcomplaints]=useState([]);
    useEffect(()=>{
        getAllComplaints();

    },[]);

    const getAllComplaints=async()=>{
        let allcomplaints=await getUsers();
        setcomplaints(allcomplaints.data);
        console.log(allcomplaints.data);
    }
    return(
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>ID</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Subject</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell></TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    complaints.map(comp=>(
                        <TableRow>
                            <TableCell>{comp._id}</TableCell>
                            <TableCell>{comp.email}</TableCell>
                            <TableCell>{comp.subject}</TableCell>
                            <TableCell>{comp.details}</TableCell>
                            <TableCell>{comp.status}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${comp._id}`}>Edit</Button>
                                <Button variant="contained" color="secondary">Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default ViewComplaint;