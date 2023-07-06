// import { useEffect, useState, useContext } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
// import RerenderContext from "../context/RerenderContext";
// // import success from "../../images/success.png";
// // import styles from "./styles.module.css";
// // import { Fragment } from "react/cjs/react.production.min";

// const EmailVerify = () => {
//   // const [tokenExist, setTokenExists] = useContext(RerenderContext)
// 	// const [validUrl, setValidUrl] = useState(true);
// 	const param = useParams();
//   // setTokenExists(`/users/${param.id}/verify/${param.token}`)
  
// 	useEffect(() => {
// 		const verifyEmailUrl = async () => {
// 			try {
// 				const url = `/users/${param.id}/verify/${param.token}`;
// 				const response = await axios.get(url);
// 				console.log(response.data);
//         console.log("data")
// 				// setValidUrl(true);
// 			} catch (error) {
// 				console.log(error.message);
// 				// setValidUrl(false);
// 			}
// 		};
// 		verifyEmailUrl();
// 	}, []);

// 	return (
// 		<>
// 			{/* {validUrl ? ( */}

// 				<div className="">
// 					{/* <img src="" alt="success_img" className="" /> */}
// 					<h1>Email verified successfully frontend</h1>
// 					<Link to="/">
// 						<button className="">Login</button>
// 					</Link>
// 				</div>

// 			{/* ) : (
// 				<h1>404 Not Found</h1>
// 			)} */}
// 		</>
// 	);
// };

// export default EmailVerify;