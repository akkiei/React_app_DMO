import Jumbotron from '../Components/Jumbotron';
import Footer from '../Components/Footer';
import React from 'react';
// import '../Css/App.css';
import Container from 'react-bootstrap/Container';
import LoginForm from '../Components/LoginForm';
class Home extends React.Component {
	render() {
		return (
			<div >
				<Container>
					<Jumbotron heading="Login to access" path="Login"/>
                    <LoginForm/>
				</Container>
				<Footer />
			</div>
		);
	}
}

export default Home;
