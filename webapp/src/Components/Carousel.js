import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Container from 'react-bootstrap/Container';

class CarouselView extends React.Component {
	render() {
		return (
				<Carousel>
					<Carousel.Item>
						<img className="d-block w-100" src="./img1.jpg" alt="First slide" />
						<Carousel.Caption>
							<h5>We sell your data to third party vendors</h5>
							<p>We dont do that. Just kidding. </p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src="./img2.jpg" alt="Second slide" />
						<Carousel.Caption>
							<h5>We sell your data to third party vendors</h5>
							<p>We dont do that. Just kidding. </p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src="./img2.jpg" alt="Third slide" />
						<Carousel.Caption>
							<h5>We sell your data to third party vendors</h5>
							<p>We dont do that. Just kidding. </p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
		);
	}
}
export default CarouselView;
