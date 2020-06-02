import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home';
import Compare from './compare';
import Covid19 from './covid19';
import Bank from './bank';

class NavBar extends Component {
	state = {};
	render() {
		return (
			<Router>
				<div>
					<nav className="navbar navbar-expand-md navbar-dark bg-dark">
						<a class="navbar-brand" href="#">
							Twitter Dashboard
						</a>
						<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
							<div class="navbar-nav">
								<a class="nav-item nav-link active" href="#">
									<Link to={'/home'} className="nav-link">
										Home <span class="sr-only">(current)</span>
									</Link>
								</a>
								<a class="nav-item nav-link" href="#">
									<Link to={'/compare'} className="nav-link">
										Comparision : Bank vs Covid-19
									</Link>
								</a>
								<a class="nav-item nav-link" href="#">
									<Link to={'/covid19'} className="nav-link">
										Covid-19 Tweets Analysis
									</Link>
								</a>
								<a class="nav-item nav-link" href="#">
									<Link to={'/bank'} className="nav-link">
										Banking Tweets Analysis
									</Link>
								</a>
							</div>
						</div>
					</nav>
					<Switch className="switch">
						<Route exact path="/home" component={Home} />
						<Route exact path="/compare" component={Compare} />
						<Route exact path="/covid19" component={Covid19} />
						<Route exact path="/bank" component={Bank} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default NavBar;
