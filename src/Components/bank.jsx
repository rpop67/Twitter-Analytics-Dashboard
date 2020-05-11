import React, { Component } from 'react';
import '../bank.css';

class Bank extends Component {
	state = {};
	render() {
		return (
			<div id="app" class="flex-container">
				<div class="flex-item" style="background-color:red"></div>
				<div class="flex-item" style="background-color:blue"></div>
				<div class="flex-item" style="background-color:yellow"></div>
				<div class="flex-item" style="background-color:grey"></div>
			</div>
		);
	}
}

export default Bank;
