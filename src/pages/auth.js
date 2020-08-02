import React, {useState} from 'react'
import Layout from '../components/layout';
import SEO from '../components/seo';
import { isAuthenticated, signin } from '../helpers/apicalls';
import { useEffect } from 'react';


const Auth = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [redirect, setRedirect] = useState(false);

	useEffect(() => {
		if(isAuthenticated()){
			window.location.href="/";
		}
		return () => {
		}
	}, [redirect])

	const signinAction = (event) => {
		event.preventDefault();
		console.log(username)
		console.log(password)
		if (username === "" && password === ""){
			console.log("enter valid data");
			return false;
		}
		else {
			setLoading(true);
			const data = {
				"username" : username,
				"password": password
			}
			signin(data).then(data => {
				setUsername("")
				setPassword("")
				console.log(data);
				localStorage.setItem('userData', JSON.stringify(data));
				setLoading(false);
				setRedirect(true);
			}
			)
			.catch(err => console.log('log', err))
		}
	}
	const signinForm = () => {
		return (
			<>
				<div className="row" style={{ 'marginBottom': '0' }}>
					<form className="col s12 auth_form" method="POST">
						<div className="input-field">
							<i className="material-icons prefix">alternate_email_outline</i>
							<input id="username" type="text" className="validate" value={username} onChange={(e) => { setUsername(e.target.value)}} required />
							<label htmlFor="username" data-error="Enter correct Username">Username</label>
						</div>
						<div className="input-field">
							<i className="material-icons prefix">lock_outline</i>
							<input id="password" type="password" className="validate" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
							<label htmlFor="password" data-error="Enter valid Password">Password</label>
						</div>
						<div className="input-field right">
							{loading ? (
								<button type="submit" onClick={(e)=>{e.preventDefault()}} className="btn waves-effect teal darken-1">
									<i className="material-icons left">access_time</i>
									Signing ...
								</button>
							) : (<button type="submit" onClick={signinAction} className="btn waves-effect teal darken-1">
								<i className="material-icons left">forward</i>
								Signin
							</button>)}
						</div>
					</form>
				</div>
			</>
		)
	}

	return (
		<Layout>
			<SEO title="Signin" />
			<div className="container sih-auth-container">
				<div className="card-panel row container sih-auth-box">
					<h4 className="teal-text center-align">Signin to your Account</h4>
					{signinForm()}
				</div>
			</div>
		</Layout>
	)
}

export default Auth;
