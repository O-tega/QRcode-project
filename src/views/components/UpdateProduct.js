import { useEffect, useState } from "react";
import { db } from "../../infrastructure/firebase/firebaseConfig";
import { doc, addDoc, updateDoc, collection, setDoc } from 'firebase/firestore'
import { Firestore } from "firebase/firestore";
import { TextField } from "@mui/material";
import NewSelect from '../../infrastructure/components/Select'
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
	    const { id } = useParams();
		console.log(id);

	const [value, setValue] = useState("")
	const [addrtype, setAddrtype] =
		useState([
			"safe",
			"missing",
			"stolen",
		]);
	const Add = addrtype.map(
		(Add) => Add
	);
	const handleAddrTypeChange = (e) =>
		// console.log(
		// 	addrtype[e.target.value]
		// 	)
			setValue(addrtype[e.target.value])

	const [location, setLocation] =
		useState([
			{
				latitude: "",
				longitude: "",
			},
		]);
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")

	const handleSubmit =async(e)=>{
		e.preventDefault()
		console.log(id)
		console.log(location)
		console.log(value)
		const docRef=doc(db, 'projectList', id)
		await updateDoc(docRef, {
			email,
			// location:({...location}),
			state: value,
			name,

		}).then((response)=>{
			console.log(response)
		}).catch(error=>console.log(error))
	}

	// console.log(location);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				setLocation([
					{
						latitude:
							position.coords.latitude,
						longitude:
							position.coords.longitude,
					},
				]);
			}
		);

            // Get a reference to the firebase document to be editted

	}, []);

	
	// updateDoc(docRef, {
	// 	location:"update location"
	// })
	


	return (
		<div>
		<div className="flex justify-center my-10">
		<form className="update" onSubmit={handleSubmit}>

		<div className="my-2">
		<select
			onChange={(e) =>
				handleAddrTypeChange(e)
			}
			className='browser-default custom-select'>
			{Add.map((address, key) => (
				<option value={key} key={key}>
					{address}
				</option>
			))}
		</select>
		</div>

		<div className="my-5">
		<TextField
			id='name'
			name="name"
			label='name'
			variant='outlined'
			className='w-full '
			onChange={(e)=>setName(e.target.value)}
		/>
		</div>
		<div className="my-5">
		<TextField
			id='email'
			name="email"
			label='email'
			variant='outlined'
			className='w-full'
			onChange={(e)=>setEmail(e.target.value)}
		/>
		</div>
		<button className="w-full p-2 rounded mt-2 text text-white font-bold bg-blue-500 hover:bg-blue-700">submit</button>
		</form>
		</div>
			<ul className="text-center">
				{location.map(
					({ latitude, longitude }) => (
						<li key={latitude}>
							latitude: {latitude}{" "}
							longitude: {longitude}
						</li>
					)
				)}
			</ul>
		</div>
	);
};

export default UpdateProduct;
