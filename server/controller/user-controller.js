


import Complaint from "../Schema/complaintschema.js";



export const registercomp=async (req,res)=>{
    const complaint=req.body;
    const newComplaint=new Complaint(complaint);
    try{
       await newComplaint.save();
       res.status(201).json(newComplaint);
    }
    catch(error){
        res.status(409).json({message:error.message});

    }


}

export const getAll=async(request,response)=>{
    try{
    const complaints=await Complaint.find({});
    response.status(200).json(complaints);
    }
    catch(error){
        response.status(404).json({message:error.message});

    }

}
export const getcomp=async(request,response)=>{
    console.log(request.params.id);
    try{
        //const complaints=await Complaint.find({_id:request.params.id});
        const user=await Complaint.findById(request.params.id);
        response.status(200).json(user);
        }
        catch(error){
            response.status(404).json({message:error.message});
    
        }
}

export const editUser=async(request,response)=>{
    let user=request.body;
    const editUser=new Complaint(user);
    try{
        await Complaint.updateOne({_id: request.params.id}, editUser);
        response.status(201).json(editUser);
       }
       catch(error){
               response.status(409).json({message:error.message});
       }
}