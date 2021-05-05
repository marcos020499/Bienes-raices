import React, { Component, Fragment } from 'react';

import Header from './components/Header/Header.jsx'
import Content from './components/Content/Content.jsx'
import ContentFooter from './components/ContentFooter/ContentFooter'
export default class App extends Component {

	render() {
		return (
			<>
				<Header/>
				<Content/>
				<ContentFooter/>
			</>
		);
	}
}
