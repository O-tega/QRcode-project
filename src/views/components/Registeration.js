import React, { Fragment, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useFormik } from 'formik';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import CreateForm from '../../application/CreateForm'
import { db } from '../../infrastructure/firebase/firebaseConfig';
import CircularProgress from '@mui/material/CircularProgress';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import Qrcode from './Qrcode';

const Registeration = () => {

	const navigate = useNavigate();
	const [error, setError] = useState('');
	const [input, setInput] = useState('');
	const [getId, setId] = useState('');
	const [getEmail, setGetemail] = useState('');
	const [infoList, setInfoList] = useState([]);
	const [isLoading, setLoading] = useState(false);


	const handleInput = (e) => {
		setInput(e.target.value);
	};

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			address: '',
			department: '',
			matricNumber: '',
			phoneNumber: '',
			location: [],
			state: 'safe',
		},
		onSubmit: async (values) => {
			console.log(values);
			setLoading(true);
			console.log(getEmail);
			if (values.email != getEmail) {
				try {
					const collectionRef = collection(db, 'projectList');
					const data = await addDoc(collectionRef, values);
					const response = data;
					setId(response.id);
				} catch (error) {
					console.log(error);
				}
			}
			setError('email already exist, use another email');
			setLoading(false);
		},
	});
	console.log(error);
	// console.log(infoList.length)
	if(infoList.length !=0){

		const getEmail1 = infoList.find((list) => list.email == input);

		// Set to allow info from the db to render then set mail
		setTimeout(() => setGetemail(getEmail1.email), 50);
	}


	console.log(getEmail);
	console.log(input)

	useEffect(() => {
		prodInfoList();
	}, []);

	console.log(infoList);

	console.log(getId)
	const prodInfoList = () => {
		const productCollectionRef = collection(db, 'projectList');
		onSnapshot(productCollectionRef, (snapshot) => {
			let products = [];
			let docId = [];
			let newProduct;
			snapshot.docs.forEach((doc) => {
				docId.push({ id: doc.id });
				products.push({ ...doc.data() });
				return (newProduct = docId.map((id, index) => ({ ...id, ...products[index] })));
			});
			console.log(docId);
			if(newProduct.length!= "undefined"){
				setInfoList(newProduct);
			}
		});
	};
	return (
		<Fragment>
			<div className='md:flex justify-center'>
				<div>
					<div className='text-center my-10 font-bold text-4xl text-sky-700'>Registeration</div>
					<div className='flex justify-center'>
						<form onSubmit={formik.handleSubmit}>
							<div className='form'>
								<TextField
									id='name'
									value={formik.values.name}
									label='Full name'
									variant='outlined'
									className='w-full'
									onBlur={formik.handleBlur}
									onChange={formik.handleChange}
								/>
							</div>
							<div className='form'>
								<TextField
									id='email'
									value={formik.values.email}
									label='Email'
									onInput={handleInput}
									variant='outlined'
									className='w-full'
									onBlur={formik.handleBlur}
									onChange={formik.handleChange}
								/>
							</div>
							<div>{error ? <p className='text-red-500 text-xs'>{error}</p> : ''}</div>
							<div className='form'>
								<TextField
									id='address'
									value={formik.values.address}
									label='Address'
									variant='outlined'
									className='w-full'
									onBlur={formik.handleBlur}
									onChange={formik.handleChange}
								/>
							</div>
							<div className='form'>
								<TextField
									id='department'
									value={formik.values.department}
									label='Department'
									variant='outlined'
									className='w-full'
									onBlur={formik.handleBlur}
									onChange={formik.handleChange}
								/>
							</div>
							<div className='form'>
								<TextField
									id='matricNumber'
									value={formik.values.matricNumber}
									label='Matric Number (e.g. IFT/00/000)'
									variant='outlined'
									className='w-full'
									onBlur={formik.handleBlur}
									onChange={formik.handleChange}
								/>
							</div>
							<div className='form'>
								<TextField
									id='phoneNumber'
									value={formik.values.phoneNumber}
									label='Phone Number'
									variant='outlined'
									className='w-full'
									onBlur={formik.handleBlur}
									onChange={formik.handleChange}
								/>
							</div>
							{getId ? (
								""
							) : (
								<button
									type='submit'
									className='bg-sky-700 hover:bg-sky-900 w-full text-center text-white font-bold rounded py-2'>
									{isLoading ? <CircularProgress color='primary' size={20} /> : <p>Submit</p>}
								</button>
							)}
						</form>
					</div>
				</div>
				{getId?
					<Qrcode getId={getId}/>:""
	
				}
			</div>
		</Fragment>
	);
};

export default Registeration;
