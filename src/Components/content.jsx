import React, { Component } from 'react';
class Content extends Component {
	state = {};
	render() {
		return (
			<div class="container">
				<div class="row">
					<div class="col-md-8">col-md-8</div>
					<div class="col-md-4">col-md-4</div>
				</div>
				<div class="row">
					<div class="col-md">col-md</div>
					<div class="col-md">col-md</div>
					<div class="col-md">col-md</div>
				</div>
			</div>
		);
	}
}

export default Content;
