import Jumbotron from '../Components/Jumbotron';
import Footer from '../Components/Footer';
import React from 'react';
// import '../Css/App.css';
import Container from 'react-bootstrap/Container';
import LoginForm from '../Components/LoginForm';
class Login extends React.Component {
	render() {
		return (
			<div>
				<Container>
					<Jumbotron heading="Login to access" path="Login" />
				</Container>
				<LoginForm />
				<Footer />
			</div>
		);
	}
}

export default Login;
