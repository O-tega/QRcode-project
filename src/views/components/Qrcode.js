import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import QrScanner from "qr-scanner";
import GeoLocation from "../../infrastructure/GeoLocation";

const Qrcode = ({getId}) => {
	console.log(getId)
	const urlall = window.location.href
	const url = `${urlall.slice(0,-9)}/${getId}`
	// const url = 
	console.log(url) 
	// console.log(window.location.href)
	const [inputValue, setInputValue] =
		useState("");
	const [result, setResult] =
		useState("");

	const downloadQRcode = (e) => {
		e.preventDefault();
		let canvas =
			document.querySelector("canvas");
		let image = canvas.toDataURL(
			"image/png"
		);
		let anchor =
			document.createElement("a");
		anchor.href = image;
		anchor.download = `qr-code.png`;
		document.body.appendChild(anchor);
		anchor.click();
		document.body.removeChild(anchor);
		setInputValue("");
	};

	const readCode = (e) => {
		const file = e.target.files[0];
		if (!file) {
			return;
		}
		QrScanner.scanImage(file, {
			returnDetailedScanResult: true,
		})
			.then((result) =>
				setResult(result.data)
			)
			.catch((e) => console.log(e));
	};

	return (
		<div>
			<p className='text-center text-sky-700 font-bold text-4xl px-10 pt-10'>
				QRCODE GENERATOR
			</p>

			<div className='my-10 justify-center flex'>
				<form onSubmit={downloadQRcode}>
					{/*<input
						type='text'
						className='border rounded-l'
						onChange={(e) =>
							setInputValue(
								e.target.value
							)
						}
					/>*/}
					<button
						type='submit'
						value='Download'
						className='bg-stone-400 text-sm font-bold text-white rounded-r px-1 hover:bg-stone-500 py-1'>
						Download
					</button>
				</form>
			</div>
			{/*<p className='text-center my-5'>
				{inputValue}
			</p>
			<div className='flex justify-center pl-10 mb-12'>
				<input
					type='file'
					onChange={(e) => readCode(e)}
				/>
			</div>
			<p className='text-center text-blue-700 text-lg font-bold pb-12'>
				{result}
				</p>*/}
			<div className='my-5 flex justify-center'>
				<QRCodeCanvas
					size={250}
					value={url}
					viewBox={`0 0 256 256`}
					id='QRCode'
				/>
			</div>
			{/*<div className='justify-center flex'>
				<GeoLocation />
					</div>*/}
		</div>
	);
};

export default Qrcode;
