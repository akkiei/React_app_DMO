import React from 'react';
import './Css/App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="bgImg">
					<nav>
						<ul>
							<li>
								<Link to="/" />
							</li>
							<li>
								<Link to="/login" />
							</li>
						</ul>
					</nav>

					<Switch>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
