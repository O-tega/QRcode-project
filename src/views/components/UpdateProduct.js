import { useEffect, useState } from "react";
import { db } from "../../infrastructure/firebase/firebaseConfig";
import { doc, addDoc, updateDoc, collection } from 'firebase/firestore'
import { Firestore } from "firebase/firestore";

const UpdateProduct = () => {
	const [location, setLocation] =
		useState([
			{
				latitude: "",
				longitude: "",
			},
		]);
	const [id, setId] = useState("");

	console.log(location);

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

    useEffect(()=>{
        const docRef = Firestore.collection('projectList').doc(id)
        updateDoc(docRef).then((response)=>{
            console.log(response.id)
        }).catch(error=>{
            console.log(error)
        })
    }, [])

	return (
		<div>
			<ul>
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
