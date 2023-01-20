// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey:
		"AIzaSyAJVTBuCutDf3X6_AtwZvpa4mJLvbtFxT8",
	authDomain:
		"qrcode-9a2ac.firebaseapp.com",
	projectId: "qrcode-9a2ac",
	storageBucket:
		"qrcode-9a2ac.appspot.com",
	messagingSenderId: "859403005026",
	appId:
		"1:859403005026:web:29494af7278b98e6e6f53b",
};

// Initialize Firebase
const app = initializeApp(
	firebaseConfig
);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
