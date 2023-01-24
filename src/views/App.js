import React from "react";
import { Routes, Route, } from "react-router-dom";
import Qrcode from "../components/Qrcode";
import Registeration from "../components/Registeration";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Qrcode />}/>
				<Route path='/signin' element={<SignIn/>}/>
				<Route path='/signup' element={<SignUp/>}/>
				<Route path='/register' element={<Registeration />}/>
			</Routes>
		</div>
	);
}

export default App;