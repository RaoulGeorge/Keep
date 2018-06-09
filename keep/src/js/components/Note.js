import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
	return { note: state.notes.filter(note=> { return note.id == ownProps.details.id})[0] };
};

const ConnectedNote = ({note}) => (
	<div>
		<input
			type="text"
			className="form-control"
			id="text"
			value={note.details}
			// onChange={this.handleChange}
		/>
	</div>
	
);

const Note = connect(mapStateToProps)(ConnectedNote);

export default Note;

