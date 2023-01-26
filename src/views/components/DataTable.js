import React from 'react'
import { Space,Table,Tag,} from "antd";



const DataTable = ({data, columns}) => (
	<Table
		columns={columns}
		dataSource={data}
	/>
);


export default DataTable;