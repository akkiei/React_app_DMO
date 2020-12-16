import Jumbotron from '../Components/Jumbotron';
import Carousel from '../Components/Carousel';

import Footer from '../Components/Footer';
import React from 'react';
// import '../Css/App.css';

class Home extends React.Component {
	render() {
		return (
			<div>
				<Jumbotron heading="Welcome, Adventurer !" path="Home" />
				<Carousel />
				<Footer heading="Contact Us" />
			</div>
		);
	}
}

export default Home;
