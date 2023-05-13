import React, {useCallback, useState} from 'react';
import TextField from '@mui/material/TextField';
import Qrcode from '../../public/Qrcode1.jpg';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../infrastructure/firebase/firebaseConfig';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
	email: yup.string().email('enter a valid email').required('Email is required'),
	password: yup.string().required('password is required'),
});

const SignIn = () => {
	const [isError, setError] = useState("")
	const [isLoading, setLoading] = useState()
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: useCallback(async (values) => {
			setLoading(true);
			try {
				const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
				const user = userCredential.user;

				navigate('/product-list')
				console.log(user)
			
				console.log(JSON.stringify(values));
			} catch (error) {
				console.log(error);
				setError(error.message)
			}
			setLoading(false);
		}),
		validationSchema,
	});

	return (
		<div>
			<div className='flex justify-center mt-20'>
				<div className='w-[760px] md:grid grid-cols-2'>
					<div className='flex flex-col justify-center'>
						<p className='py-5 font-bold text-sky-700 text-lg pl-5'>SIGN-IN</p>
						<form onSubmit={formik.handleSubmit}>
							<div className='flex flex-col px-5'>
								<div className='mb-3 w-full'>
									<TextField
										id='email'
										value={formik.values.email}
										label='Email'
										variant='outlined'
										className='w-full'
										onBlur={formik.handleBlur}
										onChange={formik.handleChange}
										error={formik.touched.email && Boolean(formik.errors.email)}
										helperText={formik.touched.email && formik.errors.email}
									/>
								</div>
								<div className='mb-3 w-full'>
									<TextField
										id='password'
										value={formik.values.password}
										label='Password'
										variant='outlined'
										className='w-full'
										onBlur={formik.handleBlur}
										onChange={formik.handleChange}
										error={formik.touched.password && Boolean(formik.errors.password)}
										helperText={formik.touched.password && formik.errors.password}
									/>
								</div>
								<div>
									<button
										type='submit'
										className='rounded p-2 bg-sky-700 hover:bg-sky-900 w-full text-white text-lg font-medium'>
										{isLoading ? <CircularProgress color='primary' size={20} /> : <p> Login </p>}
									</button>
									<div>{isError ? <div><span className='text-xs text-red-500 py-1'>
									{isError} </span>
									<span><a className='text-blue-500' href="/signup"> Signup</a></span>
									</div> : ''}</div>
								</div>
								<div className='text-xs text-red-500'></div>
							</div>
						</form>
					</div>

					{/* secod half of the grid */}
					<div className='hidden md:block'>
						<img src={Qrcode} alt='QRcode Image' className='object-cover h-full' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
