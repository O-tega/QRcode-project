import React, {
	useState,
	useEffect,
	Fragment,
} from "react";
import { db } from "../../infrastructure/firebase/firebaseConfig";
import { doc, addDoc, updateDoc, onSnapshot, collection, setDoc } from 'firebase/firestore'
import { useParams } from "react-router-dom";

const SingleItemUser = () => {
	const { id } = useParams();
	console.log(id);


	const [name, setName] = useState("");
	const [product, setProduct] =useState("");
    const [location, setLocation] =
				useState([
					{
						latitude: "",
						longitude: "",
					},
				]);


	const docRef = doc(db,"projectList",id);

           useEffect(()=>{
         onSnapshot(docRef, (doc) => {
                let data = doc.data();
                console.log(data);
                setName(data.name)
                setProduct(data.product)
            });

    }, [])

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
			},
		);}, [])

        const submit=()=>{
					    updateDoc(docRef, {
						location:({...location}),
					}).then((response)=>{
						console.log(response)
					}).catch(error=>console.log(error))
				}

                console.log(location.latitude)
                submit()
 

	

	return (
		<Fragment>
			<div className='text-center font-bold text-2xl text-sky-700 flex-col mt-20 mb-10 '>
				<p> Owner: {name}</p>
				<p>Product name: {product}</p>
                </div>
				<ul className='text-center'>
					{location.map(
						({
							latitude,
							longitude,
						}) => (
							<li key={latitude}>
								latitude: {latitude}{" "}
								longitude: {longitude}
							</li>
						)
					)}
				</ul>
		</Fragment>
	);
    }


export default SingleItemUser;
