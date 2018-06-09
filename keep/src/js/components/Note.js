import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
	return { note: state.notes.filter(note=> { return note.id == ownProps.details.id})[0] };
};

class ConnectedNote extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {}

	render() {
		return (
			<div>
				<input
					type="text"
					className="form-control"
					id="text"
					value={this.props.note.details}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}
	
const Note = connect(mapStateToProps)(ConnectedNote);

export default Note;

