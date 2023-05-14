import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Qrcode from './components/Qrcode';
import Registeration from './components/Registeration';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import ProductInfoList from './components/ProductInfoList';
import UpdateProduct from './components/UpdateProduct';
import SingleItem from './components/SingleItem';
import SingleItemUser from './components/SingleItemUser';
import { AuthContextProvider, useAuthState } from '../infrastructure/firebase/firebaseConfig';
import PrivateRoutes from '../infrastructure/firebase/privateRoutes';
import Profile from './components/Profile';

function App() {
	return (
		<AuthContextProvider>
			<div>
				<Routes>
					<Route path='/signin' element={<SignIn />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/product-list' element={<ProductInfoList />} />
					<Route path='/register' element={<Registeration />} />
					<Route path='/:id' element={<SingleItemUser />} />
					<Route element={<PrivateRoutes />}>
						<Route path='/profile/:id' element={<Profile />} />
						<Route path='/qrcode' element={<Qrcode />} />
						<Route path='/update/:id' element={<UpdateProduct />} />
						<Route path='/singleitem/:id' element={<SingleItem />} />
					</Route>
				</Routes>
			</div>
		</AuthContextProvider>
	);
}

export default App;
