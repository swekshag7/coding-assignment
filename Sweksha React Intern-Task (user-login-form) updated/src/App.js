import './App.css';
import LoginComponent from '../src/Components/Login'
import PersonalDetailFormComponent from '../src/Components/PersonalDetailForm'
import { Route, Routes } from 'react-router-dom';
import PrintDetails from './Components/PrintDetails';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginComponent/>}></Route>
      <Route path='/personaldetailform' element={<PersonalDetailFormComponent/>}></Route>
      <Route path='/printdetails' element={<PrintDetails/>}></Route>


    </Routes>
  );
}

export default App;
