




import {AppBar,Toolbar, styled} from '@mui/material';
import {NavLink} from 'react-router-dom';

const Header=styled(AppBar)`
background-color:#39395f;
`;

const Tabs=styled(NavLink)`
font-size:20px;
margin-right: 20px;
color: inherit;
text-decoration:none;
`;


const Navbar=()=>{
    return(
        <Header position='static'>
        <Toolbar>
            <Tabs to='/allcomplaints'>View Complaint</Tabs>
            <Tabs to='/updatecomplaints'>Update Complaints</Tabs>
            <Tabs to='/registercomplaint'>Register Complaints</Tabs>

        </Toolbar>
    </Header>
    )
}

export default Navbar;