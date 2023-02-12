import React from 'react'
import { Space,Table} from "antd";



const DataTable = ({data, columns,}) => (
	<Table
		columns={columns}
		dataSource={data}
	/>
);


export default DataTable;