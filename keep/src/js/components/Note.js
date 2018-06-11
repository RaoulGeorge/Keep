import React, { Component } from "react";
import { connect } from "react-redux";
import { updateNote } from "../actions/index";

const mapStateToProps = (state, ownProps) => {
	return { note: state.notes.filter(note=> { return note.id == ownProps.details.id})[0] };
};

const mapDispatchToProps = dispatch => {
	return {
		updateNote: note => dispatch(updateNote(note))
	};
};


class ConnectedNote extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		console.log(event);
		// this.props.updateNote({title, id});

	}

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
	
const Note = connect(mapStateToProps, mapDispatchToProps)(ConnectedNote);

export default Note;

