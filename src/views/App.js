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

function App() {
	return (
		<AuthContextProvider>
			<div>
				<Routes>
					<Route path='/' element={<Qrcode />} />
					<Route path='/signin' element={<SignIn />} />
					<Route path='/signup' element={<SignUp />} />
					<Route element={<PrivateRoutes />}>
						<Route path='/register' element={<Registeration />} />
						<Route path='/product-list' element={<ProductInfoList />} />
						<Route path='/update/:id' element={<UpdateProduct />} />
						<Route path='/singleitem/:id' element={<SingleItem />} />
					</Route>
					<Route path='/:id' element={<SingleItemUser />} />
				</Routes>
			</div>
		</AuthContextProvider>
	);
}

export default App;
