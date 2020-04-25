import React, {Component} from 'react'
import {simpleAction} from "../../actions";
import {connect} from "react-redux";

class Protected extends Component {
	render() {
		return(
			<div className="text-center">
				This is protected page.
			</div>
		)
	}
}
const mapDispatchToProps = dispatch => ({
	simpleAction: () => dispatch(simpleAction())
})

const mapStateToProps = state => ({
	...state
})

export default connect(mapStateToProps, mapDispatchToProps)(Protected);
