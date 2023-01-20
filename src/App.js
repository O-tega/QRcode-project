import React from 'react';
import {Routes, Route} from 'react-router-dom'
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Qrcode from "./components/Qrcode";

function App() {
  return (
    <div>
    <Routes>
          <Route path='/' element={<Qrcode/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
    </div>
  );
}

export default App;
