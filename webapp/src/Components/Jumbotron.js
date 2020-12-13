import React from 'react';
import Jumbo from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../Css/App.css';
class Jumbotron extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const currPath = this.props.path;
		let components = <div />;
		if (currPath === 'Home') {
			components = (
				<div>
					<h1>{this.props.heading}</h1>
					<p>
						<Button href="/login" variant="primary">Login</Button> to dontMissOut to check all your notifications from
						anywhere in the world.
					</p>
				</div>
			);
		} else if (currPath == 'Login') {
			components = (
				<div>
					<h1>{this.props.heading}</h1>
					<p>Enter the same username and password to access your account.</p>
				</div>
			);
		}
		return (
			<div>
				<Jumbo fluid className="jumbotronColor">
					<Container>{components}</Container>
				</Jumbo>
			</div>
		);
	}
}

export default Jumbotron;
