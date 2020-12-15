import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';

class ListItem extends React.Component {
	constructor(props) {
		super(props);
		// this.packageName = this.props.packageName || '';
		// this.postTime = this.props.postTime || '';
		// this.contentTitle = this.props.contentTitle || '';
		// this.contentText = this.props.contentText || '';
		// this.tickerText = this.props.tickerText || '';
	}

	formListGroupItems(singleNotifJSON) {
		let listGroupItems = [];
		Object.keys(singleNotifJSON).forEach((key) => {
			const item = <ListGroup.Item variant="dark" key={key}>{`${key} : ${singleNotifJSON[key]}`}</ListGroup.Item>;
			listGroupItems.push(item);
		});

		return listGroupItems;
	}

	formListGroup() {
		const list = [];
		for (let index = 0; index < this.props.result.length; index++) {
			const singleNotifJSON = this.props.result[index];
			const listGroupItems = this.formListGroupItems(singleNotifJSON);
			const listGroup = (
				<Container key={index}>
					<ListGroup horizontal="sm" className="my-4" key={index}>
						{listGroupItems}
					</ListGroup>
				</Container>
			);
			list.push(listGroup);
		}
		return list;
	}
	pagination() {
		const resultList = this.formListGroup();
		const sizePerView = resultList.length / 10;

		let active = 1;
		let items = [];
		const final = [];

		for (let number = 1; number <= sizePerView; number++) {
			for (let index = (number - 1) * 10; index < number * 10; index++) {
				const element = resultList[index];
				items.push(
					<Pagination.Item key={index} active={index === active}>
						{element}
					</Pagination.Item>
				);
			}
			final.push(items);
			items = [];
		}
		const lastIndex = sizePerView * 10;
		for (let index = lastIndex; index < resultList.length; index++) {
			const element = lastIndex[index];
			items.push(
				<Pagination.Item key={index} active={index === active}>
					{element}
				</Pagination.Item>
			);
		}
		final.push(items);

		const paginationBasic = (
			<div>
				<Pagination>{final}</Pagination>
				{/* <br />

				<Pagination size="lg">{final}</Pagination>
				<br />

				<Pagination size="sm">{final}</Pagination> */}
			</div>
		);
		return paginationBasic;
	}

	render() {
		const resultList = this.formListGroup();
		return <div>{resultList}</div>;
	}
}
export default ListItem;
