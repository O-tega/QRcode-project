import React, { useState, useEffect, Fragment } from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from '../../infrastructure/firebase/firebaseConfig';
import Table from './DataTable';

import { useNavigate } from 'react-router-dom';


const ProductInfoList =()=>{
    const columns = [
			{
				title: "ID",
				dataIndex: "ID",
				key: "ID",
			},
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
                tag: ["loser"]
			},
			{
				title: "Tags",
				key: "tags",
				dataIndex: "tags",
				render: () => (
					<>
						<button className='bg-blue-500 hover:bg-blue-700 text-white rounded p-2' >Details</button>
					</>
				),
			},
		];

    const [infoList, setInfoList] = useState([])
    let navigate = useNavigate()

    const routeChange=()=>{
        let path = '/singleitem'
        console.log("onClick")
    }

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
    console.log(infoList)


    return(
        <Fragment>
            <div className='text-center font-bold mt-5 text-white bg-sky-700 rounded mx-10 py-3 text-3xl'>PRODUCT INFORMATION LIST</div>
           <div className='mx-10'>
                <Table  data={infoList} columns={columns} />
            </div>
        </Fragment>
    )
}

export default ProductInfoList;