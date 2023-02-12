import React, { useState, useEffect, Fragment } from 'react';
import {  onSnapshot,  doc } from 'firebase/firestore'
import { db } from '../../infrastructure/firebase/firebaseConfig';
import { Email } from '@mui/icons-material';


const SingleItem=()=>{

    const[email, setEmail] = useState("")
    const[location, setLocation] = useState({})
    const[latitude, setLatitude] = useState("")
    const[longitude, setLongitude] = useState("")

    const docRef = doc(db, 'projectList', '4nN6wTtjcUQ5GfjEhGIg') 

    useEffect(()=>{
         onSnapshot(docRef, (doc) => {
                let data = doc.data();
                console.log(data);
    
    
                setEmail(data.email)
                console.log(data.location)
                Object.values(data.location).forEach(loc=>(
                    setLatitude(loc.latitude),
                    setLongitude(loc.longitude)
                ))
            });
    }, [])




//     useEffect(async ()=>{
//         await onSnapshot(docRef, (doc)=>{
//             let data = doc.data()
//             console.log(data)
//             console.log(data.email)
// })
//     },[])


    return(
        <Fragment>
        <div>
            <p>{latitude}</p>
            <p>{longitude}</p>
            <p>{email}</p>
        </div>
        </Fragment>
    )
    
}


export default SingleItem;