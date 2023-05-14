import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import QrScanner from 'qr-scanner';
import { useNavigate } from 'react-router-dom'
import GeoLocation from '../../infrastructure/GeoLocation';

const Qrcode = ({ getId }) => {
	const navigate = useNavigate()
	console.log(getId);
	const urlall = window.location.href;
	const url = `${urlall.slice(0, -9)}/${getId}`;
	console.log(url);
	const [inputValue, setInputValue] = useState('');
	const [result, setResult] = useState('');

	const downloadQRcode = (e) => {
		e.preventDefault();
		let canvas = document.querySelector('canvas');
		let image = canvas.toDataURL('image/png');
		let anchor = document.createElement('a');
		anchor.href = image;
		anchor.download = `qr-code.png`;
		document.body.appendChild(anchor);
		anchor.click();
		document.body.removeChild(anchor);
		setInputValue('');
		navigate('/signin')
	};

	const readCode = (e) => {
		const file = e.target.files[0];
		if (!file) {
			return;
		}
		QrScanner.scanImage(file, {
			returnDetailedScanResult: true,
		})
			.then((result) => setResult(result.data))
			.catch((e) => console.log(e));
	};

	return (
		<div>
			<p className='text-center text-sky-700 font-bold text-small px-10 pt-10 mt-24'>
				QRCODE GENERATOR
			</p>

			<div className='my-5 flex justify-center'>
				<QRCodeCanvas size={200} value={url} viewBox={`0 0 256 256`} id='QRCode' />
			</div>
			<div className='my-10 justify-center flex'>
				<form onSubmit={downloadQRcode}>
					<button
						type='submit'
						value='Download'
						className='bg-sky-500 text-sm font-bold text-white rounded px-1 hover:bg-sky-700 py-1'>
						Download & Signin
					</button>
				</form>
			</div>
		</div>
	);
};

export default Qrcode;
