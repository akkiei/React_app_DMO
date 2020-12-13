import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../Css/App.css';

class LoginForm extends React.Component {
	render() {
		return (
			<Form>
				<Form.Group controlId="formBasicEmail">
					<Form.Label className="textColor">Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
					<Form.Text className="textColor">We'll never share your email with anyone else .</Form.Text>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label className="textColor">Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Form.Group controlId="formBasicCheckbox">
					{/* <Form.Check type="checkbox" label="Check me out" /> */}
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		);
	}
}

export default LoginForm;