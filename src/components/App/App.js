import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import Login from '../Login/Login';

const setToken = (userToken) => {
	sessionStorage.setItem('token', JSON.stringify(userToken));
} 

const getToken = () => {
	const tokenString = sessionStorage.getItem('token');
	const userToken = JSON.parse(tokenString);
	return userToken?.token
} 


function App() {
	const token = getToken();

	if(!token) {
		return <Login setToken={setToken} />
	}

	return (
		<div className="wrapper">
			<h1>Apps</h1>
			<BrowserRouter>
				<Switch>
					<Route path="/dashboard">
						<Dashboard />
					</Route>
					<Route path="/preferences">
						<Preferences />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
