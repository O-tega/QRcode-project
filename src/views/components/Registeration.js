import React, { Fragment, useState } from 'react'
import {Outlet} from 'react-router-dom'
import { useFormik } from 'formik';
import { TextField } from '@mui/material';
// import CreateForm from '../../application/CreateForm'
import { db } from '../../infrastructure/firebase/firebaseConfig';
import CircularProgress from '@mui/material/CircularProgress';
import { addDoc, collection } from 'firebase/firestore';
import Qrcode from './Qrcode';

const Registeration =()=>{

    // const createForm = CreateForm()
    const [getId, setId] = useState("")
    const [isLoading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues:{
            name: "",
            email: "",
            address:"",
            department:"",
            matricNumber:"",
            phoneNumber:"",
            location:[], 
            state:"safe"
        },
        onSubmit:async (values)=> {
            console.log(values)
            setLoading(true)
            try{
                const collectionRef = collection(db, 'projectList')
                const data = await addDoc(collectionRef, values)
                const response = data
                setId(response.id)
            }catch(error){
                console.log(error)
            }
            setLoading(false)
        }


    }
    )
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
										variant='outlined'
										className='w-full'
										onBlur={formik.handleBlur}
										onChange={formik.handleChange}
									/>
								</div>
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
								<button
									type='submit'
									className='bg-sky-700 hover:bg-sky-900 w-full text-center text-white font-bold rounded py-2'>
									{isLoading ? <CircularProgress color='primary' size={20} /> : <p>Sign Up</p>}
								</button>
							</form>
						</div>
					</div>
					<Qrcode getId={getId} />
					<Outlet/>
				</div>
			</Fragment>
		);
}


export default Registeration;