import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';

class ListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			itemsToDisplay: [],
			currPage: 1,
			itemsPerPage: 10
		};
	}
	componentDidMount() {
		this.a = this.pagination();
		this.setState({
			pagination: this.a
		});
	}

	formListGroupItems(singleNotifJSON) {
		let listGroupItems = [];
		Object.keys(singleNotifJSON).forEach((key) => {
			const item = <ListGroup.Item variant="dark" key={key}>{`${key} : ${singleNotifJSON[key]}`}</ListGroup.Item>;
			listGroupItems.push(item);
		});
		return listGroupItems;
	}

	formListGroup = () => {
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
		this.firstTimeRenderList(list);
		return list;
	};

	firstTimeRenderList = (resultList) => {
		if (resultList.length <= 10) {
			this.setState({
				itemsToDisplay: resultList
			});
		} else {
			this.setState({
				itemsToDisplay: resultList.slice(0, 10)
			});
		}
	};

	clickOnPage = (noOfPages, resultList, event) => {
		let currPageSelected;
		if (Object.prototype.hasOwnProperty.call(event, 'target')) {
			currPageSelected = Number(event.target.id);
		} else {
			currPageSelected = this.state.currPage;
		}
		if (currPageSelected === noOfPages) {
			this.setState({
				itemsToDisplay: resultList.slice((currPageSelected - 1) * 10),
				currPage: Number(currPageSelected)
			});
		} else {
			this.setState({
				itemsToDisplay: resultList.slice((currPageSelected - 1) * 10, (currPageSelected - 1) * 10 + 10),
				currPage: Number(currPageSelected)
			});
		}
	};
	pagination() {
		const resultList = this.formListGroup();
		const noOfPages = Math.ceil(resultList.length / this.state.itemsPerPage);

		const pagination = [];
		for (let index = 1; index <= noOfPages; index += 1) {
			pagination.push(
				<Pagination.Item
					onClick={(event) => this.clickOnPage(noOfPages, resultList, event)}
					key={index}
					active={index === this.state.currPage}
					id={index}
				>
					{index}
				</Pagination.Item>
			);
		}
		const finalPaginationList = <Pagination>{pagination}</Pagination>;

		return finalPaginationList;
	}

	render() {
		return (
			<div>
				<Container>{this.state.itemsToDisplay}</Container>
				<Container>{this.state.pagination}</Container>
			</div>
		);
	}
}
export default ListItem;
