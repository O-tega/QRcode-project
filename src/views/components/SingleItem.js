import React, { useState, useEffect, Fragment } from 'react';
import { collection, getDocs, onSnapshot, getDoc, doc, query, where } from 'firebase/firestore'
import { db } from '../../infrastructure/firebase/firebaseConfig';
import { Email } from '@mui/icons-material';


const SingleItem=()=>{

    const[email, setEmail] = useState("")
    const[latitude, setLatitude] = useState("")
    const[longitude, setLongitude] = useState("")
    const[product, setProduct] = useState("")
    const[location, setLocation] = useState({})

    const docRef = doc(db, 'projectList', 'hQteWWuUkBYJZQjzLker') 

    useEffect(()=>{
        onSnapshot(docRef, (doc)=>{
            let data = Object.assign(doc.data())
            console.log(data)
            console.log(data.email)

            setEmail(data.email)
            // setLatitude(data.location.latitude),
            // setLongitude(data.location.longitude)
            console.log(data.location)
            data.location.map(loc=>{
                console.log(loc.latitude, loc.longitude)
                setLatitude(loc.latitude)
                setLongitude(loc.longitude)
            })


})
    },[])


    return(
        <Fragment>
        <div>
            {/*<p>{location}</p>*/}
            <p>{latitude}</p>
            <p>{longitude}</p>
            <p>{email}</p>
            <p>{product}</p>
        </div>
        </Fragment>
    )
    
}


export default SingleItem;