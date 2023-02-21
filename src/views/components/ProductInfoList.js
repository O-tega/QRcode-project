import React, { useState, useEffect, Fragment } from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from '../../infrastructure/firebase/firebaseConfig';
import Table from './DataTable';

import { useNavigate } from 'react-router-dom';


const ProductInfoList =()=>{

    const navigate = useNavigate();


    const [infoList, setInfoList] = useState([])

    useEffect(()=>{
        prodInfoList()
    },[])


    const prodInfoList = ()=>{
        const productCollectionRef = collection(db, 'projectList')
        onSnapshot(productCollectionRef, (snapshot)=>{
            let products =[]
			let docId = []
			let newProduct;
            snapshot.docs.forEach((doc)=>{
				docId.push({id:doc.id})
                products.push({...doc.data()})
				return(
				newProduct = docId.map((id, index) => ({...id, ...products[index]})))
            })
			console.log(docId)
            setInfoList(newProduct)
        })
    }
    console.log(infoList)
    // infoList.map()
    const idList = []
    infoList.map(id=>(
        idList.push(id.id)
    ))
    console.log(idList)


    return(
        <Fragment>
            <div className='text-center font-bold mt-5 text-white bg-sky-700 rounded mx-10 py-3 text-3xl'>PRODUCT INFORMATION LIST</div>
           <div className='mx-10'>
                <Table  data={infoList} />
            </div>
        </Fragment>
    )
}

export default ProductInfoList;