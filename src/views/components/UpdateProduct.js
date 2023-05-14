import { useEffect, useState } from 'react';
import { db } from '../../infrastructure/firebase/firebaseConfig';
import { doc, updateDoc} from 'firebase/firestore';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
	const { id } = useParams();
	console.log(id);

	const [isLoading, setLoading] = useState(false)
	const [value, setValue] = useState('');
	const [addrtype, setAddrtype] = useState(['safe', 'missing', 'stolen']);
	const Add = addrtype.map((Add) => Add);
	const handleAddrTypeChange = (e) => setValue(addrtype[e.target.value]);

	// const [location, setLocation] = useState([{
	// 	latitude: '',
	// 	longitude: '',
	// }]);


	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true)
		console.log(id);
		// console.log(location);
		console.log(value);
		const docRef = doc(db, 'projectList', id);
		await updateDoc(docRef, {
			// location: location,
			state: value,
		})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => console.log(error));

			setLoading(false)
	};


	// useEffect(() => {
	// 	navigator.geolocation.getCurrentPosition((position) => {
	// 		setLocation(
	// 			{
	// 				latitude: position.coords.latitude,
	// 				longitude: position.coords.longitude,
	// 			},
	// 		);
	// 	});

	// 	// Get a reference to the firebase document to be editted
	// }, []);

	// console.log(location);

	// updateDoc(docRef, {
	// 	location:"update location"
	// })

	return (
		<div>
			<div className='flex justify-center my-10'>
				<form className='update' onSubmit={handleSubmit}>
					<div className='my-2'>
						<select
							onChange={(e) => handleAddrTypeChange(e)}
							className='browser-default custom-select'>
							{Add.map((address, key) => (
								<option value={key} key={key}>
									{address}
								</option>
							))}
						</select>
					</div>

					<button className='w-full p-2 rounded mt-2 text text-white font-bold bg-blue-500 hover:bg-blue-700'>
						{isLoading ? <CircularProgress color="primary" size={20} className='text-white'/> : <span>submit</span>}
					</button>
				</form>
			</div>
		</div>
	);
};

export default UpdateProduct;
