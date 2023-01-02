import mongoose from 'mongoose';

import autoincrement from 'mongoose-auto-increment';


const complaint=mongoose.Schema({
    email:
    {
        type: String,
        required: true,
    },
    subject:{
        type: String,
        required:true,
    },
    details:{
        type:String,
        required:true,
    },
    status:{
        type: String,
        default: 'Pending',
    },

});

autoincrement.initialize(mongoose.connection);
complaint.plugin(autoincrement.plugin, 'Complaint');

const Complaint= mongoose.model('Complaint',complaint)

export default Complaint;