import React, { useState, useEffect, Fragment } from 'react';
import { collection, getDocs } from 'firebase/firestore'
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
    const dataList = infoList.map((info)=>(
        info.data.values
    ))
    console.log(dataList)

    return(
        <Fragment>
            <div className='text-center font-bold mt-5 text-white bg-sky-700 rounded mx-10 py-3 text-3xl'>PRODUCT INFORMATION LIST</div>
            <div className='mx-10'>
                <Table data={dataList} columns={columns}/>
            </div>
        </Fragment>
    )
}

export default ProductInfoList;