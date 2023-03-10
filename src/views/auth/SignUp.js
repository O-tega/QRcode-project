import React from "react";
import TextField from "@mui/material/TextField";
import Qrcode from "../../public/Qrcode1.jpg";
import { useFormik } from "formik";
import * as yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../infrastructure/firebase/firebaseConfig";
// import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
	firstName: yup
		.string()
		.required("first name is required"),
	lastName: yup
		.string()
		.required("last name is required"),
	email: yup
		.string()
		.email("enter a valid email")
		.required("Email is required"),
	password: yup
		.string()
		.required("Password is rewuired"),
});

const SignUp = () => {
	// const navigate = useNavigate
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		},
		onSubmit: async (values) => {
			try {
				await createUserWithEmailAndPassword(
					auth,
					values.email,
					values.password
				)
					.then((userCredential) => {
						const user =
							userCredential.user;
						console.log(user);
					})
					.catch((error) => {
						console.log(error);
					});
				console.log(
					JSON.stringify(values)
				);
			} catch (error) {
				console.log(error);
			}
		},
		validationSchema: validationSchema,
	});
	return (
		<div>
			<div className='flex justify-center mt-20'>
				<div className='w-[760px] md:grid grid-cols-2'>
					<div className='flex flex-col justify-center'>
						<p className='py-5 font-bold text-sky-700 text-lg pl-5'>
							SIGN-UP
						</p>
						<form
							onSubmit={
								formik.handleSubmit
							}>
							<div className='flex flex-col px-5'>
								<div className='mb-3 w-full'>
									<TextField
										id='firstName'
										value={
											formik.values
												.firstName
										}
										label='First Name'
										variant='outlined'
										className='w-full'
										onChange={
											formik.handleChange
										}
										onBlur={
											formik.handleBlur
										}
										error={
											formik.touched
												.firstName &&
											Boolean(
												formik.errors
													.firstName
											)
										}
										helperText={
											formik.touched
												.firstName &&
											formik.errors
												.firstName
										}
									/>
								</div>
								<div className='mb-3 w-full'>
									<TextField
										id='lastName'
										value={
											formik.values
												.lastName
										}
										label='Last Name'
										variant='outlined'
										className='w-full'
										onBlur={
											formik.handleBlur
										}
										onChange={
											formik.handleChange
										}
										error={
											formik.touched
												.lastName &&
											Boolean(
												formik.errors
													.lastName
											)
										}
										helperText={
											formik.touched
												.lastName &&
											formik.errors
												.lastName
										}
									/>
								</div>
								<div className='mb-3 w-full'>
									<TextField
										id='email'
										value={
											formik.values
												.email
										}
										label='Email'
										variant='outlined'
										className='w-full'
										onBlur={
											formik.handleBlur
										}
										onChange={
											formik.handleChange
										}
										error={
											formik.touched
												.email &&
											Boolean(
												formik.errors
													.email
											)
										}
										helperText={
											formik.touched
												.email &&
											formik.errors
												.email
										}
									/>
								</div>
								<div className='mb-3 w-full'>
									<TextField
										id='password'
										value={
											formik.values
												.password
										}
										label='Password'
										variant='outlined'
										className='w-full'
										onBlur={
											formik.handleBlur
										}
										onChange={
											formik.handleChange
										}
										error={
											formik.touched
												.firstName &&
											Boolean(
												formik.errors
													.firstName
											)
										}
										helperText={
											formik.touched
												.firstName &&
											formik.errors
												.firstName
										}
									/>
								</div>
								<div>
									<button
										type='submit'
										className='rounded p-2 bg-sky-700 hover:bg-sky-900 w-full text-white text-lg font-medium'>
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
