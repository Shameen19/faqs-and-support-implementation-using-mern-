import express from 'express';


import {registercomp,getAll,getcomp,editUser} from '../controller/user-controller.js'


const router=express.Router();


router.post('/register',registercomp);
router.get('/view',getAll);
router.get('/:id',getcomp)
router.post('/:id',editUser);


export default router;