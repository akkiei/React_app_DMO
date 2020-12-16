import React from 'react';
import Jumbo from 'react-bootstrap/Jumbotron';
import '../Css/App.css';
class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<Jumbo>
					<h3>{this.props.heading}</h3>
					<p>There's noone to contact !!! </p>
				</Jumbo>
			</div>
		);
	}
}

export default Footer;
