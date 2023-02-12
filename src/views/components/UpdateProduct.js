import { useEffect, useState } from "react";
import { db } from "../../infrastructure/firebase/firebaseConfig";
import { doc, addDoc, updateDoc, collection, setDoc } from 'firebase/firestore'
import { Firestore } from "firebase/firestore";
import { TextField } from "@mui/material";

const UpdateProduct = () => {

	const [location, setLocation] =
		useState([
			{
				latitude: "",
				longitude: "",
			},
		]);
	const [id, setId] = useState("");
	const [name, setName] = useState("")

	const handleSubmit =async(e)=>{
		e.preventDefault()
		console.log(id)
		console.log(location)
		const docRef=doc(db, 'projectList', id)
		await updateDoc(docRef, {
			email: name,
			location:({...location})
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
		<TextField
			id='id'
			name="id"
			label='id'
			variant='outlined'
			className='w-full'
			onChange={(e)=>setId(e.target.value)}
		/>
		<TextField
			id='email'
			name="email"
			label='email'
			variant='outlined'
			className='w-full'
			onChange={(e)=>setName(e.target.value)}
		/>
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
