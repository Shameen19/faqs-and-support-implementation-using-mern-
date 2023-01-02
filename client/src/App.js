
import './App.css';
import Registercomplaint from './components/registercomplaint';
import Navbar  from './components/Navbar.js';
import ViewComplaint from './components/ViewComplaints';
import UpdateComplaint from './components/UpdateComplaints';
import Editcomplaint from './components/EditComplaint';
import { BrowserRouter , Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/registercomplaint' element={<Registercomplaint/>} />
    <Route path="/allcomplaints" element={<ViewComplaint />} /> 
    <Route path='/updatecomplaints' element={<UpdateComplaint/>}/>
    <Route path='/edit/:id' element={<Editcomplaint/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
