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
    const [loading, setLoading]=useState(false)
    const [name, setName] = useState("")
    const [state, setState] = useState("")
    const [product, setProduct] = useState("")
    const [location, setLocation]=useState({})



    const docRef = doc(db, 'projectList', id) 

    useEffect(()=>{
         onSnapshot(docRef, (doc) => {
                let data = doc.data();
                console.log(data);
    
                setLoading(true)
                setEmail(data.email)
                setName(data.name)
                setProduct(data.product)
                setState(data.state)
                setLocation({...data.location})
                console.log(data.location)
            });
    }, [])

    // console.log(location)
    const lat = `${location.latitude}`
    const lng = `${location.longitude}`
    // console.log("lat:", lat, "lng:", lng)




    return(
        <Fragment>
        <div className='text-center font-bold text-2xl text-sky-700 flex-col mt-10'>
            <p> Name: {name}</p>
            <p> Item: {product}</p>
            <p>State: {state}</p>

        </div>
        <div className='flex justify-center mt-10'>
        {loading? <Maps lat = {lat} lng = {lng}/>: <p>loading</p>}
        </div>
        </Fragment>
    )
    
}


export default SingleItem;