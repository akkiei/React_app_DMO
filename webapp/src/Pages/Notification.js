import React from 'react';
import NotifList from '../Components/ListItem';
import Jumbotron from '../Components/Jumbotron';
import { Container } from 'react-bootstrap';

class Notifications extends React.Component {
	constructor(props) {
		super(props);
		// need to get this JSON from DB
	}

	render() {
		const notifJSON = [
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddutopi choor ke laddutopi choor ke laddutopi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddutopi choor ke laddutopi choor ke laddutopi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddutopi choor ke laddutopi choor ke laddutopi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddutopi choor ke laddutopi choor ke laddutopi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddutopi choor ke laddutopi choor ke laddutopi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddutopi choor ke laddutopi choor ke laddutopi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddu',
				More: 'Some more text here '
			},
			{
				App: 'com.ghanta.popo',
				Time: '15/12/2020 4:41 PM',
				Title: 'Topi chooter',
				Text: 'topi choor ke laddu',
				More: 'Some more text here '
			}
		];
		return (
			<div>
				<Jumbotron heading="Welcome, Adventurer !" path="Notfications" />
				<NotifList result={notifJSON} />
			</div>
		);
	}
}

export default Notifications;
