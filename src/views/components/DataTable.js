import React, { useState } from 'react'
import { Space,Table} from "antd";
import { useNavigate } from 'react-router-dom';

const { Column} = Table;


const DataTable = ({data}) => {

	const navigate = useNavigate()

	const[id, setId] = useState("")
	
	console.log(id)

	return(
		<Table dataSource={data}>
			<Column
				title='ID'
				dataIndex='id'
				key='id'
			/>
			<Column
				title='Address'
				dataIndex='address'
				key='address'
			/>
			<Column
				title='Email'
				dataIndex='email'
				key='email'
			/>
			<Column
				title='Phone number'
				dataIndex='phoneNumber'
				key='phoneNumber'
			/>
			<Column
				title='Serial Number'
				dataIndex='serialNumber'
				key='serialNumber'
			/>
			<Column
				title='Product'
				dataIndex='product'
				key='product'
			/>
			<Column
				title='Product details'
				key='action'
				render={(_, record) => (
						<>
							<button onClick={()=>(setId(record.id), navigate(`/singleitem/${record.id}`))} className='bg-blue-500 hover:bg-blue-700 text-white rounded p-2' >Details</button>
						</>
				)}
			/>
		</Table>
	)

	};


export default DataTable;