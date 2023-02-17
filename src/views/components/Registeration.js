import React, { Fragment, useState } from 'react'
import { useFormik } from 'formik';
import { TextField } from '@mui/material';
// import CreateForm from '../../application/CreateForm'
import { db } from '../../infrastructure/firebase/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import Qrcode from './Qrcode';

const Registeration =()=>{

    // const createForm = CreateForm()
    const [getId, setId] = useState("")

    const formik = useFormik({
        initialValues:{
            email: "",
            address:"",
            product:"",
            serialNumber:"",
            phoneNumber:"",
            location:[]
        },
        onSubmit:async (values)=> {
            console.log(values)
            const collectionRef = collection(db, 'projectList')
            await addDoc(collectionRef, values).then(response=>{
                console.log(response.id)
                setId(response.id)
            }).catch(error=>{
                console.log(error)
            })
        }


    }
    )
    return (
			<Fragment>
            <div className="md:flex justify-center">
            <div>
            <div className='text-center my-10 font-bold text-4xl text-sky-700'>Registeration</div>
            <div className='flex justify-center'>
                <form onSubmit={formik.handleSubmit}>
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
                        id='product'
                        value={formik.values.product}
                        label='Product'
                        variant='outlined'
                        className='w-full'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className='form'>
                    <TextField
                        id='serialNumber'
                        value={formik.values.serialNumber}
                        label='Product serialnumber'
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
                <button type="submit" className='bg-sky-700 hover:bg-sky-900 w-full text-center text-white font-bold rounded py-2'> Submit </button>
                </form>
                </div>
            </div>
                <Qrcode getId={getId}/>
            </div>
			</Fragment> 
		);
}


export default Registeration;