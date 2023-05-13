import React, { useState, useEffect, Fragment } from 'react';
import { db } from '../../infrastructure/firebase/firebaseConfig';
import profile from '../../public/profile.png';
import { onSnapshot, doc } from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router-dom';

const Profile = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	const [name, setName] = useState('');
	const [state, setState] = useState('');
	const [matricNum, setMatricNum] = useState('');

	const docRef = doc(db, 'projectList', id);

	useEffect(() => {
		onSnapshot(docRef, (doc) => {
			let data = doc.data();
			console.log(data);
			setName(data.name);
			setMatricNum(data.matricNumber);
			setState(data.state);
			console.log(data.location);
		});
	}, []);

	return (
		<div>
			<div className=' bg-[#071e34] flex flex-col font-medium items-center justify-center h-screen'>
				<p className='text-center text-white font-bold text-xl px-10 py-3 pt-10 '>PROFILE</p>
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
					<div className='mt-3 text-white text-sm'>
						<span className='text-gray-400 font-semibold'>
							<button
								type='submit'
								onClick={() => navigate(`/singleitem/${id}`)}
								className='bg-sky-700 hover:bg-sky-900 w-full text-center text-white font-bold rounded py-2'>
								Details
							</button>
						</span>
						<span>
							<button
								type='submit'
								onClick={() => navigate(`/update/${id}`)}
								className='bg-sky-700 mt-2 hover:bg-sky-900 w-full text-center text-white font-bold rounded py-2'>
								Update
							</button>
						</span>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Profile;
