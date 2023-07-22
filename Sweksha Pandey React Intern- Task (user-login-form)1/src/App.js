import './App.css';
import LoginComponent from '../src/Components/Login'
import PersonalDetailFormComponent from '../src/Components/PersonalDetailForm'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginComponent/>}></Route>
      <Route path='personaldetailform' element={<PersonalDetailFormComponent/>}></Route>

    </Routes>
  );
}

export default App;
