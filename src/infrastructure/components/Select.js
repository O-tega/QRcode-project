
import {useState} from 'react'

const NewSelect = () => {
	const [addrtype, setAddrtype] =
		useState([
			"Work",
			"Home",
			"school",
		]);
	const Add = addrtype.map(
		(Add) => Add
	);
	const handleAddrTypeChange = (e) =>
		console.log(
			addrtype[e.target.value]
		);

	return (
		<select
			onChange={(e) =>
				handleAddrTypeChange(e)
			}
			className='browser-default custom-select'>
			{Add.map((address, key) => (
				<option value={key}>
					{address}
				</option>
			))}
		</select>
	);
};


export default NewSelect
