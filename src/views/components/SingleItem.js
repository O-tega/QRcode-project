import React, { useState, useEffect, Fragment } from 'react';
import {  onSnapshot,  doc } from 'firebase/firestore'
import { db } from '../../infrastructure/firebase/firebaseConfig';
import { Email } from '@mui/icons-material';
import {useParams} from 'react-router-dom'
import Maps from '../../infrastructure/components/Maps'


const SingleItem=()=>{
    const{id} = useParams()
    console.log(id)

    const[email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [state, setState] = useState("")
    const [product, setProduct] = useState("")
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")


    const docRef = doc(db, 'projectList', id) 

    useEffect(()=>{
         onSnapshot(docRef, (doc) => {
                let data = doc.data();
                console.log(data);
    
    
                setEmail(data.email)
                setName(data.name)
                setProduct(data.product)
                setState(data.state)
                console.log(data.location)
                Object.values(data.location).forEach(loc=>(
                    setLatitude(loc.latitude),
                    setLongitude(loc.longitude)
                ))
            });
    }, [])




    return(
        <Fragment>
        <div className='text-center font-bold text-2xl text-sky-700 flex-col mt-10'>
            <p> Owner: {name}</p>
            <p>Product name: {product}</p>
        </div>
        <div className='flex justify-center mt-10'>
            <Maps lat = {latitude} lng = {longitude}/>
        </div>
        </Fragment>
    )
    
}


export default SingleItem;