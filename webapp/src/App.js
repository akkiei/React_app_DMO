import React from 'react';
import './Css/App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Notifications from './Pages/Notification';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/notifications">
						<Notifications />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
