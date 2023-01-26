import React, { useState, useEffect, Fragment } from 'react';
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../infrastructure/firebase/firebaseConfig';


const ProductInfoList =()=>{

    const [infoList, setInfoList] = useState([])

    useEffect(()=>{
        prodInfoList()
    },[])

    useEffect(()=>{
        console.log(infoList)
    }, [infoList])

    const prodInfoList = ()=>{
        const productCollectionRef = collection(db, 'projectList')
        getDocs(productCollectionRef).then(response=>{
            const list = response.docs.map((doc)=>({
                data: doc.data(),
                id: doc.id
            }))
            setInfoList(list)
            console.log(response)
        }).catch(error=>{
            console.log(error.message)
        })
    }

    return(
        <Fragment>
            <div className='text-center font-bold my-5 text-sky-700 text-3xl'>This is a product list page</div>

            <div>
                <ul>
                    {infoList.map(info=>(
                        <div className='flex'>
                        <li key={info.id}>{info.data.values.product}</li>
                        <li key={info.id}>{info.data.values.email}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </Fragment>
    )
}

export default ProductInfoList;