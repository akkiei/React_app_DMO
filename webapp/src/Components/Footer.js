import React from 'react';
import Jumbo from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class Footer extends React.Component {
	render() {
		return (
			<div>
				<Jumbo  >
					<Container>
						<h3>{this.props.heading}</h3>
						<p>There's noone to contact !!! </p>
					</Container>
				</Jumbo>
			</div>
		);
	}
}

export default Footer;
