import { FormGroup,FormControl,InputLabel,Input, Typography,styled,Button } from "@mui/material";
import axios from "axios";
import {useState} from 'react';
import { RegApi} from '../services/api.js';
//import {useNavigate} from 'react-router-dom';




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
const Registercomplaint=()=>{
const [regcomplain,setcomplain]=useState(defaultvalue);

//const navigate=useNavigate();

const onvalueChange=(e)=>{
    //console.log(e.target.name,e.target.value);
    setcomplain({...regcomplain,[e.target.name]:e.target.value});
    //console.log(regcomplain);
}


const registercomplaint=async()=>{
    //event.preventDefault();
    await RegApi(regcomplain);
    //navigate('/view');

}


    return(
        <Container>
        <Typography variant="h4">Register Complaint</Typography>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=>onvalueChange(e)} name='email'/>
        </FormControl>
        <FormControl>
            <InputLabel>Subject</InputLabel>
            <Input onChange={(e)=>onvalueChange(e)} name='subject'/>
        </FormControl>
        <FormControl>
            <InputLabel>Details</InputLabel>
            <Input onChange={(e)=>onvalueChange(e)} name='details'/>
        </FormControl>
        <FormControl>
            <Button variant="contained" onClick={()=>registercomplaint()}>Register complaint</Button>
        </FormControl>
  
    </Container>
    )
}

export default Registercomplaint;