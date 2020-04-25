import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../../actions'
import {Redirect } from 'react-router'

class Home extends Component {
	constructor() {
		super();
		this.state = {
			redirectToReferrer: false
		}
	}

	simpleAction = (event) => {
		this.props.simpleAction();
		this.setState(() => ({
			redirectToReferrer: true
		}))
	}

	render() {
		const { from } = this.props.location.state || { from: { pathname: '/a' } }
		const { redirectToReferrer } = this.state
		if (redirectToReferrer === true) {
			return <Redirect to={from} />
		}

		return (
			<div className="App">
				<button onClick={this.simpleAction}>Login</button>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	simpleAction: () => dispatch(simpleAction())
})

const mapStateToProps = state => ({
	isLoggedIn: state.authReducer.isLoggedIn
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
