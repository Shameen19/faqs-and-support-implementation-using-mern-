import { FormGroup,FormControl,InputLabel,Input, Typography,styled,Button } from "@mui/material";
import {useState,useEffect} from 'react';
import { getcompcheck, editApi} from '../services/api.js';
import {useParams} from 'react-router-dom';




const Container=styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
& > div {
    margin-top:20px;
}`;

const defaultvalue={
    email:'',
    subject:'',
    details:''
}
const Editcomplaint=()=>{
const [regcomplain,setcomplain]=useState(defaultvalue);

//const navigate=useNavigate();

const { id }=useParams();
useEffect(()=>{
  loadcomplaintdetails();
},[]);

const loadcomplaintdetails=async ()=>{

    const response=await getcompcheck(id);
    setcomplain(response.data);
}
const onvalueChange=(e)=>{
    //console.log(e.target.name,e.target.value);
    setcomplain({...regcomplain,[e.target.name]:e.target.value});
    //console.log(regcomplain);
}

 
const editcomplaint=async ()=>{
    //event.preventDefault();
    await editApi(regcomplain,id);
    //console.log(regcomplain);
    //navigate('/view');

}


    return(
        <Container>
        <Typography variant="h4">Edit Complaint</Typography>
        <Typography variant="h6">Assign status</Typography>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=>onvalueChange(e)} name='email' value={regcomplain.email} disabled/>
        </FormControl>
        <FormControl>
            <InputLabel>Subject</InputLabel>
            <Input onChange={(e)=>onvalueChange(e)} name='subject' value={regcomplain.subject} disabled/>
        </FormControl>
        <FormControl>
            <InputLabel>Details</InputLabel>
            <Input onChange={(e)=>onvalueChange(e)} name='details' value={regcomplain.details} disabled/>
        </FormControl>
        <FormControl>
            <InputLabel>Status</InputLabel>
            <Input onChange={(e)=>onvalueChange(e)} name='status' value={regcomplain.status}/>
        </FormControl>
        <FormControl>
            <Button variant="contained" onClick={()=>editcomplaint()}>Edit complaint</Button>
        </FormControl>
  
    </Container>
    )
}

export default Editcomplaint;