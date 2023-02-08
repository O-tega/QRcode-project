import React, { useState, useEffect, Fragment } from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from '../../infrastructure/firebase/firebaseConfig';
import Table from './DataTable';


const ProductInfoList =()=>{
    const columns = [
			{
				title: "Address",
				dataIndex: "address",
				key: "address",
				render: (text) => <a>{text}</a>,
			},
			{
				title: "email",
				dataIndex: "email",
				key: "email",
			},
			{
				title: "Phone Number",
				dataIndex: "phoneNumber",
				key: "phoneNumber",
			},
			{
				title: "Product",
				key: "product",
				dataIndex: "product",
			},
			{
				title: "Serial Number",
				key: "serialNumber",
				dataIndex: "serialNumber",
			},
		];

    const [infoList, setInfoList] = useState([])

    useEffect(()=>{
        prodInfoList()
    },[])

    // const prodInfoList = ()=>{
    //     const productCollectionRef = collection(db, 'projectList')
    //     getDocs(productCollectionRef).then(response=>{
    //         const list = response.docs.map((doc)=>({
    //             data: doc.data(),
    //             id: doc.id
    //         }))
    //         setInfoList(list)
    //         console.log(response)
    //     }).catch(error=>{
    //         console.log(error.message)
    //     })
    // }

    const prodInfoList = ()=>{
        const productCollectionRef = collection(db, 'projectList')
        onSnapshot(productCollectionRef, (snapshot)=>{
            let products =[]
            snapshot.docs.forEach((doc)=>{
                products.push({...doc.data(), id:doc.id})
            })
            setInfoList(products)
        })
    }

    const dataList = infoList.map((info)=>(
        info.values
        ))

    return(
        <Fragment>
            <div className='text-center font-bold mt-5 text-white bg-sky-700 rounded mx-10 py-3 text-3xl'>PRODUCT INFORMATION LIST</div>
           <div className='mx-10'>
                <Table key={dataList.email} data={dataList} columns={columns}/>
            </div>
        </Fragment>
    )
}

export default ProductInfoList;