import {
	useEffect,
	useState,
} from "react";

const UpdateProduct = () => {
	// const [latitude, setLatitude] = useState("")
	// const [longitude, setLongitude]= useState("")
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
	}, []);

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
