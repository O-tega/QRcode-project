// import { onAuthStateChanged } from "firebase/auth";
// import React, {
// 	useState,
// 	useEffect,
// } from "react";
// import { auth } from "./firebaseConfig";

// const AuthDetails = () => {
// 	const [authUser, setAuthUser] =
// 		useState(null);

// 	useEffect(() => {
// 		const listen = onAuthStateChanged(
// 			auth,
// 			(user) => {
// 				if (user) {
// 					setAuthUser(user);
// 				} else {
// 					setAuthUser(null);
// 				}
// 			}
// 		);
// 	}, []);

// 	return (
// 		<div>
// 			{authUser ? (
// 				<p>signed in</p>
// 			) : (
// 				<p>signed out</p>
// 			)}
// 		</div>
// 	);
// };

// export default AuthDetails;
