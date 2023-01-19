import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Qrcode from "../../public/Qrcode1.jpg";
import { useFormik } from "formik";
import * as yup from "yup";

const SignUp = () => {
	// <Formik
	// 	initialValues={{
	// 		email: "",
	// 		password: "",
	// 	}}
	// 	validate={(values) => {
	// 		const errors = {};
	// 		if (!values.email) {
	// 			errors.email = "Required";
	// 		} else if (
	// 			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
	// 				values.email
	// 			)
	// 		) {
	// 			errors.email =
	// 				"Invalid email address";
	// 		}
	// 		return errors;
	// 	}}
	// 	onSubmit={(
	// 		values,
	// 		{ setSubmitting }
	// 	) => {
	// 		setTimeout(() => {
	// 			alert(
	// 				JSON.stringify(
	// 					values,
	// 					null,
	// 					2
	// 				)
	// 			);
	// 			setSubmitting(false);
	// 		}, 400);
	// 	}}>
	// 	{({
	// 		values,
	// 		errors,
	// 		touched,
	// 		handleChange,
	// 		handleBlur,
	// 		handleSubmit,
	// 		isSubmitting,
	// 		/* and other goodies */
	// 	}) => (
	// 		<div className='flex justify-center mt-20'>
	// 			<div className='w-[760px] md:grid grid-cols-2'>
	// 				<div className='flex flex-col justify-center'>
	// 					<p className='py-5 font-bold text-sky-700 text-lg pl-5'>
	// 						SIGN-UP
	// 					</p>
	// 					<form
	// 						onSubmit={handleSubmit}>
	// 						<div className='flex flex-col px-5'>
	// 							<div className='mb-3 w-full'>
	// 								<TextField
	// 									id='Firstname'
	// 									label='First Name'
	// 									variant='outlined'
	// 									className='w-full'
	// 									value={values.firstname
	// 									}
	// 									onChange={handleChange}
	// 								/>
	// 							</div>
	// 							<div className='mb-3 w-full'>
	// 								<TextField
	// 									id='lastname'
	// 									label='Last Name'
	// 									variant='outlined'
	// 									className='w-full'
	// 									value={values.lastname
	// 									}
	// 									onChange={handleChange}
	// 								/>
	// 							</div>
	// 							<div className='mb-3 w-full'>
	// 								<TextField
	// 									id='email'
	// 									label='Email'
	// 									variant='outlined'
	// 									className='w-full'
	// 									value={values.email}
	// 									onChange={handleChange}
	// 								/>
	// 								{errors.email &&
	// 									touched.email &&
	// 									errors.email}
	// 							</div>
	// 							<div className='mb-3 w-full'>
	// 								<TextField
	// 									id='password'
	// 									label='Password'
	// 									variant='outlined'
	// 									className='w-full'
	// 									value={values.password
	// 									}
	// 									onChange={handleChange}
	// 								/>
	// 								{errors.password &&
	// 									touched.password &&
	// 									errors.password}
	// 							</div>
	// 							<div>
	// 								<button
	// 									type='submit'
	// 									disabled={
	// 										isSubmitting
	// 									}
	// 									className='rounded p-2 bg-sky-700 hover:bg-sky-900 w-full text-white text-lg font-medium'>
	// 									Sign Up
	// 								</button>
	// 							</div>
	// 						</div>
	// 					</form>
	// 				</div>

	// 				{/* secod half of the grid */}
	// 				<div className='hidden md:block'>
	// 					<img
	// 						src={Qrcode}
	// 						alt='Qrcode image'
	// 						className='object-cover h-full'
	// 					/>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	)}
	// </Formik>;
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		},
		onSubmit: (values) => {
			console.log(
				JSON.stringify(values)
			);
		},
	});
	return (
		<div>
			<div className='flex justify-center mt-20'>
				<div className='w-[760px] md:grid grid-cols-2'>
					<div className='flex flex-col justify-center'>
						<p className='py-5 font-bold text-sky-700 text-lg pl-5'>
							SIGN-UP
						</p>
						<form onSubmit={formik.handleSubmit}>
							<div className='flex flex-col px-5'>
								<div className='mb-3 w-full'>
									<TextField
										id='firstName'
										value={formik.values.firstName}
										label='First Name'
										variant='outlined'
										className='w-full'
										onChange={formik.handleChange}
									/>
								</div>
								<div className='mb-3 w-full'>
									<TextField
										id='lastName'
										value={formik.values.lastName}
										label='Last Name'
										variant='outlined'
										className='w-full'
										onChange={formik.handleChange}
									/>
								</div>
								<div className='mb-3 w-full'>
									<TextField
										id='email'
										value={formik.values.email}
										label='Email'
										variant='outlined'
										className='w-full'
										onChange={formik.handleChange}
									/>
								</div>
								<div className='mb-3 w-full'>
									<TextField
										id='password'
										value={formik.values.password}
										label='Password'
										variant='outlined'
										className='w-full'
										onChange={formik.handleChange}
									/>
								</div>
								<div>
									<button type="submit" className='rounded p-2 bg-sky-700 hover:bg-sky-900 w-full text-white text-lg font-medium'>
										Sign Up
									</button>
								</div>
								<div className='text-xs text-red-500'></div>
							</div>
						</form>
					</div>

					{/* secod half of the grid */}
					<div className='hidden md:block'>
						<img
							src={Qrcode}
							alt='Qrcode image'
							className='object-cover h-full'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default SignUp;
