import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import {ToastContainer} from 'react-toastify'


function App() {
  return (
    <div className='App'>
     
    <ToastContainer theme='colored'></ToastContainer>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Registration/>}></Route>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
