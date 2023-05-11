import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from './firebaseConfig';

const PrivateRoutes = () => {
	const { isAuthenticated } = useAuthState();
	return isAuthenticated ? <Outlet /> : <Navigate to='/signin' replace />;
};

export default PrivateRoutes;
