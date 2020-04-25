import React, {Component} from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {
	Switch,
	Route,
} from "react-router";
import Home from "../components/home";
import Protected from "../components/protected";
import PrivateRoute from "./protectedRoute";
import { connect } from 'react-redux';
import {simpleAction} from "../actions";

class MainRouter extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/a" component={Protected}/>
					<PrivateRoute path='/protected' component={Protected} isLoggedIn={this.props.isLoggedIn}/>
				</Switch>
			</Router>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	simpleAction: () => dispatch(simpleAction())
})

const mapStateToProps = state => ({
	isLoggedIn: state.authReducer.isLoggedIn
})

export default connect(mapStateToProps, mapDispatchToProps)(MainRouter);
