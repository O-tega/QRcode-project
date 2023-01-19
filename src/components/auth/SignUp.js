import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Qrcode from "../../public/Qrcode1.jpg";

const SignUp = () => {
	const [email, setEmail] =
		useState("");
	const [password, setPassword] =
		useState("");
	const [firstName, setFirstName] =
		useState("");
	const [lastName, setLastName] =
		useState("");
	const [error, setError] =
		useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			email === "" &&
			password === ""
		) {
			setError(
				"please input email and password"
			);
		} else {
			setEmail("");
			setPassword("");
			setFirstName("");
			setLastName("");
			setError("");
			console.log(
				firstName,
				lastName,
				email,
				password
			);
		}
	};

	return (
		<div>
			<div className='flex justify-center mt-20'>
				<div className='w-[760px] md:grid grid-cols-2'>
					<div className='flex flex-col justify-center'>
						<p className='py-5 font-bold text-sky-700 text-lg pl-5'>
							SIGN-UP
						</p>
						<form
							onSubmit={handleSubmit}>
							<div className='flex flex-col px-5'>
								<div className='mb-3 w-full'>
									<TextField
										id='Firstname'
										label='First Name'
										variant='outlined'
										className='w-full'
										onChange={(e) =>
											setFirstName(
												e.target.value
											)
										}
									/>
								</div>
								<div className='mb-3 w-full'>
									<TextField
										id='lastname'
										label='Last Name'
										variant='outlined'
										className='w-full'
										onChange={(e) =>
											setLastName(
												e.target.value
											)
										}
									/>
								</div>
								<div className='mb-3 w-full'>
									<TextField
										id='email'
										label='Email'
										variant='outlined'
										className='w-full'
										onChange={(e) =>
											setEmail(
												e.target.value
											)
										}
									/>
								</div>
								<div className='mb-3 w-full'>
									<TextField
										id='password'
										label='Password'
										variant='outlined'
										className='w-full'
										onChange={(e) =>
											setPassword(
												e.target.value
											)
										}
									/>
								</div>
								<div>
									<button className='rounded p-2 bg-sky-700 hover:bg-sky-900 w-full text-white text-lg font-medium'>
										Sign Up
									</button>
								</div>
								<div className='text-xs text-red-500'>
									{error}
								</div>
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
