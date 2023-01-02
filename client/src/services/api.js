import axios from 'axios';


const URL='http://localhost:7000';
export const RegApi=async (data)=>{
    try{
       return await axios.post('http://localhost:7000/register',data);
    }
    catch(error){
        console.log("Error while routing",error);
    }
}

export const getUsers=async()=>{
  try{
     return await axios.get('http://localhost:7000/view')
  }
  catch(error){
    console.log('Error while fetching the record',error);
  }
}

export const getcompcheck=async(id)=>{
  try{
    return await axios.get(`${URL}/${id}`);
  }
  catch(error)
  {
    console.log("error while viewing details",error);
  }

}
export const editApi=async (regcomplain,id)=>{
  try{
     return await axios.post(`${URL}/${id}`,regcomplain);
  }
  catch(error){
    console.log("error while viewing details",error);
  }
}