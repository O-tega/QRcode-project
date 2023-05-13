import React, { useState, useEffect, Fragment } from 'react';
import { db } from '../../infrastructure/firebase/firebaseConfig';
import { doc, addDoc, updateDoc, onSnapshot, collection, setDoc } from 'firebase/firestore';
import profile from '../../public/profile.png';
import { useParams } from 'react-router-dom';

const SingleItemUser = () => {
	const { id } = useParams();
	console.log(id);

	const [isLoading, setLoading] = useState(false);
	const [name, setName] = useState('');
	const [matricNum, setMatricNum] = useState('');
	const [product, setProduct] = useState('');
	const [state, setState] = useState('');
	const [location, setLocation] = useState([
		{
			latitude: '',
			longitude: '',
		},
	]);

	const docRef = doc(db, 'projectList', id);

	useEffect(() => {
		onSnapshot(docRef, (doc) => {
			let data = doc.data();
			console.log(data);
			setName(data.name);
			setState(data.state);
			setMatricNum(data.matricNumber);
		});
	}, []);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			setLocation({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
			});
		});
	}, []);

	const submit = () => {
		updateDoc(docRef, {
			location: { ...location },
		})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => console.log(error));
	};
	submit();

	return (
		<Fragment>
			<div>
				<div className='  flex flex-col font-medium items-center justify-center h-screen'>
					<p className='text-center text-[#20354b] font-bold text-xl px-10 py-3 pt-10 '>
						ID Card Info
					</p>
					<section className='w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg'>
						<div className='flex items-center justify-between'>
							<span className='text-gray-400 text-sm'>{matricNum}</span>
							<span className='text-emerald-400'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
									/>
								</svg>
							</span>
						</div>
						<div className='mt-6 w-fit mx-auto'>
							<img src={profile} className='rounded-full w-28 ' alt='profile picture' srcset='' />
						</div>

						<div className='mt-8 '>
							<h2 className='text-white font-bold text-2xl tracking-wide'>{name}</h2>
						</div>
						<p className='text-emerald-400 font-semibold mt-2.5'>{state}</p>

						<div className='h-1 w-full bg-black mt-8 rounded-full'>
							<div className='h-1 rounded-full w-2/5 bg-yellow-500 '></div>
						</div>
					</section>
				</div>
			</div>
		</Fragment>
	);
};

export default SingleItemUser;
