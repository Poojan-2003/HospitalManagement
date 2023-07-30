import { useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
	const [email,setemail] = useState('')
	const [password , setpassword] = useState('')
	
	// const [data, setData] = useState({ email: "", password: "" });
	// const [error, setError] = useState("");

	

	async function loginDoctor(event){
		event.preventDefault()
		const response = await fetch('http://localhost:1337/api/login' , {
		method:'POST',
		headers:{
			'Content-Type':'application/json'
		},	
		body:JSON.stringify({
				
				email,
				password
			}),
		})
		const data = await response.json()
		localStorage.setItem("email",JSON.stringify(data.email))
		localStorage.setItem("id",JSON.stringify(data.id))
		if(data.user){
			alert('Login Successful')
			window.location.href = '/MainDoctorDashboard'
		}else{
			alert('Please check your UserName and Password')
		}
		console.log(data)
	  }

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={loginDoctor}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							value={email}
							onChange={(e) => setemail(e.target.value)}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={password}
							onChange={(e) => setpassword(e.target.value)}
							required
							className={styles.input}
						/>
						{/* {error && <div className={styles.error_msg}>{error}</div>} */}
						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/DoctorSignup">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;