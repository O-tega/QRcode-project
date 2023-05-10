import React, { useState, useEffect, Fragment } from 'react';
import { db } from '../../infrastructure/firebase/firebaseConfig';
import CircularProgress from '@mui/material/CircularProgress';
import { doc, addDoc, updateDoc, onSnapshot, collection, setDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const SingleItemUser = () => {
	const { id } = useParams();
	console.log(id);

	const [isLoading, setLoading] = useState(false)
	const [name, setName] = useState('');
	const [product, setProduct] = useState('');
	const [state, setState] = useState('');
	const [location, setLocation] = useState([
		{
			latitude: '',
			longitude: '',
		},
	]);

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	setLoading(true);
	// 	console.log(id);
	// 	console.log(location);
	// 	const docRef = doc(db, 'projectList', id);
	// 	await updateDoc(docRef, {
	// 		location: location,
	// 	})
	// 		.then((response) => {
	// 			console.log(response);
	// 		})
	// 		.catch((error) => console.log(error));

	// 	setLoading(false);
	// };

	const docRef = doc(db, 'projectList', id);

	useEffect(() => {
		onSnapshot(docRef, (doc) => {
			let data = doc.data();
			console.log(data);
			setName(data.name);
			setProduct(data.product);
			setState(data.state);
		});
	}, []);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			setLocation({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
			});
		});
	}, []);

	const submit = () => {
		updateDoc(docRef, {
			location: { ...location },
		})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => console.log(error));
	};
	submit();

	return (
		<Fragment>
			<div className='text-center font-bold text-2xl text-sky-700 flex-col mt-20 mb-10 '>
				<p>Name: {name}</p>
				<p>Item: {product}</p>
				<p>Item state: {state}</p>
			</div>
			<div>
				<div className='text-center'>
					<p>
						latitude: {location.latitude} longitude: {location.longitude}
					</p>
				</div>
			</div>
		</Fragment>
	);
};

export default SingleItemUser;
